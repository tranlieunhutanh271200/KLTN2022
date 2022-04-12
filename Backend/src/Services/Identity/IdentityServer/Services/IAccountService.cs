using IdentityServer.Models;
using IdentityServer.Models.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityServer.Services
{
    public interface IAccountService
    {
        Task<TokenResponseDTO> GenerateToken(string email);
        Task<bool> Register(string email, string password);
        Task<bool> LockAccount(string email, TimeSpan lockTo);
        Task<bool> UnlockAccount(string email);
        Task<bool> DeleteAccount(string email);
    }
}
