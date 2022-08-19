function add(a, b) { //이때 add변수 선언
    return a + b
}

console.log(add(1, 2, 3)) //오버된 파라미터는 무시함

//
add = function(...args) { //변수앞에 ...이 있으면 rest파라미터(배열)이다.
    let tot = 0
    for(let arg of args) tot += arg
    return tot
} //rest파라미터는 파라미터의 갯수를 제한없이 사용가능하게 된다. !!배열
console.log(add(1), add(1, 2, 3))

//
function printName(firstName, lastName, ...titles) { //rest 파라미터는 마지막에 위치해야한다.
    console.log(firstName, lastName)
    console.log(titles[0], titles[1], titles[2])
    console.log(titles.length)
}

printName('adam', 'smith', 'operator', 'consul')
/*
adam smith -> 첫번째 콘솔인 firstName, lastName 출력
operator consul undefined -> 타이틀인 operator consul출력되고 빈공간은 ubdefined 출력
2 -> 타이틀이 2개이기 때문에 length는 2  
*/

//
function showName() { //< ()안에 파라미터를 두면 arguments안에 들어감
    console.log(arguments.length)
    console.log(arguments[0], arguments[1]) //arguments는 배열
}

showName()
showName('erica', 'terry')

console.log(Math.max(1, 2, 3)) //파라미터 중 최고값을 리턴

//rest는 파라미터들을 한곳에 모으는것고 spread는 파라미터를 흩뿌리는것

let arr = [1, 2, 3]
console.log(Math.max(arr))//파라미터가 뭉쳐있어 불가
console.log(Math.max(...arr))//파라미터가 흩뿌려진 상태여서 제일 큰 3을뽑아냄

let arr2 = [4, 5, 6]
console.log(...arr, ...arr2)
console.log(Math.max(...arr, ...arr2)) //최고값 6이므로 6뽑아냄
console.log(Math.max(0, ...arr, 7, ...arr2, 8))

arr = [0, ...arr2, 9]
console.log(arr)