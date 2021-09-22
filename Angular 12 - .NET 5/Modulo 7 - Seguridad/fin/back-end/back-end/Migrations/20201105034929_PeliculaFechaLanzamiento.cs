using Microsoft.EntityFrameworkCore.Migrations;

namespace PeliculasAPI.Migrations
{
    public partial class PeliculaFechaLanzamiento : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "FechaEstreno",
                table: "Peliculas",
                newName: "FechaLanzamiento");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "FechaLanzamiento",
                table: "Peliculas",
                newName: "FechaEstreno");
        }
    }
}
