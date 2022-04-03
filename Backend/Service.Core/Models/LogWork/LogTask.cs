using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Core.Models.LogWork
{
    public class LogTask
    {
        public int Id { get; set; }
        public DateTime From { get; set; }
        public DateTime To { get; set; }
        public DateTime LogAt { get; set; }
        public int Duration { get; set; }
        public string Description { get; set; }
        public Guid TaskId { get; set; }
        [ForeignKey(nameof(TaskId))]
        public virtual Task Task { get; set; }
    }
}
