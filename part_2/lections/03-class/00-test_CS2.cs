using System;
using System.Collections.Generic;

public class Transport { // родительский класс
    protected string brand;  // protected - доступен в наследниках
    protected int year;
    
    public Transport(string brand, int year) {
        this.brand = brand;
        this.year = year;
    }
    
    public virtual string GetInfo() {  // virtual - можно переопределить
        return $"Транспортное средство: {brand}, {year} года";
    }
    
    public virtual void Start() {
        Console.WriteLine($"{brand}: Запуск двигателя...");
    }
}

public class Car : Transport { // простое наследование от одного родителя и без интерфейса
    private string model;
    private int doors;
    
    public Car(string brand, string model, int year, int doors) 
        : base(brand, year)  // вызов конструктора родителя
    {
        this.model = model;
        this.doors = doors;
    }
    
    public override string GetInfo() { // override - переопределим виртуальный метод
        return $"Автомобиль: {brand} {model}, год - {year}, дверей - {doors}";
    }
    
    public void Signal() { // свой метод
        Console.WriteLine($"{brand} {model}: Бип-бип!");
    }
}

public class Program
{
    public static void Main()
    {
        Car myCar = new Car("Toyota", "Camry", 2020, 4);
        Console.WriteLine(myCar.GetInfo());
        myCar.Start();
        myCar.Signal();
    }
}

// онлайн-компилятор: https://dotnetfiddle.net
