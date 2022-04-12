using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Core.Models.DTOs.Identities
{
    public class LoginDTO
    {
        public string Domain { get; set; }
        public string Password { get; set; }
    }
}
