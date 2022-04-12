using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Core.Models.LogWork
{
    public class Task: AuditEntity
    {
        public string TaskName { get; set; }
        public string Description { get; set; }
        public Guid SupervisorId { get; set; }
        public DateTime StartAt { get; set; }
        public DateTime DueTo { get; set; }
        public virtual ICollection<LogTask> LogTasks { get; set; }
    }
}
