using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Student.API.Models
{
    public class StudentSubject
    {
        public Guid StudentId { get; set; }
        public Guid SubjectId { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public int MyProperty { get; set; }
    }
}
