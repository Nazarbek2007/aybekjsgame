let input = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    timeOut = document.querySelector('.time'),
    box = document.querySelector('.game__box'),
    score = 0,
    time = 0,
    interval = 0;
 
// let colors = ['green','red','blue','purple','orange'] 

    

btn.addEventListener('click', (event) => {
    event.preventDefault()
    if(input.value > 4) {
        time = input.value
        input.value = ''
        score = 0;
        clearInterval(interval)
        start()
        let result = document.querySelector('.result')
        if(result) {
            result.style.display = 'none'
        }
    }
})

box.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {
        score++
        event.target.remove()
        createBall()
    }
})


function start() {
    interval = setInterval(() => decrease(),1000)
    createBall()
}

function decrease() {
    if(time == 0) {
        endGame()
    }else {
        let currentTime = --time
        timeOut.innerHTML = currentTime
    }
}

function endGame() {
    box.innerHTML = `<h2 class="result">Вы набрали ${score} очков  </h2>`
}


function createBall() {
    let ball = document.createElement('div')
    let size = random(20,100)
    let cor = box.getBoundingClientRect()
    let x = random(0, cor.width - size)
    let y = random(0, cor.height - size)
    let a = random(1,255),
    b = random(1,255),
    c = random(1,255);
    
    ball.classList.add('ball')
    // ball.style.width = size + 'px'
    // ball.style.height = size + 'px'
    // ball.style.left = x + 'px'
    // ball.style.top = y + 'px'
    // ball.style.background = 'red'
    let sym = random(1,2)
    if(sym == 2){
      ball.style = `
      border-radius: 50%;
      background: rgb(${a},${b},${c});
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      `
    } else {
        ball.style = `
      border-radius: 5px;
      background: rgb(${a},${b},${c});
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      `
    }
    box.append(ball)
}

function random(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}