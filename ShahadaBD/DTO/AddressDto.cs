using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class AddressDto
    {
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string Road { get; set; }
        [Required]
        public string District { get; set; }
        [Required]
        public string Upazila { get; set; }
        [Required]
        public string PostCode { get; set; }
    }
}