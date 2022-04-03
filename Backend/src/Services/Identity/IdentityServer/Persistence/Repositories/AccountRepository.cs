using AutoMapper;
using IdentityServer.Models;
using IdentityServer.Models.Dtos;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json.Linq;
using Serilog;
using Service.Core.Configs;
using Service.Core.Models.DTOs.Identities;
using Service.Core.Models.Identities;
using Service.Core.Persistence;
using Service.Core.Utils;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace IdentityServer.Persistence.Repositories
{
    public class AccountRepository : AsyncRepository<Account, Guid>, IAccountRepository
    {
        public AccountRepository(IdentityDbContext context, IConfiguration configuration) : base(context, configuration)
        {
        }

        public async Task<RefreshToken> GenerateRefreshToken(string ipAddress)
        {
            using (var rngCryptoServiceProvider = new RNGCryptoServiceProvider())
            {
                var randomBytes = new byte[64];
                rngCryptoServiceProvider.GetBytes(randomBytes);
                return new RefreshToken
                {
                    Token = Convert.ToBase64String(randomBytes),
                    Expires = DateTime.Now.AddDays(7),
                    Created = DateTime.Now,
                    CreatedByIp = ipAddress
                };
            }
        }

        public async Task<string> GenerateToken(LoginDTO loginDTO)
        {
            var identity = loginDTO.Domain.Split(@"\");
            var queryAccount = await _dbSet.Where(acc => acc.Domain.Abbreviation == identity[0] && acc.Username == identity[1]).Include(inc => inc.Role).AsNoTracking().FirstOrDefaultAsync();
            if(queryAccount == null)
            {
                return string.Empty;
            }
            if (!CryptoUtil.MD5.CompareHash(loginDTO.Password, queryAccount.Salt, queryAccount.HashPassword))
            {
                return string.Empty;
            }
            Claim[] claims = new Claim[]
            {
                new Claim(ClaimTypes.NameIdentifier, queryAccount.Id.ToString()),
                new Claim(ClaimTypes.Name, queryAccount.Username),
                new Claim(ClaimTypes.Email, queryAccount.Email),
                new Claim(ClaimTypes.Role, queryAccount.Role.Id.ToString()),
            };

            ClaimsIdentity claimIdentity = new ClaimsIdentity(claims);
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetSection("JwtSettings:TokenSecret").Value));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenDescriptor = new SecurityTokenDescriptor()
            {
                Expires = DateTime.Now.Add(TimeSpan.FromSeconds(int.Parse(_configuration.GetSection("JwtSettings:TokenLifetime").Value))),
                SigningCredentials = credentials,
                Issuer = _configuration.GetSection("JwtSettings:Issuer").Value,
                Subject = claimIdentity
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);


            return tokenHandler.WriteToken(token);
        }

        public async Task<bool> LockAccount(string email, TimeSpan duration)
        {
            var account = await _dbSet.FirstOrDefaultAsync(acc => acc.Email == email);
            if (account == null)
            {
                return false;
            }
            account.IsLocked = true;
            account.LastLockUntil = DateTime.Now + duration;
            var result = await UpdateEntity(account.Id,account);
            return result != null;
        }

        public async Task<Account> RegisterAccount(AccountRegisterDTO accountRegisterDTO, Role role)
        {
            throw new NotImplementedException();
        }
    }
}
