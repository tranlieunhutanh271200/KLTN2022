using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Core.Models.Tickets
{
    public class TicketType: AuditEntity
    {
        public Guid DomainId { get; set; }
        public string DomainName { get; set; }
        public string Abbreviation { get; set; }
        public string Description { get; set; }
        public virtual ICollection<Ticket> Tickets { get; set; }
    }
}
