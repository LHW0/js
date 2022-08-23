class User{  // sugar syntax
    constructor(name) {
        this.name = name
    }

    introduce() {
        console.log(`I am ${this.name}`)
    }
}

let user = new User('john')
console.log(user.name)
user.introduce()

//[[isClassConstructor]]: true
//User('john') // TypeError: Class constructor User cannot be invoked without 'new'

//
User = class {
    name  //class field
    age

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    introduce() {
        console.log(`${this.name} / ${this.age}`)
    }
}

user = new User('abel', 12)
user.introduce() // abel / 12
console.log(user.name) // abel
console.log(User.prototype.name) // undedfined

//
function makeClass(phrase) {
    return class {
        sayHi() {
            console.log(phrase)
        }
    }
}

User = makeClass('hello')

new User().sayHi()