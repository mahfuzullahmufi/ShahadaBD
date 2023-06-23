using API.Controllers;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ShahadaBD.Controllers
{
    
    public class BusketController : BaseApiController
    {
        private readonly IBusketRepository _busketRepository;
        private readonly IMapper _mapper;
        public BusketController(IBusketRepository busketRepository, IMapper mapper)
        {
            _mapper = mapper;
            _busketRepository = busketRepository;
        }

        [HttpGet]
        public async Task<ActionResult<CustomerBusket>> GetBasketById(string id)
        {
            var basket = await _busketRepository.GetBasketAsync(id);

            return Ok(basket ?? new CustomerBusket(id));
        }

        [HttpPost]
        public async Task<ActionResult<CustomerBusket>> UpdateBasket(CustomerBusket basket)
        {
            var customerBasket = _mapper.Map<CustomerBusket>(basket);

            var updatedBasket = await _busketRepository.UpdateBasketAsync(customerBasket);

            return Ok(updatedBasket);
        }

        [HttpDelete]
        public async Task DeleteBasketAsync(string id)
        {
            await _busketRepository.DeleteBasketAsync(id);
        }
    }
}
