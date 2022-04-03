using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Core.Models.Courses
{
    public class Section: AuditEntity
    {
        public string Title { get; set; }
        public int Order { get; set; }
        public Guid SubjectId { get; set; }
        public virtual Subject Subject { get; set; }
        public virtual ICollection<Quiz> Quizzes { get; set; }
        public virtual ICollection<Exam> Exams { get; set; }

    }
}
