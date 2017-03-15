var radius,
  	x,
  	y,
  	a,
  	b,
  	m,
  	n1,
  	n2,
  	n3;
var sa, sb, sm, sn1, sn2, sn3;

function setup() {
	createCanvas(640, 480);
	frameRate(20);
	createP('a');
	sa = createInput(1, 10, 1, 1);
	createP('b');
	sb = createInput(1, 10, 1, 1);
	createP('m');
	sm = createInput(1, 10, 0, 1);
	createP('n1');
	sn1 = createInput(1, 10, 1, 1);
	createP('n2');
	sn2 = createInput(1, 10, 1, 1);
	createP('n3');
	sn3 = createInput(1, 10, 1, 1);
	
	console.log('poceo');
	angleMode(DEGREES);


}	

function draw() {
	background(0);
	//fill(255*sin(randomGaussian(0,361)), 20, 20);
	fill('aqua');
	translate(width/2, height/2);
	a = parseFloat(sa.value());
	b = parseFloat(sb.value());
	m = parseFloat(sm.value());
	n1 = parseFloat(sn1.value());
	n2 = parseFloat(sn2.value());
	n3 = parseFloat(sn3.value());
	





	

	beginShape();
	for(var i = 0; i < 360; i++){
		//fi = (i * PI) / 180;
		//radius = 100*r(i, 2, 3, 7, 1.8, 1, 1);
		radius = 100 * r(i, a, b, m, n1, n2, n3);
		x = radius * cos(i);
		y = radius * sin(i);
		vertex(x, y);
	}
	
	endShape(CLOSE);
}

function r(t, a, b, m, n1, n2, n3) {
	return pow(pow(abs(cos(m * t / 4.0)) / a, n2) + pow(abs(sin(m * t / 4.0)) / b, n3), -1/n1);
}