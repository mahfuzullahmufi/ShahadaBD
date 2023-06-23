using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IBusketRepository
    {
        Task<CustomerBusket> GetBasketAsync(string basketId);
        Task<CustomerBusket> UpdateBasketAsync(CustomerBusket basket);
        Task<bool> DeleteBasketAsync(string basketId);
    }
}
