using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityServer.Models
{
    public class AccountToken
    {
        public int Id { get; set; }
        public string Token { get; set; }
        public DateTime GeneratedAt { get; set; }
        public DateTime AbsoluteExpire { get; set; }
    }
}
