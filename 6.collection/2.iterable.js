let range = {
    from: 1,
    to: 3,
    [Symbol.iterator]() {
        this.current = this.from
        return this
    },

    next() {
        if(this.current <= this.to)
            return {
                done: false,
                value: this.current++
            }
        else
            return {
                done: true
            }
    }
}

for(let num of range)
    console.log(num)

//
function* generator() {
    let val = 1
    while(val <= 3) yield val++
}

for(let num of generator())
    console.log(num)

let g = generator() //객체를 리턴하는것 generator
console.log(g, typeof g)

//
function* gen () {
    yield* generator()
    yield* ['a', 'b']
    yield 9
}

for(let val of gen())
    console.log(val)