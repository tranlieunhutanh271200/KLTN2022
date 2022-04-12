using IdentityServer.Models;
using IdentityServer.Persistence.Consts;
using Microsoft.EntityFrameworkCore;
using Service.Core.Models.Identities;
using Service.Core.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityServer.Persistence
{
    public class Seed : ISeeder
    {
        public void SeedData(IdentityDbContext dbContext)
        {
            Domain adminDomain = new Domain()
            {
                Abbreviation = DomainConst.ADMIN.ToLower(),
                IsActive = true,
            };
            if (!dbContext.Roles.Any())
            {
                RoleConst roles = new RoleConst();
                foreach (var roleField in typeof(RoleConst).GetFields())
                {
                    Role sysRole = new Role()
                    {
                        RoleName = roleField.GetValue(roles).ToString()
                    };
                    dbContext.Roles.Add(sysRole);
                }
                dbContext.SaveChanges();
            }
            if (!dbContext.Domains.Any(domain => domain.Abbreviation == DomainConst.ADMIN.ToLower()))
            {
                dbContext.Domains.Add(adminDomain);
                dbContext.SaveChanges();
            }
            if (!dbContext.Accounts.Any(acc => acc.Role.RoleName == RoleConst.DOMAIN_ADMIN))
            {
                Role role = dbContext.Roles.FirstOrDefault(r => r.RoleName == RoleConst.DOMAIN_ADMIN);
                CryptoUtil.MD5.Hash("admin@123", out var salt, out string hashed);
                Account account = new Account()
                {
                    Username = "admin",
                    HashPassword = hashed,
                    Salt = salt,
                    Email = "admin@admin.com",
                    Domain = adminDomain,
                    Role = role,
                };
                dbContext.Accounts.Add(account);
                dbContext.SaveChanges();
            }
        }
    }
}
