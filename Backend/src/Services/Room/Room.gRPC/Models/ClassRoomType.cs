using Service.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Room.gRPC.Models
{
    public class ClassRoomType: AuditEntity
    {
        public Guid DomainId { get; set; }
        public string Name { get; set; }
    }
}
