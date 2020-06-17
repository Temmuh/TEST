 var canvas = document.querySelector("canvas")

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



// c ist context ... ist für platzsparung
var c = canvas.getContext("2d");
// c.fillStyle = "green"
// c.fillRect(100, 100, 50, 50);



// console.log(canvas); 



// //line
//  c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400,300)
// c.strokeStyle = "blue";
// c.stroke(); 

// //ark /circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "blue"
// c.stroke(); 


//  for(var i = 0; i < 10000 ; i++){
// var x = Math.random() * window.innerWidth;
// var y = Math.random() * window.innerHeight;


//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle="#"+Math.floor(Math.random()*16777215).toString(16);
//     c.stroke();
 

//  }

//ark /circle




function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle="#"+Math.floor(Math.random()*16777215).toString(16);;
        c.stroke();
    }

    this.update = function() {
        
    if( this.y + this.radius > innerHeight ||this. y - this.radius < 0) {
        this.dy = -this.dy;    
      }
      if( this.x + this.radius > innerWidth || this.x - this.radius < 0) {
        this.dx = -this.dx;  
        }
  
        this.y += this.dy;
        this.x += this.dx;
        
        this.draw();
    }
    
}


var circleArray = [];

for(var i = 0; i < 100; i++) {
    var radius = 30;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
    circleArray.push(new Circle( x, y, dx, dy, radius));

}



function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0 ,0 ,innerWidth ,innerHeight );

        for (var i = 0; i < circleArray.length; i++) {
            circleArray[i].update();
        }

}

animate();



