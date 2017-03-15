var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 640;
canvas.height = 480;

for (var i = 0; i < 15; i++) {
   	for (var j = 0; j < i; j++) {
      	if( i % 2 === 0) {
      		ctx.fillStyle = '#ff2d3d';
      	} else {
      		ctx.fillStyle = 'rgb(20, 40, 60)';
      	}
      	ctx.fillRect(j * 25, i * 25, 20, 20);
   	}
}
