# Create a student object that has a name and age

class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def printSelf(self):
        print(self.name, self.age)

ludvig = Student("ludvig", 27)

ludvig.printSelf()