using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Core.Object
{
    public class CacheObject<T>
    {
        public DateTime AbsoluteTimeOut { get; set; }
        public T Value { get; set; }
    }
}
