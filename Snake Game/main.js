
var canvas =document.getElementById("SnakeCanvas");
var c = canvas.getContext("2d");
c.fillStyle = "grey";
c.fillRect(0, 0, 300, 300);


const ground = new Image();
ground.src = "./images/ground.png";

const Apples = new Image();
Apples.src = "./images/food.png";

// snake

let snake = [];
snake[0] = { x : 9 * box, y : 10 * box};
snake[1] = { x : 8 * box, y : 10 * box};


//control the snake

let d;

document.addEventListener("keydown",direction);

function direction(event){
    let key = event.keyCode;
    if( key == 37 && d != "RIGHT"){
        left.play();
        d = "LEFT";
    }else if(key == 38 && d != "DOWN"){
        d = "UP";
        up.play();
    }else if(key == 39 && d != "LEFT"){
        d = "RIGHT";
        right.play();
    }else if(key == 40 && d != "UP"){
        d = "DOWN";
        down.play();
    }
}



// draw everything to the canvas

function draw(){
    
    ctx.drawImage(ground,0,0);
    
    for( let i = 0; i < snake.length ; i++){
        ctx.fillStyle = ( i == 0 )? "green" : "white";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
        
        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }
}


//function draw(){
//    for( let i=0; i < snake.length; i++){
//        ctx.fillStyle = (i==0)? "green" : "white"
//    }
//}

let game = setInterval(draw,100);
//let snake = [  {x: 150, y: 150},  {x: 140, y: 150},  {x: 130, y: 150},  {x: 120, y: 150},  {x: 110, y: 150}];
//function drawSnakePart(snakepart) {     ctx.fillstyle= "green" ; ctx.strokestyle= "darkgreen" ;  
//                                        ctx.fillrect(snakepart.x, snakepart.y, 10, 10); ctx.strokerect(snakepart.x, snakepart.y, 10, 10);
//
//}
//
//function drawSnake() { snake.forEach(drawSnakePart);}
