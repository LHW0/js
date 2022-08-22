/*과제
~ 을 class로 refactoring하라
*/

let Food = class {
    constructor(taste, name) {
        this.name = name
        this.taste = taste
    }

    [Symbol.toPrimitive]() {
        return `${this.taste} ${this.name}`
    }
}

let Chef = class {
    constructor(taste) {
        this.cook = foodName => new Food(taste, foodName)
    }
}

let Waiter = class {
    order(foodName, chef) {
        return chef.cook(foodName)
    }
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()

waiter.order('짜장면', chef1)
waiter.order('짜장면', chef2)

console.log(waiter.order('짬뽕', chef2))
console.log(waiter.order('짬뽕', chef2) + '')
console.log(`${waiter.order('짬뽕', chef2)}`)

// 위 로그값이 매운짬뽕 이 출력되도록 하라