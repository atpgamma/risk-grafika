var t = 0;
function setup() {
	createCanvas(640, 480);
}

function draw() {
	translate(width/2, height/2);
	strokeWeight(7);
	point(x(t), y(t));
	t+= 0.01;
}

function x(t) {
	return 200*cos(t)*cos(t)*cos(t);
}
function y(t) {
	return 200*sin(t)*sin(t)*sin(t);
}