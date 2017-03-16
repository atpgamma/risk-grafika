var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( 640, 480 );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshNormalMaterial();
var cube = new THREE.Mesh( geometry, material );


geometry = new THREE.SphereGeometry(1, 5, 5); // r, width, height
var sphere = new THREE.Mesh(geometry, material);
sphere.position. x = -5;

geometry = new THREE.TorusGeometry(1, 0.2, 10, 100);
var torus = new THREE.Mesh(geometry, material);
torus.position.x = 5;
scene.add(torus);
scene.add(sphere);
scene.add(cube);



camera.position.z = 5;

var render = function () {
  requestAnimationFrame( render );
  cube.rotation.x += 0.01;
  torus.rotation.x += 0.01;
  sphere.rotation.x += 0.01;
  renderer.render( scene, camera );
};

render();