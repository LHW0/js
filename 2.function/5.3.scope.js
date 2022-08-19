const greeting = 'hello'

say('abel') //변수를 어디서 선언을 하던 콜하는건 상관이없다.

function say(name) { //function declaration
    console.log(greeting, name)
} 

say('john')

/*
greeting, say 가 record에 생김 outer는 null
greeting은 unintialized가 생기지만 function선언인 say는 바로 펑션값이 들어감
3번째줄 실행시 le가 새로 생겨 record는 name outer는 최초le가 됨
갖고있던 abel과 outer의 부모를 참고해
hello abel을 출력 후 사라짐
9번째 줄도 마찬가지
*/