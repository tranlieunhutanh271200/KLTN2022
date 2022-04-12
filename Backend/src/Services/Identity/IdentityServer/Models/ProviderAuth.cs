using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityServer.Models
{
    public class ProviderAuth
    {
        public Guid Id { get; set; }
        public string Provider { get; set; }
        public string Key { get; set; }
        public Guid AccountId { get; set; }
        public virtual Account Account { get; set; }
    }
}
