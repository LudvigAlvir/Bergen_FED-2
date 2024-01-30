
# FizzBuzz 

# Lag en loop, print alle tall mellom 0 og 50.

for i in range(51):
    print(i)

# På alle tall som er delelige på 3, print "Fizz" i stedet

for i in range(1,51):
    if(i%3 == 0):
        print("Fizz")
    else:
        print(i)


# På alle tall som er delelige på 5, print "Buzz" i stedet

for i in range(1,51):
   
    if(i%3 == 0):
        print("Fizz")
    elif(i%5 == 0):
        print("Buzz")
    else:
        print(i)

# På alle tall som er delelige på 3 og 5 print "FizzBuzz" i stedet
        
for i in range(1,51):
    if(i%5 == 0 and i%3 == 0):
        print("FizzBuzz")
    elif(i%3 == 0):
        print("Fizz")
    elif(i%5 == 0):
        print("Buzz")
    else:
        print(i)