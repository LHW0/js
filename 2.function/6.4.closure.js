function makeCounter() {
    let count = 0

    return function() {
        return ++count
    }
}

let counter1 = makeCounter()
let counter2 = makeCounter()

for(let i = 0; i < 2; i++)
    console.log(counter1())

for(let i = 0; i < 2; i++)
    console.log(counter2())
//결과 값을 공유하지 않는다는 의미는 서로 다른 scope에 있다는 뜻이다.