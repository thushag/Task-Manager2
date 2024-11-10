namespace Task_Management.Entity
{
    public class Address
    {
        public int id { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string City { get; set; }
        public int? userId { get; set; }
        public User? User { get; set; }
    }
}
