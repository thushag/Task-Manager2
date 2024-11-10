using Microsoft.EntityFrameworkCore;
using Task_Management.Entity;

namespace Task_Management.Database
{
    public class TaskContext:DbContext
    {
        public TaskContext(DbContextOptions<TaskContext> options) : base(options) 
        {
        }

        public DbSet<TaskItem> Tasks { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<Address> Address { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
            .HasOne(a => a.Address)
            .WithOne(b => b.User)
            .HasForeignKey<Address>(c => c.userId);

            base.OnModelCreating(modelBuilder);
        }
    }
   
}
