using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Models
{
    public class ReclamationContext : IdentityDbContext
    {
        public ReclamationContext(DbContextOptions options) : base(options)
        {

        }

        // Creating Roles for the application
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<IdentityRole>().HasData(
                    new { Id = "1", Name = "Admin", NormalizedName = "ADMIN" },
                    new { Id = "2", Name = "User", NormalizedName = "USER" }
                );


            builder.Entity<Entreprise>()
                .HasMany(c => c.Services)
                .WithOne(e => e.Entreprise)
                .HasForeignKey(u => u.EntrepriseId);

            builder.Entity<Service>()
                .HasMany(c => c.Reclamations)
                .WithOne(e => e.Service)
                .HasForeignKey(u => u.ServiceId);


        }

        public DbSet<ApplicationUser> ApplicationUsers { get; set; }

        public DbSet<WebAPI.Models.Service> Service { get; set; }

        public DbSet<WebAPI.Models.Entreprise> Entreprise { get; set; }

        public DbSet<WebAPI.Models.Reclamation> Reclamation { get; set; }
    }
}
