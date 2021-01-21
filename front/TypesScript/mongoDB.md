### 몽고DB
- NoSQL : SQL을 사용하지 않고 다른 방식의 질의어를 사용
- 설치
    - Set-ExecutionPolicy RemoteSigned -scope CurrentUser
    - $env:SCOOP='C:\Scoop'
    - scoop install mongodb
    - mongod --install
    - net start mongodb