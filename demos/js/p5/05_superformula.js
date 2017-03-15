var radius,
  	x,
  	y;

function setup() {

}

function draw() {
	translate(width/2, height/2);
	beginShape();
	for(var i; i < 2 * TWO_PI	; i++){
		radius = 100 * r(i, 1, 1, 0, 1, 1, 1);
		console.log(radius);
		x = radius * cos(i);
		y = radius * sin(i);
		vertex(x, y);
	}
	endShape(CLOSE);
}

function r(t, a, b, m, n1, n2, n3) {
	//return pow(pow(abs(cos(m * t / 4.0)), n2) + pow(abs(sin(m * t / 4.0)), n3), -1/n1);
	var  t1,
		 t2;
	t1 = cos(m * t / 4.0) / a;
	t1 = abs(t1);
	t1 = pow(t1, n2);

	t2 = sin(m * t / 4.0) / b;
	t2 = abs(t2);
	t2 = pow(t2, n3);



}