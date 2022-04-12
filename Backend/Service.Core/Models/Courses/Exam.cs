using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Core.Models.Courses
{
    public class Exam
    {
        public Guid SectionId { get; set; }
        [ForeignKey(nameof(SectionId))]
        public virtual Section Section { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime AutoStartDate { get; set; }
        public int Duration { get; set; }
        public int TotalAttempts { get; set; }
        public bool IsRandomize { get; set; }
        public int TotalQuestions { get; set; }
        public virtual ICollection<Question> Questions { get; set; }
    }
}
