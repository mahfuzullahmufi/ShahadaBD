using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShahadaBD.Data;
using ShahadaBD.DTO;
using ShahadaBD.Entities;
using ShahadaBD.Repository;
using ShahadaBD.Specificatons;
using Microsoft.AspNetCore.Http;
using API.Errors;
using API.Helpers;

namespace ShahadaBD.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ProductsController : ControllerBase
    {
        //private readonly StoreContext _context;
        //private readonly IProductRepository _repo;
        private readonly IGenericRepository<ProductBrand> _productBrandRepo;
        private readonly IGenericRepository<ProductType> _productTypeRepo;
        private readonly IGenericRepository<Product> _productsRepo;
        private readonly IMapper _mapper;

        public ProductsController(IGenericRepository<Product> productsRepo,
            IGenericRepository<ProductType> productTypeRepo,
            IGenericRepository<ProductBrand> productBrandRepo, IMapper mapper)
        {
            
            _productsRepo = productsRepo;
            _productTypeRepo = productTypeRepo;
            _productBrandRepo = productBrandRepo;
            _mapper = mapper;
        }
        
        [HttpGet]
        public async Task<ActionResult<Pagination<ProductToReturnDTO>>> GetProducts(
            [FromQuery] ProductSpecParams productParams)
        {
            var spec = new ProductsWithTypesAndBrandsSpecification(productParams);
            var countSpec = new ProductsWithFiltersForCountSpecification(productParams);

            var totalItems = await _productsRepo.CountAsync(countSpec);

            var products = await _productsRepo.ListAsync(spec);

            var data = _mapper.Map<IReadOnlyList<ProductToReturnDTO>>(products);

            return Ok(new Pagination<ProductToReturnDTO>(productParams.PageIndex,
                productParams.PageSize, totalItems, data));
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ProductToReturnDTO>> GetProductById(int id)
        {
            var spec = new ProductsWithTypesAndBrandsSpecification(id);

            var product = await _productsRepo.GetEntityWithSpec(spec);

            if (product == null) return NotFound(new ApiResponse(404));

            return _mapper.Map<Product, ProductToReturnDTO>(product);
            
        }

        [HttpGet("brands")]
        public async Task<ActionResult<List<ProductBrand>>> GetProductBrands()
        {
            var brands = await _productBrandRepo.ListAllAsync();
            return Ok(brands);
        }

        [HttpGet("types")]
        public async Task<ActionResult<List<ProductBrand>>> GetProductTypes()
        {
            var types = await _productTypeRepo.ListAllAsync();
            return Ok(types);
        }
    }
}
