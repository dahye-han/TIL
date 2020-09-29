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
