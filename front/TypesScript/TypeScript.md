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
                - scoop 설치
                    - Set-ExecutionPolicy RemoteSigned -scope CurrentUser
                    - $env:SCOOP='C:\Scoop'
                    - iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
                    - scoop install aria2
                    - scoop install git
                - vscode 설치
                    - scoop bucket add extras
                    - scoop install vscode
                - nodejs 설치
                    - scoop install nodejs-lts
                    - node -v
                - 구글 크롬 브라우저 설치
                    - scoop install chromium
                    - chrome
                - touch 프로그램 설치  
                    - 파일을 생성할 때 지정한 이름의 파일이 이미 있으면 무시하고, 없으면 해당 이름으로 파일을 만들어줌
                    - scoop install touch
            - vscode 터미널 내
                - 타입스크립트 컴파일러 설치
                    - npm  i -g typescript
                    - tsc -v
                - 타입스크립트 컴파일과 실행
                    - tsc 타입스크립트파일명 : .ts => .js
                    - node 자바스크립트파일명 : .js 실행
                - ts-node 설치
                    - 타입스크립트 코드를 ES5로 변환하고 실행
                    - npm i -g ts-node
                    - ts-node 타입스크립트파일명
    - 타입스크립트 프로젝트 만들기
        - 노드제이에스 프로젝트를 만든 다음, 개발 언어를 타입스크립트로 설정
        - npm init --y : package.json 생성 
        - npm i -D typescript ts-node : typescript, ts-node를 package.json에 설치
        - npm i -D @types/node 
        - tsc --init : tsconfig.json 파일 만들기
        

                
