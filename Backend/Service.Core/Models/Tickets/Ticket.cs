using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Core.Models.Tickets
{
    public class Ticket: AuditEntity
    {
        public string Title { get; set; }
        public Guid OwnerId { get; set; }
        public string OwnerUsername { get; set; }
        public Guid TicketTypeId { get; set; }
        [ForeignKey(nameof(TicketTypeId))]
        public virtual TicketType TicketType { get; set; }
        public DateTime ToDate { get; set; }
        public string Detail { get; set; }
        public Guid SupervisorId { get; set; }
        public TicketStatus TicketStatus { get; set; }
        public bool IsHistory { get; private set; }
        public bool IsRoot { get; private set; }
        public Guid? RootId { get; set; }
        public virtual Ticket Root { get; set; }
        public virtual ICollection<Ticket> Histories { get; set; }
        public virtual ICollection<TicketComment> Comments { get; set; }
        public virtual ICollection<AttachedFile> AttachedFiles { get; set; }
        public virtual ICollection<ReferenceReceiver> ReferenceReceivers { get; set; }
        public Ticket()
        {
            SetRoot();
        }
        public void SetRoot()
        {
            IsHistory = false;
            IsRoot = true;
            foreach (var history in Histories)
            {
                history.IsHistory = true;
                history.IsRoot = false;
            }
        }
    }
}
