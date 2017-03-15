var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 640;
canvas.height = 480;


ctx.fillStyle = '#ff2d3d';
ctx.fillRect(20, 20, 50, 50);
ctx.fillStyle = 'rgb(20, 40, 60)';
ctx.fillRect(80, 20, 50, 50);