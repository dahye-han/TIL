## Do it! 타입스크립트 프로그래밍 정리

### 타입스크립트란?
- 세 종류의 자바스크립트
    - ES5 : 웹 브라우저에서 동작하는 표준 자바스크립트
    - ESNext : ES6 이후 버전을 통틀어 가리킴
    - TypeScript : ESNext에 타입(type) 기능을 추가
- 트랜스파일
    - ESNext 자바스크립트 소스코드는 바벨(Babel)이라는 트랜스파일러를 거치면 ES5 자바스크립트 코드로 변환
    - 트랜스파일러 : 어떤 프로그래밍 언어로 작성된 소스코드를 또 다른 프로그래밍 언어로 된 소스코드로 바꿔주는 프로그램
    - 컴파일러 : 텍스트로 된 소스코드를 바이너리 코드로 바꿔줌

### 타입스크립트 개발 환경 만들기
    - scoop 프로그램
        - 프로그램이 업데이트 될때마다 최신화를 거쳐야 하는걸 한번에 관리
        - scoop로 설치한 프로그램은 scoop update * 명령으로 한꺼번에 가장 최신 버전으로 업데이트
            - 윈도우 파워셀 관리자 권한으로 실행
                - Set-ExecutionPolicy RemoteSingned -scope CurrentUser
                - $env:SCOOP='C:\Scoop'
                - iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
                - scoop install aria2
                - scoop install git 