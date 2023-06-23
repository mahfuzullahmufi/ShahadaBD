using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class CustomerBusket
    {
        public CustomerBusket()
        {
        }

        public CustomerBusket(string id)
        {
            Id = id;
        }

        public string Id { get; set; }
        public List<BasketItem> Items { get; set; } = new List<BasketItem>();
        //public int? DeliveryMethodId { get; set; }
        //public string ClientSecret { get; set; }
        //public string PaymentIntentId { get; set; }
        //public decimal ShippingPrice { get; set; }
    }
}
