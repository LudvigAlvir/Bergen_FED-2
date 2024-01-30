
# Printe ut alle primtall mellom 3 og 100

for i in range(3,100):
    isPrime = True
    for k in range(2,i):
        if(i%k == 0):
            isPrime = False
            break
    if(isPrime):
        print(i)    
