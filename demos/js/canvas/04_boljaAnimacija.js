var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 640;
canvas.height = 480;


var x = 0, y = 20;
var xspeed = 10, yspeed = 10;
function draw(){
	ctx.fillStyle = "#232d3d";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "red";
	ctx.fillRect(x,y, 10, 10);
	x += xspeed;
	y += yspeed;
}
setInterval(draw, 60);