using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Core.Utils
{
    public interface IHashIds
    {
        void SetSalt(string salt);
        string Decode(string value);
        string Encode(string value);
    }
}
