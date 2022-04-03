using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityServer.Models.Dtos
{
    public interface IAuthResponse
    {
        string Email { get; set; }
        string Fullname
        {
            get; set;
        }
        string PhoneNumber
        {
            get; set;
        }
        string Avatar { get; set; }
    }
}
