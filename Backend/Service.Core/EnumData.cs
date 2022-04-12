using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Core
{
    public class EnumData
    {
        public enum Channel
        {

        }
        public enum QueueType
        {
            MSMQ,
            ActiveMQ
        }
        public enum ActionType
        {
            SendRequest,
            SendResponse
        }
    }
}
