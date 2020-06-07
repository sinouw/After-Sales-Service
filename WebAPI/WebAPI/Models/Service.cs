using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Service
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string Label { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public DateTime CreationDate { get; set; } = DateTime.Now;


        //public ICollection<Reclamation> Reclamations { get; set; }

        ////navigation props
        //public Guid EntrepriseId { get; set; }
        //public Entreprise Entreprise { get; set; }


    }
}
