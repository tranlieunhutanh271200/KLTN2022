using Microsoft.Extensions.DependencyInjection;
using Service.Core.Persistence;
using Service.Core.Persistence.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityServer.Persistence
{
    public static class RegisterPersistence
    {
        public static IServiceCollection RegisterPersistences(this IServiceCollection services)
        {
            services.AddScoped<IUnitOfWork, UnitOfWork<IdentityDbContext>>();
            return services;
        }
    }
}
