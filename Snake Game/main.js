
var canvas =document.getElementById("SnakeCanvas");
var c = canvas.getContext("2d");
c.fillStyle = "grey";
c.fillRect(0, 0, 300, 300);


let snake = [  {x: 150, y: 150},  {x: 140, y: 150},  {x: 130, y: 150},  {x: 120, y: 150},  {x: 110, y: 150}];
function drawSnakePart(snakepart) {     ctx.fillstyle= "green" ; ctx.strokestyle= "darkgreen" ;  
                                        ctx.fillrect(snakepart.x, snakepart.y, 10, 10); ctx.strokerect(snakepart.x, snakepart.y, 10, 10);

}

function drawSnake() { snake.forEach(drawSnakePart);}