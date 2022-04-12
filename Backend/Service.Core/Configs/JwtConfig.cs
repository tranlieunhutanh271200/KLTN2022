using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Core.Configs
{
    public class JwtConfig
    {
        public string TokenSecret { get; set; }
        public int TokenLifetime { get; set; }
    }
}
