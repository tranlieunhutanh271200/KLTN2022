using IdentityServer.Models.Dtos;
using IdentityServer.Persistence.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityServer.Services
{
    public class AccountService : IAccountService
    {
        private readonly IAccountRepository _accountRepository;
        public AccountService()
        {

        }
        public Task<bool> DeleteAccount(string email)
        {
            throw new NotImplementedException();
        }

        public Task<TokenResponseDTO> GenerateToken(string email)
        {
            throw new NotImplementedException();
        }

        public Task<bool> LockAccount(string email, TimeSpan lockTo)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Register(string email, string password)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UnlockAccount(string email)
        {
            throw new NotImplementedException();
        }
    }
}
