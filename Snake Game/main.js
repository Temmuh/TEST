import { SnakeSpeed, update as UpdateSnake, draw as DrawSnake} from "./snake.js"


 let lastRenderTime = 0 
const gameBoard = document.getElementById("game-board")

 function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondSinceLastRender < 1 / SnakeSpeed) return





     lastRenderTime = currentTime 

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    UpdateSnake()

}

function draw() {
    DrawSnake(gameBoard)

}