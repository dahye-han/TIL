## WEBPACK
- JavaScript 애플리케이션을 위한 정적 모듈 번들러
- 애플리케이션을 처리 할 때 프로젝트에 필요한 모든 모듈을 매핑하고 하나 이상의 번들을 생성하는 종속성 그래프를 내부적으로 빌드함
- 표준 Node.js CommonJS모듈이기 때문에 아래의 내용 수행 가능
    - 다른 파일 가져오기 ( require(...) )
    - npm에서 유틸리티 사용 ( reuqire(...) )
    - 자바스크립트 제어 흐름 표현식
    - 자주 사용되는 값에 상수 또는 변수 사용
    - 구성의 일부를 생성하는 함수 작성 및 실행


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
    - 컴파일 된 파일을 디스크에 쓰는 방법을 webpack에 알려줌
    - 여러 entry지점이 있을 수 있지만 하나의 output 구성만 지정됨
    - 기본값 : './dist/main.js', 기타파일의 경우 './dist' 폴더가 기본값
    - CDN 및 해시를 사용할 수 있음 
    ```
    output: {
        path: '/home/proj/cdn/assets/[fullhash]',
        publicPath: 'https://cdn.example.com/assets/[fullhash]/',
    },
    ```
- loaders
    - 기본적으로 JavaScript 및 JSON 파일만 이해
    - 다른 유형의 파일을 처리하고 이를 애플리케이션에서 사용하고 종속성 그래프에 추가 할수 있는 유효한 모듈로 변환 할 수 있음
    - 모듈의 소스 코드에 적용되는 변환
    - 파일을 다른 언어에서 javascript로 변환하거나 인라인 이미지를 데이터 URL로 로드 할 수 있음
    - test : 변환해야하는 파일을 식별
    - use : 변환을 수행하는 데 사용해야하는 로더를 나타냄
    - 기능
        - 로더를 연결 할 수 있음
        - 동기식 또는 비동기식 일 수 있음
        - Node.js에서 실행되며 가능한 모든 작업을 수행할 수 있음
        - options 객체로 구성할 수 있음
        - 추가 임의 파일을 내보낼 수 있음
- plugins
    - 번들 최적화, 자산 관리 및 환경 변수 주입과 같은 광범위한 작업을 수행 할 수 있음
    - 다른 목적으로 구성에서 플러그인을 여러 번 사용할 수 있으므로 new 연산자로 호출하여 프로그래인의 인스턴스를 만들어야 함
    - apply 메소드(webpack 컴파일러에 의해 호출되어 전체 컴파일 수명주기에 대한 액세스 제공)가 있는 JavaScript 객체
- mode
    - 각 환경에 해당하는 웹팩의 내장 최적화를 활성화 할 수 있음
    - 기본값 : production
- module Resolution
    - 절대 경로로 모듈을 찾는데 도움이 되는 라이브러리
    - Absolute paths : import 'C:\\Users\\me\\file';
    - Relative paths : import '../src/file1';
    - Module paths : import 'module';
- module Federation
    - OverridablesPlugin (낮은 수준) 
        - 특정 모듈을 '재정의 가능'하게 만듬
        - '__webpack_override__'를 사용
    - ContainerPlugin (낮은 수준)
        - 지정된 노출 모듈을 사용하여 추가 컨테이너 항목을 만듬
    - ContainerReferencePlugin (낮은 수준)
        - 컨테이너에 대한 특정 참조를 외부로 추가하고 이러한 컨테이너에서 원격 모듈을 가져올 수 있음
    - ModuleFederationPlugin (높은 수준)
        - 재정의 및 재정의 가능 항목은 지정된 공유 모듈의 단일 목록으로 결합
- Hot Module Replacement
    - 전체 재로드없이 애플리케이션이 실행되는 동안 모듈을 교환, 추가 또는 제거
        - 정체 다시로드 중에 손실 된 애플리케이션 상태를 유지
        - 변경된 사항만 업데이트하여 개발 시간을 절약
        - 소스 코드에서 CSS/JS를 수정하면 브라우저를 즉시 업데이트 합

