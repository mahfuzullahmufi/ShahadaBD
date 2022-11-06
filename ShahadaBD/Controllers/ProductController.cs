using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShahadaBD.Data;
using ShahadaBD.Entities;

namespace ShahadaBD.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ProductController : ControllerBase
    {
        private readonly StoreContext _context;
        public ProductController(StoreContext context)
        {
            _context = context;

        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            var products = await _context.Products.ToListAsync();
            return Ok(products);
        }
    }
}
