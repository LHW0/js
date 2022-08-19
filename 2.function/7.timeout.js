function sayHi() {
    console.log('Hi')
}

setTimeout(sayHi, 1000) //1초 있다가 결과가 나옴 1000이 딜레이
//setTimeout은 첫번째 파라미터를 큐에다 넣고 지정한 시간이 지나면 출력한다.


//
function greet(phrase, who) {
    console.log(phrase, who)
}

setTimeout(greet, 2000, 'hello', 'knox')

//
let timeId = setTimeout(() => console.log('hoo'), 3000)
clearTimeout(timeId) //큐에 timeId를 넣었다가 바로 빼버림

