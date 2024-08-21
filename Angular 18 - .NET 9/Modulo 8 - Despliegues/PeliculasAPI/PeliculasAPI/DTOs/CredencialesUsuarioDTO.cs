using System.ComponentModel.DataAnnotations;

namespace PeliculasAPI.DTOs
{
    public class CredencialesUsuarioDTO
    {
        [EmailAddress]
        [Required]
        public required string Email { get; set; }
        [Required]
        public required string Password { get; set; }
    }
}
