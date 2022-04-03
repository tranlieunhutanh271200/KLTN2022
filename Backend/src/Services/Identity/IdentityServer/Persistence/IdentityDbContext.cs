using IdentityServer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Service.Core.Models;
using Service.Core.Models.Identities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace IdentityServer.Persistence
{
    public class IdentityDbContext: DbContext
    {
        public IdentityDbContext(DbContextOptions<IdentityDbContext> options) : base(options)
        {
        }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Domain> Domains { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<ProviderAuth> ProviderAuths { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Role>().HasMany(m => m.Accounts).WithOne(o => o.Role).OnDelete(DeleteBehavior.SetNull);
            modelBuilder.Entity<Account>(e =>
            {
                e.HasOne(o => o.Role).WithMany(m => m.Accounts).OnDelete(DeleteBehavior.NoAction);
                e.HasMany(m => m.ProvidersAuth).WithOne(o => o.Account).OnDelete(DeleteBehavior.Cascade);
            });
            modelBuilder.Entity<ProviderAuth>().HasOne(o => o.Account).WithMany(m => m.ProvidersAuth).OnDelete(DeleteBehavior.NoAction);
        }
        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            var _httpContextAccessor = this.GetService<IHttpContextAccessor>();
            var entries = ChangeTracker.Entries().Where(e => e.Entity is AuditEntity).ToList();
            foreach (var entry in entries)
            {
                if(entry.State == EntityState.Added)
                {
                    ((AuditEntity)entry.Entity).CreatedBy = _httpContextAccessor.HttpContext.User?.Identity?.Name ?? "System";
                    ((AuditEntity)entry.Entity).CreatedDate = DateTime.Now;
                }
                if(entry.State == EntityState.Modified)
                {
                    Entry((AuditEntity)entry.Entity).Property(p => p.CreatedBy).IsModified = false;
                    Entry((AuditEntity)entry.Entity).Property(p => p.CreatedDate).IsModified = false;
                    ((AuditEntity)entry.Entity).ModifiedBy = _httpContextAccessor.HttpContext.User.Identity.Name;
                    ((AuditEntity)entry.Entity).ModifiedDate = DateTime.Now;
                }
            }
            return base.SaveChangesAsync(cancellationToken);
        }
        public override int SaveChanges()
        {
            var _httpContextAccessor = this.GetService<IHttpContextAccessor>();
            var entries = ChangeTracker.Entries().Where(e => e.Entity is AuditEntity).ToList();
            foreach (var entry in entries)
            {
                if (entry.State == EntityState.Added)
                {
                    ((AuditEntity)entry.Entity).CreatedBy = _httpContextAccessor?.HttpContext?.User?.Identity?.Name ?? "System";
                    ((AuditEntity)entry.Entity).CreatedDate = DateTime.Now;
                }
                if (entry.State == EntityState.Modified)
                {
                    Entry((AuditEntity)entry.Entity).Property(p => p.CreatedBy).IsModified = false;
                    Entry((AuditEntity)entry.Entity).Property(p => p.CreatedDate).IsModified = false;
                    ((AuditEntity)entry.Entity).ModifiedBy = _httpContextAccessor.HttpContext.User.Identity.Name;
                    ((AuditEntity)entry.Entity).ModifiedDate = DateTime.Now;
                }
            }
            return base.SaveChanges();  
        }
    }
}
