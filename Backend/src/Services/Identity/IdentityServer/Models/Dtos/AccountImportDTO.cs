using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityServer.Models.Dtos
{
    public class AccountImportDTO
    {
        public IFormFile File { get; set; }
    }
}
