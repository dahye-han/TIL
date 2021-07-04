print(1+1)
print(3-2)
print(5*2)
print(6/3)

print(2**3)
print(5%3)
print(10%3)
print(5//3)
print(10//3)

print(10 > 3)
print(4 >= 7)
print(10 < 3)
print(5 <= 5)

print(3 == 3)
print(1 != 3)
print(not(1 != 3))

print((3 > 0) and (3 < 5))
print((3 > 0) & (3 < 5))

print((3 > 0) or (3 > 5))
print((3 > 0) | (3 > 5))

print(2 + 3 * 4)
print((2+ 3) * 4)
number = 2 + 3 * 4
print(number)
number = number + 2 
print(number)
number += 2
print(number)
number *= 2
print(number)
number /= 2
print(number)
number -= 2
print(number)

number %= 5
print(number)

print(abs(-5))
print(pow(4, 2))
print(max(5, 12))
print(min(5, 12))
print(round(3.14))
print(round(4.99))

from math import *
print(floor(4.99))
print(ceil(3.14))
print(sqrt(16))

from random import *
print(random()) # 0.0 ~ 1.0 미만의 임의의 값 생성
print(random() * 10)
print(int(random() * 10))

print(randrange(1, 46))
print(randint(1, 45))