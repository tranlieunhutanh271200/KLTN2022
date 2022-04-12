using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityServer.Utils
{
    public static class RegisterUtils
    {
        public static IApplicationBuilder RegisterRequestMiddleware(this IApplicationBuilder builder, IWebHostEnvironment env, IConfiguration configuration)
        {
            return builder;
        }
        public static IApplicationBuilder RegisterResponseMiddleware(this IApplicationBuilder buider, IWebHostEnvironment env, IConfiguration configuration)
        {
            return buider; ;
        }
    }
}
