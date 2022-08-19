let a
console.log(a)
a = 1
a = 2

//global scope 글로벌 객체내에서 사용되고 있으므로 글로벌 스콥
/*lexical Environment(le객체) = 이론상의 객체
스크립트(js) 생성을 하면 le가 생성 - le들은 서로 연결

record = 해당객체가 갖고있는 데이터(변수)의 집합
outer = 다른객체의 주소

최초생성시 outer record는 null , a는 unintialized이며 사용불가 상태다

let a가 실행이되면 a 값에 undefinded가 생김
할당연산자 a = 1이 실행되면 a는 1로 변함

실행이 끝나면 le객체가 사라짐

*/