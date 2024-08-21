using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using PeliculasAPI.DTOs;
using PeliculasAPI.Entidades;

namespace PeliculasAPI.Controllers
{
    [Route("api/cines")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "esadmin")]
    public class CinesController: CustomBaseController
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        private readonly IOutputCacheStore outputCacheStore;
        private const string cacheTag = "cines";

        public CinesController(ApplicationDbContext context, IMapper mapper,
            IOutputCacheStore outputCacheStore)
            :base(context, mapper, outputCacheStore, cacheTag)
        {
            this.context = context;
            this.mapper = mapper;
            this.outputCacheStore = outputCacheStore;
        }

        [HttpGet]
        [OutputCache(Tags = [cacheTag])]
        public async Task<List<CineDTO>> Get([FromQuery] PaginacionDTO paginacion)
        {
            return await Get<Cine, CineDTO>(paginacion, ordenarPor: c => c.Nombre);
        }

        [HttpGet("{id:int}", Name = "ObtenerCinePorId")]
        [OutputCache(Tags = [cacheTag])]
        public async Task<ActionResult<CineDTO>> Get(int id)
        {
            return await Get<Cine, CineDTO>(id);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CineCreacionDTO cineCreacionDTO)
        {
            return await Post<CineCreacionDTO, Cine, CineDTO>(cineCreacionDTO, "ObtenerCinePorId");
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> Put(int id, [FromBody] CineCreacionDTO cineCreacionDTO)
        {
            return await Put<CineCreacionDTO, Cine>(id, cineCreacionDTO);
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            return await Delete<Cine>(id);
        }
    }
}
