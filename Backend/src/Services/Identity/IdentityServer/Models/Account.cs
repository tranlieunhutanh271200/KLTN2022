using Service.Core.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityServer.Models
{
    public class Account: AuditEntity
    {
        public string Email { get; set; }
        public string HashPassword { get; set; }
        public string Salt { get; set; }
        public bool IsDisabled { get; set; }
        public bool IsLocked { get; set; }
        public Guid RoleId { get; set; }
        [ForeignKey(nameof(RoleId))]
        public virtual Role Role { get; set; }
        public Guid DomainId { get; set; }
        [ForeignKey(nameof(DomainId))]
        public virtual Domain Domain { get; set; }
        public virtual ICollection<ProviderAuth> ProvidersAuth { get; set; }
        public DateTime LastLockUntil { get; set; } = DateTime.MinValue;
    }
}
