const age = 16
//sayAge() //TypeError: sayAge is not a function 있는데 할당된 값이 펑션이 아니라 에러
//tellAge() //ReferenceError: tellAge is not defined 없을때 나오는 에러
console.log(sayAge) //현재 undefined 값이 있음
//console.log(hello)// ReferenceError: hello is not defined

{
    let age = 10

    function sayAge() {
        console.log(age)
    }

    let tellAge = function() {
        console.log(age)
    }

    sayAge()
    tellAge()
}

sayAge()
//tellAge() //ReferenceError: tellAge is not defined 없을때 나오는 에러

/*function도 객체이다. 펑션으로 선언된 sayAge 바로 글로벌객체 le에 생기며 값은 undefined이다.
글로벌 le에 생기므로 로컬le에 안생긴다.
로컬객체 le가 생길때 sayAge 값음 undefined > function으로 바뀜
로컬객체에 선언된것의 고향객체는 로컬객체이다. sayAge, tellAge의 environment속성은 로컬le이다.


closure 외부에 있는 변수를 참조 할 수 있는 펑션
*/