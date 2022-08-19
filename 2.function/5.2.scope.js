let a = 1 //글로벌 스콥


{ //local scope 글로벌 스콥에 있는 거 사용가능
    console.log(a)
}

{ //로컬스콥에서 a 새로 선언 (스콥이 다르다면 변수선언 가능)
    let a = 2
    console.log(a) 
} //로컬에 a가 있으니 2를 출력, 괄호밖을 나가면 무용지물

console.log(a)

/*로컬스콥 생성시 또 le객체 생성되며
로컬스콥에 생긴 le객체 outer는 글로벌스콥 record는 없다
console 실행시 로컬스콥엔 record가 없으므로 부모인 글로벌스콥에서 찾는다.
종료되면 le객체는 사라진다. */