class Article {
    static publiser = 'ddanzi'

    constructor(title, viewCnt) {
        this.title = title
        this.viewCnt = viewCnt
    }

    toString() {
        return this.title
    }

    valueOf() {
        return this.viewCnt
    }

    [Symbol.toPrimitive](hint) {
        return hint == 'number' ? this.viewCnt : this.title
    }

    static compare(article1, article2) {
        return article1 - article2
    }
}

console.log(Article.publiser)

//
Article.adress = 'seoul'
console.log(Article.address)

Article.getPrice = () => 2000
console.log(Article.getPrice())

//
let article1 = new Article('java', 100)
let article2 = new Article('jabascript', 10)

console.log(Article.compare(article1, article2))

// 과제: [Symbole.toprimitive]() 추가하라
console.log(`${article1}`)
console.log(article1 + '')

//
console.log(article1.publiser, article1.address, article1.compare)
console.log(Article.title, Article.viewCnt)

console.log(Object.keys(Article))
console.log(Article.prototype)
console.log(Object.keys(article1))

//
let articles = [article1, article2]
console.log(articles)

articles.sort(Article.compare) // a - b 오름차순
Article.compare = (a, b) => b - a
articles.sort(Article.compare) // b-a 내림차순
console.log(articles)