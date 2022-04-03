using Microsoft.EntityFrameworkCore;
using Service.Core.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Student.API.Persistence.Repositories
{
    public class StudentRepository : AsyncRepository<Models.Student, Guid>
    {
        public StudentRepository(DbContext context) : base(context)
        {
        }
    }
}
