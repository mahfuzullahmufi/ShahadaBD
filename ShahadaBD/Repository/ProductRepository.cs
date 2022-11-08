using Microsoft.EntityFrameworkCore;
using ShahadaBD.Data;
using ShahadaBD.Entities;

namespace ShahadaBD.Repository
{
    public class ProductRepository : IProductRepository
    {
        private readonly StoreContext _context;

        public ProductRepository(StoreContext context)
        {
            _context = context;
        }

        public async Task<IReadOnlyList<Product>> GetProductsAsync()
        {
            //var products = await _context.Products.ToListAsync();
            //return products;

            return await _context.Products
                .Include(p => p.ProductType)
                .Include(p => p.ProductBrand)
                .ToListAsync();
        }

        public async Task<Product> GetByIdAsync(int id)
        {
            //var product = await _context.Products.FindAsync(id);
            //return product;

            return await _context.Products
                .Include(p => p.ProductType)
                .Include(p => p.ProductBrand)
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<IReadOnlyList<ProductBrand>> GetProductBrandsAsync()
        {
            var brands = await _context.ProductBrands.ToListAsync();
            return brands;
        }

        public async Task<IReadOnlyList<ProductType>> GetProductTypesAsync()
        {
            var types = await _context.ProductTypes.ToListAsync();
            return types;

        }
    }
}
