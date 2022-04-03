using Microsoft.EntityFrameworkCore;
using Service.Core.Models.Courses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Course.gRPC.Persistence
{
    public class CourseDbContext: DbContext
    {
        public CourseDbContext(DbContextOptions<CourseDbContext> options): base(options)
        {

        }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<MultichoiceQuestion> MultichoiceQuestions { get; set; }
        public DbSet<FilloutQuestion> FilloutQuestions { get; set; }

    }
}
