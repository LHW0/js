/* 과제:
~를 객체 지향으로 refactoring 하라.
*/

function Food(taste, name) {
    this.name = name
    this.taste = taste
}

function Chef(taste) {
    this.cook = foodName => new Food(taste, foodName)
}

function Waiter() {
    this.order = (foodName, Chef) => Chef.cook(foodName)
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()

waiter.order('짜장면', chef1)
waiter.order('짜장면', chef2)