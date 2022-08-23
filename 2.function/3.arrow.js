let add = function(a, b) {
    return a + b
}
//위에껄 arrow로 쓰면 아래처럼 쓴다
add = (a, b) => a + b
console.log(add(1, 2))

const double = n => 2 * n
console.log(double(2))

const greet = () => console.log('hello')
greet()

//
add = (a, b) => { //파라미터 2개이상이면 블럭{}을 써야함????
    const result = a + b
    return result
}

console.log(add(1, 2))