function setup() {
	createCanvas(640, 480);
}

function draw() {
	
	// osnovni oblici
	fill(20, 40, 60);
	ellipse(120, 240, 100, 100);
	fill(112);
	rect(250, 200, 100, 120);
	fill('lime');
	quad(0, 0, 0, 40, 60, 100, 80, 7); //quad(x1,y1,x2,y2,x3,y3,x4,y4); 
	line(0, 0, 120, 240); // line(x1, y1, x2, y2)
	fill('red');
	triangle(130, 75, 158, 20, 186, 75); //triangle(x1,y1,x2,y2,x3,y3)

	// mnogougao
	beginShape();
		vertex(230, 20);
		vertex(285, 20);
		vertex(285, 75);
		vertex(230, 75);
	endShape(CLOSE);


	// triangle stip
	beginShape(TRIANGLE_STRIP); 
		vertex(330, 75);
		vertex(340, 20);
		vertex(350, 75);
		vertex(360, 20);
		vertex(370, 75);
		vertex(380, 20);
		vertex(390, 75);
	endShape();
}