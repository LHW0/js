class CoffeMachine {
    waterAmount

    constructor(volt) {
        this.volltage
    }
}

console.log(CoffeMachine)
console.log(Object.keys(CoffeMachine))
console.log(CoffeMachine.prototype)

let machine = new CoffeMachine(220)
console.log(machine)

machine.waterAmount = 1
machine.volltage = 100
console.log(machine)


//
CoffeMachine = class {
    _waterAmount

    get waterAmount() {
        return this._waterAmount + 100
    }

    set waterAmount(waterAmount) {
        this._waterAmount = 2 * waterAmount
    }
}

console.log(CoffeMachine.prototype)

machine = new CoffeMachine()
console.log(machine)

machine.waterAmount = 1
console.log(machine)
console.log(machine.waterAmount)

machine.waterAmount = 11
console.log(machine._waterAmount)