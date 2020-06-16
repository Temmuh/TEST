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


 for(var i = 0; i < 10000 ; i++){
var x = Math.random() * window.innerWidth;
var y = Math.random() * window.innerHeight;

    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = "blue"
    c.stroke();
 

 }