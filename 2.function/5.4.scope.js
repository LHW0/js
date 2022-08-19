//sayHi() 실행은 가능하지만 순차적으로 실행되므로 sayHi의 name값이 들어가있지 않기때문에 에러

let name = 'neo'
sayHi() //name 값이 존재하므로 값 출력

function sayHi() { //global 객체 생기자마자 생기기때문에 위에서도 실행은 가능
    console.log('Hi,', name) //function declaration 펑션값을 선언했다.
} //펑션 선언 전이든 후 든간에 실행가능

//
sayHi()

const sayHello = function() { //function expression 펑션값을 세이핼로우에 대입했다
    console.log('Hello,', name) 
} //펑션 대입후에 실행가능

sayHello()

/*
uninitialized 코드가 단 한줄도 실행되지 않은 상태
최초 le-0 record로 name,sayHi,sayHello outer값 없음 생성
name: uninitialized, sayHi: function, sayHello: unintialized >
1번 줄을 실행하면 le-1가 생기고 outer는 부모 record는 값이 없으므로 없다.
실행을위해 name을 찾지만 부모le에도 unintialized이므로 에러 출력하고 le-1삭제

2번줄 실행시 le-0 record: undefined > neo로 순차적으로 변환

13번줄이 되서야 sayHello : function으로 바뀜
 */