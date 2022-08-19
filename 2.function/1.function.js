function greet() {
    console.log('hello')
}

greet()

let salute = function() {
    console.log('hi')
} //변수 오른편에 할당연산자가 있으면 쓰기 없으면 읽기

salute() // 펑션을 콜하려면 ()파라미터 붙여서 콜해야함
console.log(salute)

let sayHello = function(user, greeting) { //이 변수에는 펑션이 담길거라 동사를씀
    return `${greeting}, ${user}` //template literal
}

console.log(sayHello('rebecca', 'hello'))

//과제 : HI라고 인사하는 function을 정의하고 실행하라.
let sayHi = function() {
    console.log('HI')
}
const say = sayHi
say()

//
let shout = function() {
    return function() {
        console.log('you hoo')
    }
}
let speak = shout()
speak();

//이거 쓸때는 위에 코드에 세미콜론써야 에러안남 - 이름없는 펑션
(function() {
    console.log('earth')
})()

//
let myFn = function(fn) {
    const result = fn() //fn은 리턴이 있어야하는 펑션임
    console.log(result)
}

myFn(function() { //이 펑션이 fn에 들어간다.
    return 'moon'
})

let argFn = function() {
    return 'star'
}
myFn(argFn)

let showMsg = function(from, msg='no message') { //no message라는 기본값을 줘서 값이없을때 이게 출력되도록함
    console.log(`${from}: ${msg}`)
}
showMsg('trinity', 'follow rabbit')
showMsg('trinity')

