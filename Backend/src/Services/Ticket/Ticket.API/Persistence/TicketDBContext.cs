using Microsoft.EntityFrameworkCore;
using Service.Core.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ticket.API.Persistence
{
    public class TicketDBContext: DbContext
    {
        public TicketDBContext(DbContextOptions<TicketDBContext> options): base(options)
        {

        }
        public DbSet<Service.Core.Models.Tickets.Ticket> Tickets { get; set; }
        public DbSet<>
    }
}
