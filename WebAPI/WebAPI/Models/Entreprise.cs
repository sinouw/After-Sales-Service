using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Entreprise
    {
        public Entreprise()
        {
            //Services = new HashSet<Service>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public int Title { get; set; }
        public int Email { get; set; }
        public int Size { get; set; }
        public int Description { get; set; }
        public int Phone { get; set; }
        public int ImageUrl { get; set; }

        //public ICollection<Service> Services { get; set; }
    }
}
