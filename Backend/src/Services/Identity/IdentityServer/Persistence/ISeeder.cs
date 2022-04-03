using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityServer.Persistence
{
    public interface ISeeder
    {
        void SeedData(IdentityDbContext dbContext);
    }
}
