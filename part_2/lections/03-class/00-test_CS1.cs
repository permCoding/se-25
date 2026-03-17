using System;

public class Car {
    private string brand;  // инкапсуляция
    private string model;
    
    public Car(string brand, string model) {
        this.brand = brand;
        this.model = model;
    }
    
    public string GetInfo() {
        return $"{brand} {model}";
    }
}

public class Program
{
    public static void Main()
    {
        Car myCar = new Car("Toyota", "Camry"); // имплементация
        Console.WriteLine(myCar.GetInfo());
    }
}

// онлайн-компилятор: https://dotnetfiddle.net
