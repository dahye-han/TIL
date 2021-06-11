# 기본값
# def profile(name, age, main_lang):
#     print("이름 : {0}\t나이 : {1}\t주 사용 언어: {2}".format(name, age, main_lang))

# profile("A", 20, "Python")
# profile("B", 25, "Java")

# 같은 학교 같은 학년 같은 반 같은 수업.
# def profile(name, age=17, main_lang="Python"):
#     print("이름 : {0}\t나이 : {1}\t주 사용 언어: {2}".format(name, age, main_lang))

# profile("A")
# profile("B")

# 키워드값
# def profile(name, age, main_lang):
#     print(name, age, main_lang)

# profile(name="A", main_lang="python", age=20)
# profile(main_lang="java", age=25, name="B")

# 가변인자
# def profile(name, age, lang1, lang2, lang3, lang4, lang5):
#     print("이름 : {0}\t나이 : {1}\t".format(name, age), end=" ")
#     print(lang1, lang2, lang3, lang4, lang5)

def profile(name, age, *language):
    print("이름 : {0}\t나이 : {1}\t".format(name, age), end=" ")
    for lang in language:
        print(lang, end=" ")
    print()

profile("A", 20, "python", "java", "C", "C++", "C#")
profile("B", 25, "Kotlin", "Swift", "", "", "")