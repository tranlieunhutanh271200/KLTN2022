using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityServer.Models.Dtos
{
    public class LockAccountRequestDTO
    {
        public string Email { get; set; }
        public TimeSpan Duration { get; set; }
        public bool Status { get; set; } = false;
    }
}
