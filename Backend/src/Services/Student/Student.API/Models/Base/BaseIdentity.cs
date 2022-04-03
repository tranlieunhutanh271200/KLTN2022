using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Student.API.Models.Base
{
    public abstract class BaseIdentity
    {
        public string Fullname { get; set; }
        public string HomeNumber { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string PermanentAddress { get; set; }
        public string CurrentAddress { get; set; }
        public DateTime DoB { get; set; }
        public int Age => DateTime.Now.Year - DoB.Year;
        public string Avatar { get; set; }
    }
}
