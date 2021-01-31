### Do it! 웹 사이트 따라 만들기 : HTML, CSS, 자바스크립트, JQuery, Ajax로 웹 퍼블리싱

### 크로스 브라우징
- 브라우저 작동 범위 확인하기
    - Can I use(www.caniuse.com)에서 확인
    - 벤더 프리픽스 사용하기
        - 브라우저 개발사가 실험적으로 CSS의 속성을 사용할 수 있도록 제공하는 기능
        - 일부 사용자가 구형 브라우저를 계속 사용하는 경우 이 사용자들에게도 기능을 지원하기 위해 프리픽스를 사용해야 함
        -속성명 앞에 각 브라우저별로 제고하는 접두어를 붙여 사용
        - -webkit-border-radius: 10px; : 사파리, 크롬
        - -moz-border-radius : 10px; : 파이어폭스
        - -o-border-radius: 10px; : 오페라
        - -ms-border-radius: 10px; : 인터넷 익스플로러
        - border-radius: 10px; : 표준 속성