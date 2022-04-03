using Service.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Core.Models.Courses
{
    public abstract class Answer: AuditEntity
    {
        public string AnswerType => GetType().Name;
        public string Content { get; set; }
        public bool IsCorrectAnswer { get; set; }
    }
}
