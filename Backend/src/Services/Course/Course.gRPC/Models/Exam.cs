using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Course.gRPC.Models
{
    public class Exam
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime AutoStartDate { get; set; }
        public int Duration { get; set; }
        public int TotalAttempts { get; set; }
    }
}
