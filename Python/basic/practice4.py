python = "Python is Amazing"
print(python.lower())
print(python.upper())
print(python[0].isupper())
print(len(python))
print(python.replace("Python", "Java"))

index = python.index("n")
print(index)
index = python.index("n", index + 1)
print(index)

print(python.find("Java")) # 원하는 값이 없으면 -1을 반환
# print(python.index("Java")) # 원하는 값이 없으면 오류내면서 프로그램 종료
print("hi")

print(python.count("n"))