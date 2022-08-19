function makeCounter() {
    let count = 0

    return function() {
        return ++count
    }
}

let count1 = makeCounter()
let count2 = makeCounter()

for(let i = 0; i < 2; i++)
    console.log(count1())

for(let i = 0; i < 2; i++)
    console.log(count2())