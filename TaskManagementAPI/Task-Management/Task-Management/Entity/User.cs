﻿namespace Task_Management.Entity
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
       // public ICollection <TaskItem> Tasks { get; set; }
        public string Phone { get; set; }
      //  public BindingAddress Address { get; set; }
    }
}