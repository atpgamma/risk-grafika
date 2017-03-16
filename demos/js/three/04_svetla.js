var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( 640, 480 );
document.body.appendChild(renderer.domElement);

var phong  = new THREE.MeshPhongMaterial({
	color: 0xff2d3d,
	specular:0xffaaff,
	shininess: 20
});





geometry = new THREE.SphereGeometry(1, 50, 50); // r, width, height
var sphere = new THREE.Mesh(geometry, phong);
scene.add(sphere);




var directional = new THREE.DirectionalLight(0xffffff, 1.0); 
directional.position.set(1, 1, 1);
scene.add(directional); 
/*
var ambient = new THREE.AmbientLight(0x404040); // deluje svuda
scene.add(ambient);
*/

/*
var point = new THREE.PointLight( 0xff0000, 1, 100);
point.position.set(2, 3, 4);
scene.add(point);
*/


camera.position.z = 6;

var render = function () {
  requestAnimationFrame( render );
  sphere.rotation.x += 0.01;
  renderer.render( scene, camera );
};

render();