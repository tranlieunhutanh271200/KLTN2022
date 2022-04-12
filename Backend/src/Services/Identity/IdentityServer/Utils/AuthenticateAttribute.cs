using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityServer.Utils
{
    public class AuthenticateAttribute: Attribute
    {
        public string Role { get; set; }
        public AuthenticateAttribute(string role)
        {
            Role = role;
        }
    }
}
