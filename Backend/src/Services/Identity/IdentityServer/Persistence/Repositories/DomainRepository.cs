using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Service.Core.Models.Identities;
using Service.Core.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityServer.Persistence.Repositories
{
    public class DomainRepository : AsyncRepository<Domain, Guid>, IDomainRepository
    {
        public DomainRepository(DbContext context, IConfiguration configuration) : base(context, configuration)
        {
        }

        public async Task<Domain> CreateSampleDomain(Domain domain)
        {
            _dbSet.Add(domain);
            return domain;
        }
        public async Task<List<Domain>> GetDomainsAsync()
        {
            var result = await GetAllAsync();
            return result.ToList();
        }
    }
}
