const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

//create unit
const box = 32;

//images

const ground = new Image();
ground.src = "Pictures/ground.png";

const Apples = new Image();
Apples.src = "Pictures/food.png";

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












function draw(){
    for( let i=0; i < snake.length; i++){
        ctx.fillStyle = (i==0)? "green" : "white"
    }
}








let game = setInterval(draw,100);