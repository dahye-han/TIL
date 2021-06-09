# def profile(name, age, main_lang):
#     print("이름 : {0}\t나이 : {1}\t주 사용 언어: {2}".format(name, age, main_lang))

# profile("A", 20, "Python")
# profile("B", 25, "Java")

# 같은 학교 같은 학년 같은 반 같은 수업.
def profile(name, age=17, main_lang="Python"):
    print("이름 : {0}\t나이 : {1}\t주 사용 언어: {2}".format(name, age, main_lang))

profile("A")
profile("B")