using Service.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Core.Models.Courses
{
    public class Subject: AuditEntity
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public int Period { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public virtual ICollection<Section> Sections { get; set; }
        public virtual ICollection<SubjectSchedule> Schedules { get; set; }
    }
}
