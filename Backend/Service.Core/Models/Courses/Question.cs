using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Core.Models.Courses
{
    public abstract class Question: AuditEntity
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public virtual ICollection<Answer> Answers { get; set; }
        public string QuestionType => GetType().Name;

        public abstract bool CheckAnwer(Answer answer);
    }
}
