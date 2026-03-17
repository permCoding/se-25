using System;

public class Program
{
    public class Car {
        private string brand;
        private string model;
        
        public Car(string brand, string model) {
            this.brand = brand;
            this.model = model;
        }
        
        public string GetInfo() {
            return $"{brand} {model}";
        }
    }

    public static void Main()
    {
        Car myCar = new Car("Toyota", "Camry");
        Console.WriteLine(myCar.GetInfo());
    }
}