using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Core.Models.Courses
{
    public class SubjectSchedule: AuditEntity
    {
        public Guid SubjectId { get; set; }
        public virtual Subject Subject { get; set; }
        public int Period => (int)(Math.Round((EndTime - StartTime).TotalMinutes))/45;
        public DateTime StartTime { get; set; }
        public DateTime EndTime;
    }
}
