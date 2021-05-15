### 정규표현식
- Groups and ranges
    - | : 또는
    - () : 그룹
    - [] : 문자셋, 괄호안의 어떤 문자든
    - [^] : 부정 문자셋, 괄호안의 어떤 문자가 아닐때
    - (?:) : 찾지만 기억하지는 않음

- Quantifiers
    - ? : 없거나 있거나 (zero or one) //gra?y
    - * : 없거나 있거나 많거나 (zero or more) //gra*y
    - + : 하나 또는 많이 (one or more) //gra+y
    - {n} : n번 반복 //gra{2}y
    - {min,} : 최소 //gra{2,}y
    - {min, max} : 최소, 그리고 최대 //gra{2,3}y

- Boundary-type
    - \b : 단어 경계
        - \bYa : Ya가 단어 앞에서 쓰일때만 찾음
        - Ya\b : Ya가 단어 뒤에서 쓰일때만 찾음
    - \B : 단어 경계가 아님
    - ^ : 문장의 시작
        - ^Ya : 문장에서 Ya로 시작할 때만 찾음
    - $ : 문장의 끝

- Character classes
    - \ : 특수문자가 아닌 문자
        - \. : .을 찾음
        - \] : ]를 찾음
    - . : 어떤 글자(줄바꿈문자 제외)
    - \d : digit 숫자
    - \D : digit 숫자 아님
    - \w : word 문자
    - \W : word 문자 아님
    - \s : space 공백
    - \S : space 공백 아님

- example
    - /\d{2,3}[- .]{3}[- .]\d{4}/gm : 전화번호
    - \d{2,4}[-]\d{3,4}([- .]\d{4})? : 전화번호(0000-0000 포함)
    - [a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+ : 이메일