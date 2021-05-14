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
