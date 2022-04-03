using Service.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Course.gRPC.Models
{
    public class Answer: AuditEntity
    {
        public string Content { get; set; }
        public bool IsCorrectAnswer { get; set; }
    }
}
