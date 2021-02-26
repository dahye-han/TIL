### protoType Chain
- 프로토 타입과 프로토 타입이 연결되어 있음
- prototype에 저장된 속성들은 생성자를 통해서 객체가 만들어질 때 그 객체에 연결됨
- 함수도 객체여서 prototype을 가질수 있음
- function는 prototype을 사용해서 prototype과 연결되고, prototype은 constructor를 사용해서 function과 연결됨
- 객체가 있는데 그 객체가 자체적으로 갖고 있지 않은 어떤 값을 우리가 사용하려고 할 때 어떤 데이터를 근거로 해서 어디에서 그 객체가 가지고 있지 않는 것을 찾아서 사용할 수 있는가 
```
function Ultra() {}
Ultra.prototype.ultraProp = true;

function Super() {}
Super.prototype = new Ultra();

function Sub() {}
Sub.prototype = new Super();

var o = new Sub();
o.ultraProp = 1 
console.log(o.ultraProp);
```