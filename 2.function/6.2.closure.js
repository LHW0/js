const age = 16
// sayAge() ReferenceError: sayAge is not defined 세이에이지가 없다 펑션블럭이라
//tellAge() ReferenceError: tellAge is not defined 텔에이지 없다

function init() {
    let age = 10

    function sayAge() {
        console.log(age)
    }

    let tellAge = function() {
        console.log(age)
    }

    sayAge()
    tellAge()
}

init()
// sayAge() ReferenceError: sayAge is not defined
// tellAge() ReferenceError: tellAge is not defined