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

    }
   
}
