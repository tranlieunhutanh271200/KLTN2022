using Service.Core.Models;
using Student.API.Models.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Student.API.Models
{
    public class Parent: BaseIdentity
    {
        public Guid StudentId { get; set; }
        public virtual Student Student { get; set; }
    }
}
