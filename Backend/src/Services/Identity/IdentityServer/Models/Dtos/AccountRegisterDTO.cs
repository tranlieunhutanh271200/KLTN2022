using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityServer.Models.Dtos
{
    public class AccountRegisterDTO
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
