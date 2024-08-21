using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using PeliculasAPI.DTOs;
using PeliculasAPI.Utilidades;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace PeliculasAPI.Controllers
{
    [Route("api/usuarios")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "esadmin")]
    public class UsuariosController: ControllerBase
    {
        private readonly UserManager<IdentityUser> userManager;
        private readonly SignInManager<IdentityUser> signInManager;
        private readonly IConfiguration configuration;
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public UsuariosController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager,
            IConfiguration configuration, ApplicationDbContext context, IMapper mapper)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.configuration = configuration;
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet("ListadoUsuarios")]
        public async Task<ActionResult<List<UsuarioDTO>>> ListadoUsuarios([FromQuery] PaginacionDTO paginacionDTO)
        {
            var queryable = context.Users.AsQueryable();
            await HttpContext.InsertarParametrosPaginacionEnCabecera(queryable);
            var usuarios = await queryable.ProjectTo<UsuarioDTO>(mapper.ConfigurationProvider)
                .OrderBy(x => x.Email).Paginar(paginacionDTO).ToListAsync();

            return usuarios;
        }

        [HttpPost("registrar")]
        [AllowAnonymous]
        public async Task<ActionResult<RespuestaAutenticacionDTO>> Registrar(CredencialesUsuarioDTO credencialesUsuarioDTO)
        {
            var usuario = new IdentityUser
            {
                Email = credencialesUsuarioDTO.Email,
                UserName = credencialesUsuarioDTO.Email
            };

            var resultado = await userManager.CreateAsync(usuario, credencialesUsuarioDTO.Password);

            if (resultado.Succeeded)
            {
                return await ConstruirToken(usuario);
            }
            else
            {
                return BadRequest(resultado.Errors);
            }
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<ActionResult<RespuestaAutenticacionDTO>> Login(CredencialesUsuarioDTO credencialesUsuarioDTO)
        {
            var usuario = await userManager.FindByEmailAsync(credencialesUsuarioDTO.Email);

            if (usuario is null)
            {
                var errores = ConstruirLoginIncorrecto();
                return BadRequest(errores);
            }

            var resultado = await signInManager.CheckPasswordSignInAsync(usuario,
                credencialesUsuarioDTO.Password, lockoutOnFailure: false);

            if (resultado.Succeeded)
            {
                return await ConstruirToken(usuario);
            }
            else
            {
                var errores = ConstruirLoginIncorrecto();
                return BadRequest(errores);
            }
        }

        [HttpPost("HacerAdmin")]
        public async Task<IActionResult> HacerAdmin(EditarClaimDTO editarClaimDTO)
        {
            var usuario = await userManager.FindByEmailAsync(editarClaimDTO.Email);

            if (usuario is null)
            {
                return NotFound();
            }

            await userManager.AddClaimAsync(usuario, new Claim("esadmin", "true"));
            return NoContent();
        }

        [HttpPost("RemoverAdmin")]
        public async Task<IActionResult> RemoverAdmin(EditarClaimDTO editarClaimDTO)
        {
            var usuario = await userManager.FindByEmailAsync(editarClaimDTO.Email);

            if (usuario is null)
            {
                return NotFound();
            }

            await userManager.RemoveClaimAsync(usuario, new Claim("esadmin", "true"));
            return NoContent();
        }

        private IEnumerable<IdentityError> ConstruirLoginIncorrecto()
        {
            var identityError = new IdentityError() { Description = "Login incorrecto" };
            var errores = new List<IdentityError>();
            errores.Add(identityError);
            return errores;
        }

        private async Task<RespuestaAutenticacionDTO> ConstruirToken(IdentityUser identityUser)
        {
            var claims = new List<Claim>
            {
                new Claim("email", identityUser.Email!),
                new Claim("lo que yo quiera", "cualquier valor")
            };

            var claimsDB = await userManager.GetClaimsAsync(identityUser);

            claims.AddRange(claimsDB);

            var llave = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["llavejwt"]!));
            var creds = new SigningCredentials(llave, SecurityAlgorithms.HmacSha256);

            var expiracion = DateTime.UtcNow.AddYears(1);

            var tokenDeSeguridad = new JwtSecurityToken(issuer: null, audience: null, claims: claims,
                expires: expiracion, signingCredentials: creds);

            var token = new JwtSecurityTokenHandler().WriteToken(tokenDeSeguridad);

            return new RespuestaAutenticacionDTO
            {
                Token = token,
                Expiracion = expiracion
            };
        }
    }
}
