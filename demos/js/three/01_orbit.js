var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(640, 480);
document.body.appendChild( renderer.domElement );

var group = new THREE.Group();

for(var i = 0; i < 10; i++)
  for(var j = 0; j <i; j++)
    for(var k = 0; k < i; k++) {
        var geometry = new THREE.BoxGeometry(2, 2, 2);
        var material = new THREE.MeshNormalMaterial();
        var cube = new THREE.Mesh(geometry, material);
        cube.position.set(i * 5, j * 5, k * 5);
        group.add(cube);
    }


var controls = new THREE.OrbitControls(camera, renderer.domElement); 

scene.add(group);


camera.position.z = 5;
camera.position.x = 10;

var render = function () {
  requestAnimationFrame(render);
  //group.rotation.x += 0.01;
  //group.rotation.y += 0.01;
  renderer.render(scene, camera);
  controls.update();
};

render();

