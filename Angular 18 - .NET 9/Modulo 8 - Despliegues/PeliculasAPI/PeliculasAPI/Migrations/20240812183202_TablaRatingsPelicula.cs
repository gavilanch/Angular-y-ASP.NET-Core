using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PeliculasAPI.Migrations
{
    /// <inheritdoc />
    public partial class TablaRatingsPelicula : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RatingsPeliculas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Puntuacion = table.Column<int>(type: "int", nullable: false),
                    PeliculaId = table.Column<int>(type: "int", nullable: false),
                    UsuarioId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RatingsPeliculas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RatingsPeliculas_AspNetUsers_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RatingsPeliculas_Peliculas_PeliculaId",
                        column: x => x.PeliculaId,
                        principalTable: "Peliculas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RatingsPeliculas_PeliculaId",
                table: "RatingsPeliculas",
                column: "PeliculaId");

            migrationBuilder.CreateIndex(
                name: "IX_RatingsPeliculas_UsuarioId",
                table: "RatingsPeliculas",
                column: "UsuarioId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RatingsPeliculas");
        }
    }
}
