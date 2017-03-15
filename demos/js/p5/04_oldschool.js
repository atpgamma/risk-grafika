var t = 0, 
	r,
	g,
	b;
function setup() {
	createCanvas(640, 480);
	background(0);
}

function draw() {
	//background(0);
	translate(width/2, height/2);
	stroke(255);

	r = random(0, 100);
	g = random(0, 100);
	b = random(100, 256);
	//stroke(r,g,b);

	strokeWeight(2);
	line(x1(t), y1(t), x2(t), y2(t));
	/*for(var i = 0; i < 50; i++)
		line(x1(t+i), y1(t+i), x2(t+i), y2(t+i));
	*/
	t++;
}

function x1(t) {
	return (sin(t/10) * 100 + sin(t/15)* 100);
}
function y1(t) {
	return cos(t/10)*100;
}

function x2(t) {
	return sin(t/10) * 200 + sin(t) * 2;
}
function y2(t) {
	return cos(t / 20) * 200 + cos(t / 12) * 20;
}