using Microsoft.EntityFrameworkCore;
using Room.gRPC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Room.gRPC.Persistence
{
    public class RoomDbContext: DbContext
    {
        public RoomDbContext(DbContextOptions<RoomDbContext> options): base(options)
        {

        }
        public DbSet<ClassRoom> ClassRooms { get; set; }
    }
}
