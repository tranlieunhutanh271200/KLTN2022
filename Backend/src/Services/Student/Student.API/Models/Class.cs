using Service.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Student.API.Models
{
    public class Class: AuditEntity
    {
        public string ClassName { get; set; }
        public Guid RoomId { get; set; }
        public int TotalStudent { get; set; }
        public virtual ICollection<Student> Students { get; set; }
    }
}
