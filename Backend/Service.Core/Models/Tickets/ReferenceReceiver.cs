using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Core.Models.Tickets
{
    public class ReferenceReceiver: AuditEntity
    {
        public Guid TicketId { get; set; }
        public virtual Ticket Ticket { get; set; }
        public Guid ReceiverId { get; set; }

    }
}
