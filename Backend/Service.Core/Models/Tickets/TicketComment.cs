using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Core.Models.Tickets
{
    public class TicketComment
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public Guid TicketId { get; set; }
        public virtual Ticket Ticket { get; set; }
        public Guid OwnerId { get; set; }
        public string Content { get; set; }
    }
}
