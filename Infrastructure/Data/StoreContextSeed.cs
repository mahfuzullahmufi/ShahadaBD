using System.Text.Json;
using Microsoft.Extensions.Logging;
using Core.Entities;

namespace Infrastructure.Data
{
    public class StoreContextSeed
    {
        public static async Task SeedAsync(StoreContext context, ILoggerFactory loggerFactory)
        {
            try
            {
                
                if (!context.ProductBrands.Any())
                {
                    var fileName = @"C:\Users\mahfu\Project\ShahadaBD\ShahadaBD\Data\SeedData\brands.json";
                    var brandsData = File.ReadAllText(fileName);
                    var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);

                    foreach (var item in brands)
                        context.ProductBrands.AddRange(item);

                    await context.SaveChangesAsync();
                }

                if (!context.ProductTypes.Any())
                {
                    var fileName = @"C:\Users\mahfu\Project\ShahadaBD\ShahadaBD\Data\SeedData\types.json";
                    var typesData = File.ReadAllText(fileName);
                    var types = JsonSerializer.Deserialize<List<ProductType>>(typesData);

                    foreach (var item in types)
                        context.ProductTypes.AddRange(item);

                    await context.SaveChangesAsync();
                }

                if (!context.Products.Any())
                {
                    var fileName = @"C:\Users\mahfu\Project\ShahadaBD\ShahadaBD\Data\SeedData\products.json";
                    var productsData = File.ReadAllText(fileName);
                    //var productsData = File.ReadAllText(path + "./Data/SeedData/products.json");
                    var products = JsonSerializer.Deserialize<List<Product>>(productsData);

                    foreach (var item in products)
                        context.Products.AddRange(item);

                    await context.SaveChangesAsync();
                }

                //if (!context.DeliveryMethods.Any())
                //{
                //    var dmData = File.ReadAllText(path + @"/Data/SeedData/delivery.json");
                //    var methods = JsonSerializer.Deserialize<List<DeliveryMethod>>(dmData);

                //    foreach (var item in methods)
                //    {
                //        context.DeliveryMethods.Add(item);
                //    }

                //    await context.SaveChangesAsync();
                //}
            }
            catch (Exception ex)
            {
                var logger = loggerFactory.CreateLogger<StoreContextSeed>();
                logger.LogError(ex.Message);
            }
        }
    }
}
