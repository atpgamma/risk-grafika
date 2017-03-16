var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( 640, 480 );
document.body.appendChild( renderer.domElement );

var normal = new THREE.MeshNormalMaterial({
});
var basic  = new THREE.MeshBasicMaterial({
	color: 0xff2d3d,
	wireframe: true
});
var phong  = new THREE.MeshPhongMaterial({
	color: 0xff2d3d,
	specular:0xffaaff,
	shininess: 20
});
var lambert = new THREE.MeshLambertMaterial({
	color: 0x11aabb
});



var directional = new THREE.DirectionalLight(0xefefff, 1.5);
var ambient = new THREE.AmbientLight(0x404040);
directional.position.set(1, 1, 1);
scene.add(directional);
scene.add(ambient);

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var cube = new THREE.Mesh(geometry, normal);


geometry = new THREE.SphereGeometry(1, 50, 50); // r, width, height
var sphere = new THREE.Mesh(geometry, phong);
sphere.position. x = -5;

geometry = new THREE.TorusGeometry(1, 0.2, 10, 100);
var torus = new THREE.Mesh(geometry, phong);
torus.position.x = 3;

geometry = new THREE.ConeGeometry(1, 3, 50, 50);
cone = new THREE.Mesh(geometry, lambert);
cone.position.y = 5;
scene.add(cone);
scene.add(torus);
scene.add(sphere);
scene.add(cube);



camera.position.z = 6;

var render = function () {
  requestAnimationFrame( render );
  cube.rotation.x += 0.01;
  torus.rotation.x += 0.01;
  sphere.rotation.x += 0.01;
  cone.rotation.x += 0.01;
  renderer.render( scene, camera );
};

render();