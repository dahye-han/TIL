## 코드 : 요구사항을 표현하는 언어

## 깨끗한 코드
- 세세한 사항까지 꼼꼼하게 처리하는 코드(오류 처리, 메모리 누수 처리, 경쟁 상태 처리, 일관성 없는 명명법 처리)
- 단순하고 직접적이어서 반드시 필요한 내용만을 담아내는 코드
- 작성자가 아닌 사람도 읽기 쉽고 고치기 쉬운 코드
- 이미 모든 사항을 고려해서 주의 깊게 작성한 코드
- 중복을 피하고, 한기능만 수행하며, 제대로 표현하고, 작게 추상화한 코드
- 읽으면서 집작한 대로 돌아가는 코드

## 의미 있는 이름
- 따로 주석이 필요없이 변수의 존재 이유, 수행 기능, 사용 방법을 알 수 있음
- 코드의 함축성이 중요
```
public List<int[]> getThem(){
  List<int[]> list1 = new ArrayList<int[]>();
  for(int[] x: theList)
    if (x[0] == 4)
      list1.add(x);
  return list1;
}

public List<int[]> getFlaggedcells() {
  List<int[]> flaggedCells = new ArrayList<int[]>();
  for (int[] cell : gameBoard)
    if(cell[STATUS_VALUE] == FLAGGED)
      flaggedCells.add(cell);
  return flaggedCells;
}

//코드의 단순성을 변하지 않았지만, 코드는 더욱 명확해짐
```
- 널리 쓰이는 의미가 있는 단어(hp, aix, sco 등)를 다른 의미로 사용하는걸 지양
- 의미 없이 연속된 숫자(a1, a2...)를 덧붙이거나 불용어(Info,Data...)를 추가하는 방식은 지양
- 발음하기 쉬운 이름을 사용하는걸 지향
- 검색하기 쉬운 이름을 사용하는걸 지향
  - 이름을 의미 있게 지으면 함수가 길어지지만 찾기 쉬워짐
- 클래스 이름, 객체 이름 : 명사나 명사구가 적합(Customer, WikiPage, Account, AddressParser)
- 매서드 이름 : 동사나 동사구가 적합(postPayment, deletePage,save)
- 기발한 이름보다 명료한 이름을 선택
- 한 개념에 한 단어를 사용하고, 기존의 메서드와 맥락이 다르면 다른 단어를 사용한다.
  - add가 기존 값 두개를 더하거나 이어서 새로운 값을 만드는 것일때, 새로 작성하는 메서드는 집합에 값 하나를 추가한다면 메서드의 이름은 insert나 append가 적당
- 프로그래머에게 익숙한 기술 개념에는 기술 개념을 사용, 적절한 용어가 없다면 문제 영역에서 이름을 가져옴

## 함수
- 작게 만들어야 함
- 함수는 한가지만을 잘 해야함
- 함수 당 추상화 수준은 하나여야 함
- switch문
  - 본질적으로 switch문은 N가지를 처리하여 하기에 한 가지 작업만하도록 작게 만들기가 어려움
  - 다형성을 이용하여 각 switch 문을 저차원 클래스에 숨기고 절대로 반복하지않는 방법이 있음
  ```
  public Money calculatePay(Employee e)
  throws InvalidEmployeeType {
    switch (e.type) {
      case COMMISSIONED:
        retuen calculateCommissionedPay(e);
      case HOURLY:
        return calculateHourlyPay(e);
      case SALARIED:
        return calculateSalariedPay(e);
      default:
        throws new InvalidEmployeeType(e.type);
    }
  }
  
  //아래의 내용으로 개선
  
  public abstract class Employee {
    public abstract boolean isPayday();
    public abstract Money caculatePay();
    public abstract void deliverPay(MoneyPay);
  }
  public interface EmployeeFactory {
    public Employee makeEmployee(EmployeeRecord r) throws InvalidEmployeeType {
      switch (r.type) {
        case COMMISSIONED:
          return new CommissionedEmployee(r);
        case HOURLY:
          return new HourlyEmployee(r);
        case SALARIED:
          return new SalariedEmployee(r);
        default:
          throw new InvalidEmployeeType(r.type);
      }
    }
  }
  ```
- 서술적인 이름을 사용
 - 길고 서술적인 이름이 짧고 어려운 이름보다 좋음
 - 모듈 내에서 함수 이름은 같은 문고, 명사, 동사를 사용
- 함수 인수 
  - 최선은 입력 인수가 없는 경우이며, 차선은 입력 인수가 1개뿐인 경우
  - 플래그 인수 : 함수가 한꺼번에 여러 가지를 처리
    - ex) render(true) => render(boolean isSuite) => renderForSuite() / renderForSingleTest()
  - 이항 함수 : 이항 함수가 적절한 경우도 있음 ex) Pont p = new Point(0,0) => 인수 2개가 하나의 값을 표현
    - 무조건 나쁘지는 않지만 그만큼 위험이 따름
- 부수 효과를 일으키지 않게 작성
- 명령과 조회를 분리
  - 함수는 뭔가를 수행하거나 뭔가에 답하거나 둘 중 하나만 해야함
- 오류 코드보다 예외를 사용
  ```
  public void delete(Page page) {
    try {
      deletePageAndAllReferences (page);
    } catch {
      logError(e);
    }
  }
  
  private void deletePageAndAllReferences(Page page) throws Exception {
    deletePage(page);
    registry.deleteReference(page.name);
    configKeys.deletekey(page.name.makeKey());
  }
  
  private void logError(Exception e) {
    logger.log(e.getMessage());
  }
  ```

## 주석
- 주석이 필요한 상황에 처하면 상황을 역전해 코드로 의도를 표현할 방법을 없을지 고민, 코드로 의도를 표현하는게 가장 좋음
- 부정확한 주석은 아예 없는 주석보다 훨씬 더 나쁨
- 주석보다 코드로 의도를 표현
- 좋은 주석
  - 법적인 주석 : 법적인 이유로 특정 주석을 넣으라고 명시한 경우 ( 저작권 정보, 소유권 정보 )
  - 정보를 제공하는 주석 : 정규표현식이 어떤것을 뜻하는지 표시 => 시각과 날짜를 변환하는 클래스를 만들어 코드를 옮겨주면 주석이 필요없어짐
  - 의도를 설명하는 주석 : 결정에 깔린 의도까지 설명
  - 의미를 명료하게 밝히는 주석 : 인수나 반환값이 표준 라이브러리나 변경하지 못하는 코드에 속한다면 의미를 명료하게 밝히는 주석이 유용
     - 주석이 올바른지 검증이 쉽지 않음
  - 결과를 경고하는 주석 : 다른 프로그래머에게 결과를 경고할 목적으로 주석을 사용
  - TODO 주석 : ex) // TODO-MdM 현재 필요하지 않다.
  - 중요성을 강조하는 주석
  - 공개 API에서 Javadocs
- 나쁜 주석
  - 주절거리는 주석 
  - 같은 이야기를 중복하는 주석
  - 오해할 여지가 있는 주석
  - 의무적으로 다는 주석
  - 이력을 기록하는 주석 : 현재는 소스 코드 관리 시스템을 이용
  - 있으나 마나 한 주석 
  - 무서운 잡음 
  - 함수나 변수로 표현할 수 있다면 주석을 달지 마라
  - 위치를 표시하는 주석
  - 닫는 괄호에 다는 주석 : 중첩이 심하고 장황한 함수라면 의미가 있을지도 모르지만 작고 캡슐화된 함수에는 잡음일 뿐
  - 공로를 돌리거나 저자를 표시하는 주석 : ex) /* 릭이 추가함 */
  - 주석으로 처리한 코드
  - HTML 주석
  - 전역 정보
  - 너무 많은 정보
  - 모호한 관계 : 주석과 주석이 설명하는 코드 사이의 관계가 모호한 경우
  - 함수 헤더 : 짧고 한 가지만 수행하며 이름을 잘 붙인 함수가 주석으로 헤더를 추가한 함수보다 좋음
  - 비공개 코드에서 Javadocs
  
## 형식 맞추기
  - 형식을 맞추는 목적 : 맨 처음 잡아놓은 구현 스타일과 가독성 수준은 유지보수 용이성과 확장성에 계속 영향을 미침
  - 적절한 행 길이를 유지하라
    - 신문 기사처럼 작성하라
      - 이름은 간단하면서도 설명이 가능하게 지음 : 이름만 보고도 올바른 모듈을 살펴보고 있는지 아닌지를 판단할 정도로 지음
      - 소스 파일 첫 부분은 고차원 개념과 알고리즘을 설명
      - 아래로 내려갈수록 의도를 세세하게 묘사
      - 마지막에는 가장 저차원 함수와 세부 내역이 나옴
    - 개념은 빈 행으로 분리하라
      - 각 행은 수식이나 절을 나타내고, 일련의 행 묶음은 완결된 생각 하나를 표현함
      - 생각 사이는 빈 행을 넣어 분리 : 빈 행은 새로운 개념을 시작한다는 시각적 단서
      - 세로 밀집도 : 서로 밀접한 코드 행은 세로로 가까이 놓아 연관성이 높음을 표시
        - 변수 선언 : 변수는 사용하는 위치에 최대한 가까이 선언
        - 인스턴스 변수 : 클래스 맨 처음에 선언한다
        - 종속 함수 
          - 한 함수가 다른 함수를 호출한다면 두 함수는 세로로 가까이 배치한다.
          - 가능하다면 호출하는 함수를 호출되는 함수보다 먼저 배치한다.
        - 개념의 유사성 : 비슷한 동작을 수행하는 함수들은 종속적인 관계가 없더라도 가가이 배치한다.
      - 세로 순서 : 중요한 개념을 가장 먼저 표현하면서 세세한 사항은 가장 마지막에 표현한다.
        - 가로 형식 맞추기 : 100자나 120자 정도가 적당
      - 들여쓰기 : 범위로 이뤄진 계층을 표현하기 위해 사용
        - 클래스 정의처럼 파일 수준인 문장은 들여쓰지 않음
        - 클래스 내 메서드는 클래스보다 한 수준 들여씀
        - 메서드 코드는 메서드 선언보다 한 수준 들여씀
        - 블록 코드는 블록을 포함하는 코드보다 한 수준 들여씀
  
## 객체와 자료 구조
  - 자료 추상화
    - 구현을 감추기 위해서는 추상화가 필요함
    - 추상 인터페이스를 제공해 사용자가 구현을 모른 채 자료의 핵심을 조작할 수 있어야 진정한 의미의 클래스
  - 자료/객체 비대칭
    - 객체는 추상화 뒤로 자료를 숨긴 채 자료를 다루는 함수만 공개
    - 자료 구조는 자료를 그대로 공개하며 별다른 함수는 제공하지 않음
    - 절차적인 코드는 자료 구조를 추가하기 어려움 => 모든 함수를 고쳐야함
    - 객체 지향 코드는 새로운 함수를 추가하기 어려움 => 모든 클래스를 고쳐야함
  - 디미터 법칙
    - 객체에서 허용된 메서드가 반환하는 객체의 메서드는 호출하면 안됨
    - 객체라면 내부 구조를 숨겨야 함
    - 자료 구조라면 당연히 내부 구조를 노출해야함
  - 자료 전달 객체
    - 자료 구조체의 전형적인 형태는 공개 변수만 있고 ㅎ마수가 없는 클래스
    - 이런 자료 구조체를 때로는 자료 전달 객체(Data Transfer Object, DTO)라고 함
      - DTO는 데이터베이스에서 저장된 가공되지 않은 정보를 애플리케이션 코드에서 사용할 객체로 변환하는 일련의 단계에서 가장 처음으로 사용하는 구조체
    - 좀 더 일반적인 형태는 bean
      - 비공개(private) 변수를 조회/설정 함수로 조작
    - 활성 레코드
      - DTO의 특수한 형태
      - 데이터 베이스 테이블이나 다른 소스에서 자료를 직접 변환한 결과
      - 자료 구조로 취급해서 비즈니스 규칙을 담으면서 내부 자료를 숨기는 객체는 따로 생성

## 오류 처리
- 오류 코드보다 예외를 사용하라
- Try-Catch-Finally 문부터 작성하라
  - 어떤 면에서는 try블록은 트랜잭션과 비슷
  - 먼저 강제로 예외를 일으키는 테스트 케이스를 작성한 후 테스트를 통과하게 코드를 작성하는 방법을 권장
- 미확인(unchecked) 예외를 사용하라
- 예외에 의미를 제공하라
  - 예외를 던질 때는 전후 상황을 충분히 덧붙임
  - 오류가 발생한 원인과 위치를 찾기가 쉬워짐
  - 오류메시지에 정보(실패한 연산 이름,실패 유형)를 담아 예외와 함께 던짐
- 호출자를 고려해 예외 클래스를 정의
  - 애플리케이션에서 오류를 정의할 때 프로그래머에게 가장 중요한 관심사는 오류를 잡아내는 방법
  - 오류가 발생한 위치, 유형으로 분류가 가능(디바이스 실패, 네트워크 실패, 프로그래밍 오류 등)
  - 외부 API를 사용할 때는 감싸기 기법이 최선 : 외부 API를 감싸면 외부 라이브러리와 프로그램 사이에서 의존성이 크게 줄어듬
  - 감싸기 기법을 사용하면 특정 업체가 API를 설계한 방식에 발목 잡히지 않음
- null을 반환하지 마라
  - 메서드에서 null을 반환하고픈 유혹이 든다면 그 대신 예외를 던지거나 특수 사례 객체를 반환
  - 사용하려는 외부 API가 null을 반환한다면 감사기 메서드를 구현해 예외를 던지거나 특수 사례 객체를 반환
- null을 전달하지 마라
  - 정상적인 인수로 null을 기대하는 API가 아니라면 메서드로 null을 전달하는 코드는 최대한 피함
  - 인수로 null을 전달해 NullPointerException이 발생
    - 새로운 예외 유형을 만들어 던짐 : if(p1 == null || p2 == null)
    - InvalidArgumentException 예외 처리 : assert문 사용
    - 애초에 null을 인수로 넘기지 못하도록 금지하는 정책을 만듬
    
## 경계
- 외부 코드를 우리 코드에 깔끔하게 통합할 때, 소프트웨어 경계를 깔끔하게 처리하는 기법과 기교
- 외부 코드 사용
  - 경계 인터페이스를 이용할 대는 이를 이용하는 클래스나 클래스 계열 밖으로 노출되지 않도록 주의
- 경계 살피고 익히기
  - 학습테스트
    - 곧바로 우리쪽 코드를 작성해 외부 코드를 호출하는 대신 먼저 간단한 테스트 케이스를 작성
    - 통제된 환경에서 API를 제대로 이해하는지를 확인
    - 패키지 새 버전이 나온다면 학습 테스트를 돌려 차이가 있는지 확인
- log4j 익히기
  ```
  public class LogTest { 
    private Logger logger;
    
    @Before
    public void initialize() {
      logger = Logger.getLogger("logger");
      logger.removeAllAppenders();
      Logger.getRootLogger().removeAllAppenders();
    }
    
    @Test
    public void basicLogger() {
      BasicConfigurator.configure();
      logger.info("basicLogger");
    }
    
    @Test
    public void addAppenderWithStream() {
      logger.addAppender(new ConsoleAppender(
        new PatternLayout("%p %t %m%n"),
        ConsoleAppender.SYSTEM_OUT));
        logger.info("addAppenderWithStream");
    }
  }
  ```

## 단위 테스트
- TDD(Test Driven Development) 법칙 세 가지
  - 첫째 법칙 : 실패하는 단위 테스트를 작성할 때까지 실제 코드를 작성하지 않는다.
  - 둘째 법칙 : 컴파일은 실패하지 않으면서 실행이 실패하는 정도로만 단위 테스트를 작성한다.
  - 셋째 법칙 : 현재 실패하는 테스트를 통과할 정도로만 실제 코드를 작성한다.
  - 깨끗한 테스트 코드 유지하기
    - 테스트는 유연성, 유지보수성, 재사용성을 제공한다.
    - 테스트 케이스가 없다면 모든 변경이 잠정적인 버그
  - 깨끗한 테스트 코드
    - 테스트 코드에서 가독성을 높이기 위해 명료성, 단순성, 풍부한 표현력이 필요
    - BUILD-OPERATE-CHECK 패턴
      - BUILD : 테스트 자료를 만든다.
      - OPERATE : 테스트 자료를 조작한다.
      - CHECK : 조작한 결과가 올바른지 확인한다.
    - 도메인에 특화된 테스트 언어 (DSL) : 테스트를 구현하는 당사자와 나중에 테스트를 읽어볼 독자를 도와주는 테스트 언어
    - 이중 표준 : 실제환경에서는 절대로 안 되지만 테스트 환경에서는 전혀 문제없는 방식으로 메모리나 CPU 효율과 관련 잇는 경우 사용
    - 테스트 당 assert 하나
      - JUnit으로 테스트 코드를 짤 때는 함수마다 assert 문을 단 하나만 사용해야 한다는 주장

## 클래스

## 시스템

## 창발성

## 동시성

## 점진적인 개선

## JUnit 들여다보기

## SerialDate 리펙터링

## 냄새와 휴리스틱

