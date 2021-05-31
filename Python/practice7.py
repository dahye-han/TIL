# 튜플
menu = ("돈까스" , "치즈까스")
print(menu[0])
print(menu[1])

# menu.add("생선까스")

# name = "A"
# age = 20
# hobby = "coding"
# print(name, age, hobby)

(name, age, hobby) = ("A", 20, "coding")
print(name, age, hobby)

# 집합(set)
# 중복 안됨, 순서 없음
my_set = {1,2,3,3,3}
print(my_set)

java = {"A", "B", "C"}
python = set(["A", "D"])

# 교집합
print(java & python)
print(java.intersection(python))

# 합집합
print(java | python)
print(java.union(python))

# 차집합
print(java - python)
print(java.difference(python))

# add
python.add("E")
print(python)

# remove 
python.remove("D")
print(python)