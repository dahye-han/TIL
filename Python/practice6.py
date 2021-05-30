# 리스트 []

# 지하철 칸별로 10명, 20명, 30명
# subway1 = 10
# subway2 = 20
# subway3 = 30

subway = [10, 20, 30]
print(subway)

subway = ["A", "B", "C"]
print(subway)

print(subway.index("B"))

subway.append("D")
print(subway)

subway.insert(1, "E")
print(subway)

print(subway.pop())
print(subway)

subway.append("A")
print(subway)
print(subway.count("A"))

# 정렬
num_list = [5,2,4,3,1]
num_list.sort()
print(num_list)

# 순서 뒤집기
num_list.reverse()
print(num_list)

# 모두 지우기
num_list.clear()
print(num_list)

# 다양한 자료형 함께 사용
num_list = [5,2,4,3,1]
mix_list = ["A", 20, True]
# print(mix_list)

# 리스트 확장
num_list.extend(mix_list)
print(num_list)

cabinet = { 3 : "A", 100 : "B" }
print(cabinet[3])
print(cabinet[100])

print(cabinet.get(3)) #get인 경우 값이 없으면 None 출력
# print(cabinet[5]) #[]인경우는 값이 없으면 오류 출력
print(cabinet.get(5, "사용 가능")) # 값이 없는 경우 기본값 설정
print("hi")

print(3 in cabinet)
print(5 in cabinet)

cabinet = {"A-3" : "A", "B-100" : "B"}
print(cabinet["A-3"])
print(cabinet["B-100"])

print(cabinet)
cabinet["A-3"] = "C"
cabinet["C-20"] = "D"
print(cabinet)

del cabinet["A-3"]
print(cabinet)

# key 들만 출력
print(cabinet.keys())

# value 들만 출력
print(cabinet.values())

# key, value 쌍으로 출력
print(cabinet.items())

cabinet.clear()
print(cabinet)