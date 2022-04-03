using Service.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Room.gRPC.Models
{
    public class ClassRoom: AuditEntity
    {
        public string ClassRoomName { get; set; }
        public ClassRoomStatus ClassRoomStatus { get; set; }
        public ClassRoomType ClassRoomType { get; set; }
    }
}
