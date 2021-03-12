### 소프트웨어 테스팅의 기초
- 테스팅 : 결함을 발견하기 위한 활동
- 디버깅 : 결함의 원인을 밝히고 코드를 수정하는 개발 활동
- 결함의 종류
    - 기획 시 유입된 결함 : 요구사항의 표준 미준수, 테스트 불가능, 불명확, 불완전, 불일치, 기타 결함
    - 설계 시 유입된 결함 : 설계의 표준 미준수, 테스트 불가능, 불명확, 불완전, 불일치 인터페이스 결함, 기타 결함
    - 코딩 시 유입된 결함 : 코드의 표준 미준수, 불완전, 불일치, 인터페이스 결함, 데이터 결함, 기타 결함
    - 테스트 부족으로 유입된 결함
    - 마무리 부족
    - 팀간 의사소통 부족
    - 코딩 실수
- 결함 유형을 분석해서 많은 유형의 부분을 보완할 수 있는 프로세스 개선을 고려할 수 있음
- 결함 심각도 
    - 치명적, 매우 심각, 심각, 보통, 경미
    - 치명적 결함 : 하드웨어 또는 소프트웨어 장애, 시스템 중지, 시스템 잠김(접근 불가), 데이터 손실 또는 변조
    - 주요 결함 : 기능 상실, 잘못된 기능, 주요 기능 오작동
    - 일반 결함 : 불완전한 기능, 사소한 기능 오작동, 잘못된 인터페이스
    - 사소한 결함 : 타이핑 에러, 사용자 불편, 스크린 표준의 위반, 좋지 않은 인터페이스
    - 개선 사항 : 에러는 아니지만 개선이 필요한 사항
- 결함 우선 순위
    - 즉시 해결, 주의 요망, 대기, 낮은 순위    

### 소프트웨어 수명주기와 테스팅
- 소프트웨어 개발 모델
    - V-모델(순차적 개발 모델) : 요구사항 정의 및 분석, 시스템 설계, 구현, 테스팅이라는 일련의 단계(과정)을 통해 소프트웨어(시스템)를 개발
        - Requirements - Specification - Design - Code - Unit Testing - Integration Testing - System Testing - Acceptance Testing
    - 반복적-집중적(Iterative-incremental) 개발 모델 : 요구사항 분석, 시스템 설계, 구현 및 테스팅하는 개발 주기가 짧게 연속적으로 반복하는 활동으로 이루어짐
        - 주로 초기 반복 단계에서 리스크가 높은 모듈이나 주요 아키텍처에 해당하는 시스템 일부를 우선적으로 개발하고 테스팅을 토해 결함이나 장애를 조기에 발견하고 제거할 수 있는 기회를 확보하기 때문에, 개발 리스크를 조기에 감소시킬 수 있는 장점을 가지고 있음
        - 모델 예시 : 애자일 개발 모델, RUP(Rational Unified Process), RAD(Rapid Application Development), 이해관계자 중심의 소프트웨어 개발, 프로토타이핑
    - 개발 수명주기(Life cycle) 모델에서의 테스팅
        - 모든 개발 활동은 이에 상응하는 테스팅 활동을 동반
        - 각 테스트 레벨은 그 레벨에 맞는 특정한 목적을 가지고 있음
        - 주어진 테스트 레벨에 맞는 테스트의 분석과 설계는 대응되는 개발활동 동안에 시작되어야 함
        - 개발 수명주기 동안에 개발 산출물의 초안이 작성되면, 테스터는 이러한 문서를 리뷰하는 활동에 참여해야 함  
- 테스트 레벨
    - 컴포넌트 테스팅 = 단위 테스팅
        - 테스트가 가능한 (최소) 단위로 나누어진 소프트웨어(모듈, 프로그램, 객체, 클래스 등) 내에서 결함을 찾고 그 기능을 검증하는 것
        - 시스템에 의존적이면서도 시스템의 다른 부분에서 격리하여 독립적으로 수행해야 함
        - 소스 코드를 활용하여 테스트를 설계하며 주된 테스팅 방법은 구조 기반 테스팅
        - 테스트 중심의 개발 방법론
            - 코딩 전에 테스트 케이스를 준비하고 자동화하는 방법
            - 테스트 케이스를 개발한 후 작은 규모의 코드를 작성하여 통합하고 테스트가 통과할 때까지 반복 수행
    - 통합 테스팅
        - 컴포넌트간의 인터페이스를 테스트하는 것은 물론, OS, 파일 시스템, 하드웨어 또는 시스템간 인터페이스와 같은 시스템의 각기 다른 부분과 상호 연동하는 동작을 테스트
        - 기능적 특성은 물론 특정한 비기능적 특성을 테스팅 해야 함
    - 시스템 테스팅
        - 개발 프로젝트 차원(범위)에서 정의된 전체 시스템 또는 제품의 동작에 대해 테스트
        - 테스팅에서 발견하지 못하여 발생할 수 있는 환경특성 장애 리스크를 최소화하기 위해 실제 사용 환경 또는 이와 유사한 환경에서 수행해야 함
    - 인수 테스팅
        - 시스템이나 시스템의 일부 또는 특정한 비기능적인 특성에 대해 "확신"을 얻는 것
        - 사용자 인수 테스팅 : 일반적으로 비즈니스 사용자가 시스템 사용의 적절성을 확인
        - 운영상의 (인수) 테스팅 : 시스템 관리자에 의한 테스트 활동(백업/복원 테스팅, 재난 복구, 사용자 관리, 유지보수 작업, 보안 취약성에 대한 정기적인 점검)
        - 계약 인수 테스팅과 규정 인수 테스팅 : 정부 지침, 법률 또는 안전 규정 등 준수해야 하는 규정에 맞게 개발되었는지 확인하는 테스팅
        - 일파테스팅 : 개발 조잭 내에서 고객에 의해 수행, 고객사의 사이트로 이동하기 전에 개발 완료 루 테스팅
        - 베타테스팅(필드테스팅) : 실제 환경에서 사용자 혹은 잠재 고객에 의해 수행, 고객 사이트로 이동한 후에 테스팅
- 테스트 유형
    - 기능 테스팅
        - 문서화 되어 있거나 테스터가 알고 있는 기능과 특징, 그리고 그것들과 특별한 시스템과의 상호 운용성을 고려하여 수행하며 모든 테스트 레벨에서 수행될 수 있음
    - 비기능 테스팅
        - 성능 테스팅, 부하 테스팅, 스트레스 테스팅, 사용성 테스팅, 유지보수성 테스팅, 신뢰성 테스팅, 이동성 테스팅 등을 포함하는 개념
        - 시스템이 어떻게 동작하는가를 테스팅
        - 모든 테스트 레벨에서 수행될 수 있음
    - 구조적 테스팅
        - 특정 유형의 구조에 대한 커버리지를 평가하여 테스팅의 보장성 또는 충분함을 측정하는 것이 목적인 테스트 유형
        - 커버리지 : 시스템 또는 소프트웨어의 구조가 테스트 수트에 의해 테스트된 정도를 말하며 구조 종류에 대해 커버된 퍼센트로 표시
    - 확인(재)/리그레션 테스팅
        - 이미 테스트된 프로그램의 테스팅을 반복하는 것으로, 결함 수정 이후 변경의 결과로 새롭게 만들어 지거나, 이전 결함으로 인해 발견되지 않았던 또 다른 결함을 발견하는 것
        - 수행 범위와 정도는 이전에 정상 동작했던 소프트웨어에서 결함을 발견하지 못해 야기될 수 있는 리스크에 바탕을 둠