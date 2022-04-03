using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityServer.Models.Dtos
{
    public class TokenResponseDTO
    {
        public int StatusCode { get; set; }
        public TokenData Data { get; set; }
    }
    public class TokenData
    {
        public string Token { get; set; }
        public string Type { get; set; }
        public int Lifetime { get; set; }
    }
}
