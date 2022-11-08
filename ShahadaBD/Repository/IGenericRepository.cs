using ShahadaBD.Entities;
using ShahadaBD.Specificatons;
using static ShahadaBD.Specificatons.ISpecification;

namespace ShahadaBD.Repository
{
    public interface IGenericRepository<T> where T : BaseEntity
    {
        Task<T> GetByIdAsync(int id);
        Task<IReadOnlyList<T>> ListAllAsync();

        Task<T> GetEntityWithSpec(ISpecification<T> spec);
        Task<IReadOnlyList<T>> ListAsync(ISpecification<T> spec);
    }
}
