using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ShahadaBD.Entities;

namespace ShahadaBD.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options) : base (options)
        {

        }

        DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {

           
                builder.Entity<Product>().HasData(
                    new Product
                    {
                        Id = 1,
                        Name = "Bangladesh"
                    },
                    new Product
                    {
                        Id = 2,
                        Name = "Saudi Arabia"
                    },
                    new Product
                    {
                        Id = 3,
                        Name = "Egypt"
                    }
                    );
            
        }
    }
}
