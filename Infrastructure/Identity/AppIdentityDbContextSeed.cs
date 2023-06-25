using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Mufi",
                    Email = "mufi@gmail.com",
                    UserName = "mufi@gmail.com",
                    Address = new Address
                    {
                        FirstName = "Mahfuzullah",
                        LastName = "Mufi",
                        Road = "Pourosova Office Road",
                        District = "Mymensingh",
                        Upazila = "Ishwarganj",
                        PostCode = "2280"
                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}