using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Core.Models.Courses
{
    public class SectionDocument: AuditEntity
    {
        public Guid SectionId { get; set; }
        [ForeignKey(nameof(SectionId))]
        public virtual Section Section { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Password { get; set; }
        public string Path { get; set; }
        public string DownloadName { get; set; }
    }
}
