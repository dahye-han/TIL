## WEBPACK
- JavaScript 애플리케이션을 위한 정적 모듈 번들러
- 애플리케이션을 처리 할 때 프로젝트에 필요한 모든 모듈을 매핑하고 하나 이상의 번들을 생성하는 종속성 그래프를 내부적으로 빌드함

### 핵심 개념
- entry
    - 기본값 : './src/index.js'
    - 설정을 통해 다른 진입 점 혹은 여러 진입 점을 지정할 수 있음
    - Single Entry Syntax 
        - entry: string | [string]
    - Object Syntax
        - entry: { <entryChunkName> string | [string] } | {}
    - EntryDescription object : 진입 점 설명이 있는 개체
        - dependOn : 현재 진입 점이 의존하는 진입 점
        - filename : 각 출력 파일의 이름을 지정
        - import : 시작시 로드되는 모듈
        - library : 현재 항목에서 라이브러리를 번들링
        - runtime : 이 이름의 런타임 chunk가 생성됨
        - publicPath : 브라우저에서 참조 될 때 출력 파일에 대한 공용 URL 주소
    - Multi Page Application : 다중 페이지 애플리케이션
        ```
        module.exports = {
            entry: {
                pageOne: './src/pageOne/index.js',
                pageTwo: './src/pageTwo/index.js',
                pageThree: './src/pageThree/index.js',
            },
        };
        ```
- output 
    - 번들이 생서을 하는 방법과 이러한 이름을 지정
    - 기본값 : './dist/main.js', 기타파일의 경우 './dist' 폴더가 기본값
- loaders
    - 기본적으로 JavaScript 및 JSON 파일만 이해
    - 다른 유형의 파일을 처리하고 이를 애플리케이션에서 사용하고 종속성 그래프에 추가 할수 있는 유효한 모듈로 변환 할 수 있음
    - test : 변환해야하는 파일을 식별
    - use : 변환을 수행하는 데 사용해야하는 로더를 나타냄
- plugins
    - 번들 최적화, 자산 관리 및 환경 변수 주입과 같은 광범위한 작업을 수행 할 수 있음
    - 다른 목적으로 구성에서 플러그인을 여러 번 사용할 수 있으므로 new 연산자로 호출하여 프로그래인의 인스턴스를 만들어야 함
- mode
    - 각 환경에 해당하는 웹팩의 내장 최적화를 활성화 할 수 있음
    - 기본값 : production