using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Core.Models.Resources
{
    public class Audio: Resource
    {
        public int AudioLength { get; set; }
        public bool Downloadable { get; set; }
    }
}
