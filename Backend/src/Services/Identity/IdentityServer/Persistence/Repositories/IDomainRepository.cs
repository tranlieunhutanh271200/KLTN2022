using Service.Core.Models.Identities;
using Service.Core.Persistence.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityServer.Persistence.Repositories
{
    public interface IDomainRepository
    {
        Task<Domain> CreateSampleDomain(Domain domain);
        Task<List<Domain>> GetDomainsAsync();
    }
}
