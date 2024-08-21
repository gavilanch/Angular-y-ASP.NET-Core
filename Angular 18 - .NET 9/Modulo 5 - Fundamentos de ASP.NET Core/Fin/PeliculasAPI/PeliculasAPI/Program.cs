using PeliculasAPI;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddOutputCache(opciones =>
{
    opciones.DefaultExpirationTimeSpan = TimeSpan.FromSeconds(60);
});

builder.Services.AddSingleton<IRepositorio, RepositorioEnMemoria>();

builder.Services.AddTransient<ServicioTransient>();
builder.Services.AddScoped<ServicioScoped>();
builder.Services.AddSingleton<ServicioSingleton>();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();


app.UseAuthorization();

app.MapControllers();

app.UseOutputCache();


app.Run();
