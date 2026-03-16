# Шаг 1:
class Dog:
    def __init__(self, name):
        self.name = name

    def to_speak(self):
        return f"{self.name} says Гав-гав!"

# Шаг 2: Создаем объект на основе класса
my_dog = Dog("Бобик")
print(my_dog.to_speak())
