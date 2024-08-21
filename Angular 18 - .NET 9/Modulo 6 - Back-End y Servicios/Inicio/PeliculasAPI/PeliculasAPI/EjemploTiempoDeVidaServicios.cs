﻿namespace PeliculasAPI
{
    public class ServicioTransient
    {
        private readonly Guid _id;
        public ServicioTransient()
        {
            _id = Guid.NewGuid();
        }

        public Guid ObtenerId => _id;
    }

    public class ServicioScoped
    {
        private readonly Guid _id;
        public ServicioScoped()
        {
            _id = Guid.NewGuid();
        }

        public Guid ObtenerId => _id;
    }

    public class ServicioSingleton
    {
        private readonly Guid _id;
        public ServicioSingleton()
        {
            _id = Guid.NewGuid();
        }

        public Guid ObtenerId => _id;
    }
}
