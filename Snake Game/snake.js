import { getInputDirection } from "./input.js"

export  const SnakeSpeed = 10
const SnakeBody = [ { x: 11, y: 11} ]


export function update() {
    const inputDirection = getInputDirection()
     for (let i = SnakeBody.length - 2; i>=0; i--) {
          SnakeBody[i+1] = { ...SnakeBody[i] }
    }

    SnakeBody[0].x += inputDirection.x
    SnakeBody[0].y += inputDirection.y

}

export function draw(gameBoard) {
    SnakeBody.forEach(segment => {
        const SnakeElement = document.createElement("div")
        SnakeElement.style.gridRowStart = segment.y
        SnakeElement.style.gridColumnStart = segment.x
        SnakeElement.classList.add("snake")
        gameBoard.appendChild(SnakeElement)
    })
}