export  const SnakeSpeed = 1
const SnakeBody = [
    { x: 11, y: 11},
    { x: 12, y: 11},
    { x: 13, y: 11}
]


export function update() {
    console.log("UpdateSnake")

}

export function draw(gameBoard) {
    SnakeBody.forEach(segment => {
        const SnakeElement = document.createElement("div")
        SnakeElement.style.gridRowStart = segment.x
        SnakeElement.style.gridColumnStart = segment.y
        SnakeElement.classList.add("snake")
        gameBoard.appendChild(SnakeElement)
    })
}