// ESNext
// 1) 비구조화 할당
    let person = {MyName: "Jane", age: 22};
    let {MyName, age} = person;
    console.log(MyName);
    console.log(age);

    //배열에서 첫번째 요소와 나머지 요소를 쉽게 분리
    let array = [1,2,3,4];
    let [head, ...rest] = array;
    console.log(head);
    console.log(rest);

    // 두 변수의 값을 교환
    let a = 1, b =2;
    [a, b] = [b, a];
    console.log(a);
    console.log(b);

// 2) 화살표 함수 (arrow function)
    function add(a,b) {return a+b};
    const add2 = (a,b) => a+b;
    
// 3) 클래스 : 객체 지향 프로그래밍 지원
    abstract class Animal {
        constructor(public name?: string, public age?: number) {}
        abstract say(): string
    }
    class Cat extends Animal {
        say() {return '야옹'}
    }
    class Dog extends Animal {
        say() {return '멍멍'}
    }

    let animals: Animal[] = [new Cat('야옹이', 2), new Dog('멍멍이', 3)]
    let sounds = animals.map(a => a.say())
    console.log(sounds);
 
// 4) 모듈 : 코드를 여러 개 파일로 분할해서 작성할 수 있음
// 변수나 함수, 클래스 등에 export 키워드를 사용해 모듈로 만들면 다른 파일에서도 사용할 수 있음
// 이렇게 만든 모듈을 가져오고 싶을 때는 import 키워드를 사용
    // import * as fs from 'fs';
    // export function writeFile(filepath: string, content: any); 

// 5) 생성기
// TS, Python, PHP등 몇몇 프로그래밍 언어는 yield라는 특별한 키워드를 제공
// yield문은 '반복자'를 의미하는 반복기(iterator)를 생성할 때 사용
// 반복기는 독립적으로 존재하지 않고 반복기 제공자(iterable)를 통해 얻음
// 이처럼 yield문을 이용해 반복기를 만들어 내는 반복기 제공자를 '생성기(generator)'라고 부름
// 생성기는 function 키워드에 별표(*)를 결합한 function*과 yield 키워드를 이용해 만듬
    function* gen() {
        yield* [1,2]
    }
    for(let value of gen()) {console.log(value)} // 1, 2

// 6) Promise와 async/await 구문
    async function get() {
        let values = []
        values.push(await Promise.resolve(1))
        values.push(await Promise.resolve(2))
        values.push(await Promise.resolve(3))
        return values
    }
    get().then(values => console.log(values)); // [1,2,3];

// 타입스크립트 고유 문법
// 1) 타입 주석과 타입 추론
    let n: number = 1 //타입 주석
    let m = 2 //타입 추론

// 2) 인터페이스
    interface Person {
        name: string
        age?: number
    }

    let person2: Person = { name: "Jane"}

// 3) 튜플 : 물리적으로는 배열과 같음
// 배열에 저장되는 아이템의 데이터 타입이 모두 같으면 배열, 다르면 튜플
    let numberArray: number[] = [1, 2, 3] //배열
    let tuple: [boolean, number, string] = [true, 1, 'Ok'] //튜플

// 4) 제네릭 타입 : 다양한 타입을 한꺼번에 취급할 수 있게 해줌
    class Container<T> {
        constructor(public value: T){}
    }
    let numberContainer: Container<number> = new Container<number>(1)
    let stringContainer: Container<string> = new Container<string>('Hello world')

// 5) 대수 타입 : 다른 자료형의 값을 가지는 자료형을 의미
    type NumberOrString = number |string
    type AnimalAndPerson = Animal &Person

