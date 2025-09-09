## Stepik  

> как подавать свои решения на проверку в систему Stepik  

Примеры оформления кода на разных языках:  

py
   на вход в одной строке подаются два целых числа через пробел - найти сумму

a, b = map(int, input().split())
print(a + b)



js
    на вход в программу подаются строки
    в каждой строке одно натуральное число
    найти максимальное нечётное число

 const lines = require('fs').readFileSync(0, 'utf8').split('\n');
  let nums = lines.map(Number).filter(x => x%2);
  console.log(Math.max(...nums));

js
    на вход в программу подаются строки
    в каждой строке одно натуральное число
    найти максимальное нечётное число

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = []; // массив для хранения считываемых строк

rl
    .on('line', line => lines.push(line))
    .on('close', () => {
        let res = Math.max(
            ...lines
                .map(x => Number(x))
                .filter(x => x%2 != 0)
        );
        console.log(res);
}); 



// js
process.stdin.on("data", (data) => {
    const input = data.toString().trim();
    const numbers = input.split(' ').map(Number);
    const evenNumber = numbers.find(num => num % 2 === 0);
    console.log(evenNumber);
});
process.stdin.on("end", () => { process.exit(); });



java

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        System.out.println(a + b);
    }
}

java

import java.util.Scanner;
import java.util.Arrays;

class Main {
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    String[] items = scan.nextLine().split(" ");
    int a = Integer.parseInt(items[0]);
    int b = Integer.parseInt(items[1]);
    System.out.println(a + b);
    scan.close();
  }
}


cs

using System;

class MainClass {
    public static void Main (string[] args) {
        string[] arr = Console.ReadLine().Split(' ');
        int a = int.Parse(arr[0]);
        int b = int.Parse(arr[1]);
        Console.WriteLine(a + b);
    }
}


cs

using System;

int a = int.Parse(Console.ReadLine());
int b = int.Parse(Console.ReadLine());
Console.WriteLine(a+b);



c

#include <iostream>
using namespace std;
int main() {
    int x1, y1;
    cin >> x1 >> y1;
    int a = x2 + x1;
    cout << a;
    return 0;
}



OneScript - 1C

// на вход строка - на выход она же маленькими буквами
Перем Строка;
Если ВвестиСтроку(Строка, "", 1000) Тогда
    Сообщить(НРег(Строка));
    КонецЕсли;