using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ShahadaBD.Entities;
using System.Reflection;

namespace ShahadaBD.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options) : base (options)
        {

        }

        public DbSet<Product> Products { get; set; }
        public DbSet<ProductBrand> ProductBrands { get; set; }
        public DbSet<ProductType> ProductTypes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            //modelBuilder.Entity<Product>().HasData(
            //    new Product
            //    {
            //        Id = 1,
            //        Name= "Angular Speedster Board 2000",
            //        Description= "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
            //        Price= 200,
            //        PictureUrl= "images/products/sb-ang1.png",
            //        ProductTypeId= 1,
            //        ProductBrandId= 1
            //    },
            //    new Product
            //    {
            //        Id=2,
            //        Name= "Green Angular Board 3000",
            //        Description= "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
            //        Price= 150,
            //        PictureUrl= "images/products/sb-ang2.png",
            //        ProductTypeId= 1,
            //        ProductBrandId= 1
            //    },
            //    new Product
            //    {
            //        Id=3,
            //        Name= "Core Board Speed Rush 3",
            //        Description= "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
            //        Price= 180,
            //        PictureUrl= "images/products/sb-core1.png",
            //        ProductTypeId= 1,
            //        ProductBrandId= 2
            //    }
            //    );

        }
    }
}
