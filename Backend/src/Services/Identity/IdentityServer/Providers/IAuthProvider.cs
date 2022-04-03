using IdentityServer.Models.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityServer.Providers
{
    public interface IAuthProvider
    {
        IAuthResponse Auth();
    }
}
