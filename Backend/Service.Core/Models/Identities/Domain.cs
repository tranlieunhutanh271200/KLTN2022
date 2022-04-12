using Service.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Core.Models.Identities
{
    public class Domain: AuditEntity
    {
        public string Abbreviation { get; set; }
        public string School { get; set; }
        public bool IsActive { get; set; }
        public string SchoolUrl { get; set; }
        public string SchoolLogo { get; set; }
        public virtual ICollection<Account> Accounts { get; set; }
    }
}
