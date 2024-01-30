# brew install python3
# install python extention

# print blir som vår console.log()
print("hello world!")

# variabler deklareres uten var, let, const

# string
name = "ludvig"
# number
age = 27
print(name)

if(name == "ludvig"):
    print("true")

if(age == 27):
    print("age is 27")


# ingen automatisk typeendring
if(age == "27"):
    print("this works")
else:
    print("this does not work")

# function
def MyFunction():
    print("from inside function")

MyFunction()


# for(let i = 0; i<3; i++)
for i in range(3):
    print(i)

#for(let i = 1; i<5; i++)
for i in range(1,5):
    print(i)

