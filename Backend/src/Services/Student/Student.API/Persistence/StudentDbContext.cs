using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Student.API.Persistence
{
    public class StudentDbContext: DbContext
    {
        public StudentDbContext(DbContextOptions<StudentDbContext> options): base(options)
        {

        }
        public DbSet<Models.Student> Students { get; set; }
        public DbSet<Models.Parent> Parents { get; set; }
    }
}
