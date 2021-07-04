print("나는 %d살입니다." % 20)
print("나는 %s를 좋아해요." % "파이썬")
print("Apple은 %c로 시작해요" % "A")

print("나는  {}살입니다.".format(20))
print("나는 {}색과 {}색을 좋아해요".format("파란", "빨간"))
print("나는 {1}색과 {0}색을 좋아해요".format("파란", "빨간"))
print("나는 {0}색과 {1}색을 좋아해요".format("파란", "빨간"))

print("나는 {age}살이며, {color}색을 좋아해요".format(age = 20, color = "빨간"))

print("백문이 불여일견\n백견이 불여일타")
print("저는 \"하네\"입니다")
print("Red Apple\rPine") # \r : 커서를 맨 앞으로 이동
print("Redd\bApple") # \b : 백스페이스 (한 글자 삭제)
print("Red\tApple") # \t : 탭