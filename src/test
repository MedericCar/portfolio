const nearDist = 0.1;
const farDist = 10000;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	55,
	window.innerWidth / window.innerHeight,
	nearDist,
	farDist
);
camera.position.x = farDist * -2;
camera.position.z = 500;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#e8a82b"); 
renderer.setPixelRatio(window.devicePixelRatio); 
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector("#canvas-wrapper").appendChild(renderer.domElement);

// Object
const cubeSize = 300;
const geometry = new THREE.IcosahedronGeometry(cubeSize, 0 ); // BufferAttribute allows for more efficient passing of data to the GPU
const material = new THREE.MeshStandardMaterial( {
    color: 0xe8a82b,
    transparent: true,
    opacity: .6,
    roughness: 0.5,
    metalness:1} );
const group = new THREE.Group();
for (let i = 0; i < 230; i++) {
	const mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = true;
  mesh.receiveShadow = false;
	const dist = farDist / 3;
	const distDouble = dist * 2;
	const tau = 2 * Math.PI; // One turn

	mesh.position.x = Math.random() * distDouble - dist;
	mesh.position.y = Math.random() * distDouble - dist;
	mesh.position.z = Math.random() * distDouble - dist;
	mesh.rotation.x = Math.random() * tau;
	mesh.rotation.y = Math.random() * tau;
	mesh.rotation.z = Math.random() * tau;

	// Manually control when 3D transformations recalculation occurs for better performance
	mesh.matrixAutoUpdate = false;
	mesh.updateMatrix();
  
	group.add(mesh);
}
scene.add(group);
// Typo
const loader = new THREE.FontLoader();
const textMesh = new THREE.Mesh();
const createTypo = font => {
	const word = "";
	const typoProperties = {
		font: font,
		size: cubeSize,
		height: cubeSize / 2,
		curveSegments: 16
	};
	const text = new THREE.TextGeometry(word, typoProperties);
  const material2 = new THREE.MeshStandardMaterial( {color: 0x1937a9} );
	textMesh.geometry = text;
	textMesh.material = material2;
	textMesh.position.x = cubeSize * -2;
	textMesh.position.z = cubeSize * -1;
	scene.add(textMesh);
};
loader.load(
	"https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",
	createTypo
);
// Lights
var light = new THREE.PointLight( 0xffffff, 1, 1 );
light.position.set( 1, 1, 10 );
light.castShadow = true;            // default false
scene.add( light );
light.shadow.mapSize.width = 512;  // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5;    // default
light.shadow.camera.far = 500      // default
light.shadow.focus = 1; 


var light2 = new THREE.DirectionalLight( 0xffffff, 1, 100 );
light2.position.set( 0, 1, 0 ); 			//default; light shining from top
light2.castShadow = true;            // default false
scene.add( light2 );
light2.shadow.mapSize.width = 512;  // default
light2.shadow.mapSize.height = 512; // default
light2.shadow.camera.near = 0.5;    // default
light2.shadow.camera.far = 500      // default
light2.shadow.focus = 1; 

var light2b = new THREE.DirectionalLight( 0xffffff, 1, 100 );
light2b.position.set( 9, 2, 9 ); 			//default; light shining from top
light2b.castShadow = true;            // default false
scene.add( light2b );
light2b.shadow.mapSize.width = 512;  // default
light2b.shadow.mapSize.height = 512; // default
light2b.shadow.camera.near = 0.5;    // default
light2b.shadow.camera.far = 500      // default
light2b.shadow.focus = 1; 

var light3 = new THREE.SpotLight( 0xffffff );
light3.castShadow = true;            // default false
scene.add( light3 );
light3.shadow.mapSize.width = 512;  // default
light3.shadow.mapSize.height = 512; // default
light3.shadow.camera.near = 0.5;    // default
light3.shadow.camera.far = 500      // default
light3.shadow.focus = 1; 


// Mouse move
let mouseX = 0;
let mouseY = 0;
const mouseFX = {
	windowHalfX: window.innerWidth / 2,
	windowHalfY: window.innerHeight / 2,
	coordinates: function(coordX, coordY) {
		mouseX = (coordX - mouseFX.windowHalfX) * 2;
		mouseY = (coordY - mouseFX.windowHalfY) * 2;
	},
	onMouseMove: function(e) {
		mouseFX.coordinates(e.clientX, e.clientY);
	},
	onTouchMove: function(e) {
		mouseFX.coordinates(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
	}
};
document.addEventListener("mousemove", mouseFX.onMouseMove, false);
document.addEventListener("touchmove", mouseFX.onTouchMove, false);
// Render
const render = () => {
	requestId = requestAnimationFrame(render);

	// Camera animation
	camera.position.x += (mouseX - camera.position.x) * 0.05;
	camera.position.y += (mouseY * -1 - camera.position.y) * 0.05;
	camera.lookAt(scene.position);

	const t = Date.now() * 0.001;
	const rx = Math.sin(t * 0.6) * 0.5;
	const ry = Math.sin(t * 0.3) * 0.5;
	const rz = Math.sin(t * 0.2) * 0.5;
	group.rotation.x = rx;
	group.rotation.y = ry;
	group.rotation.z = rz;
	textMesh.rotation.x = rx;
	textMesh.rotation.y = ry;
	textMesh.rotation.z = rx; // :) 

	renderer.render(scene, camera);
};
render();


const resizeCanvas = () => {
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);
};
window.addEventListener("resize", resizeCanvas, false);




// start render
function start() {
    render();
}

// stop render
function stop() {
   window.cancelAnimationFrame(requestId);
   requestId = undefined;
}

// observer + log + stop render
const statusElem = document.querySelector('.status');

const onScreen = new Set();
const intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      onScreen.add(entry.target);
      start();
      console.log('render has been started');
    } else {
      onScreen.delete(entry.target);
      stop();
      console.log('render has been halted');
        }     
  });
  statusElem.textContent = onScreen.size
    ? `on screen: ${[...onScreen].map(e => e.textContent).join(', ')}`
    : 'none';
});

document.querySelectorAll('.test').forEach(elem => intersectionObserver.observe(elem));



