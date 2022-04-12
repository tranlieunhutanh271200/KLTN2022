using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Service.Core.EnumData;

namespace Service.Core.Object
{
    public class MQObject
    {
        public ActionType ActionType { get; set; }
        public Channel MyProperty { get; set; }
    }
}
