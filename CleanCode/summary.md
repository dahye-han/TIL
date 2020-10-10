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
