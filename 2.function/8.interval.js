let timeId = setInterval(() => console.log('tick'), 1000)

setTimeout(() => {
    clearInterval(timeId) //지우는 역할 clearInterval
    console.log('stop')
}, 3000)