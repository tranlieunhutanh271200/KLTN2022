using IdentityServer.Models;
using IdentityServer.Models.Dtos;
using Service.Core.Models.DTOs.Identities;
using Service.Core.Models.Identities;
using Service.Core.Persistence.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityServer.Persistence.Repositories
{
    public interface IAccountRepository
    {
        Task<Account> RegisterAccount(AccountRegisterDTO accountRegisterDTO, Role role);
        Task<string> GenerateToken(LoginDTO loginDTO);
        Task<RefreshToken> GenerateRefreshToken(string ipAddress);
        Task<bool> LockAccount(string email, TimeSpan duration);
    }
}
