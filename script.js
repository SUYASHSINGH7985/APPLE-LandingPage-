// Import required Three.js modules
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// Create Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container3D").appendChild(renderer.domElement);

// Set camera position
camera.position.z = 500;

// Add Lighting
const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(500, 500, 500);
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, 1);
scene.add(ambientLight);

// Load 3D Model
const loader = new GLTFLoader();
let object;

loader.load(
  `./models/eye/scene.gltf`,  // Change this if loading a different model
  `./models/eye/scene.gltf`,  
function (gltf) {
object = gltf.scene;
scene.add(object);
@@ -38,35 +27,24 @@ loader.load(
console.error(error);
}
);

// Make the 3D model move based on mouse position
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

document.onmousemove = (e) => {
mouseX = e.clientX;
mouseY = e.clientY;
};

// Animation Loop
function animate() {
requestAnimationFrame(animate);

  // Rotate the 3D model dynamically
if (object) {
object.rotation.y = -3 + (mouseX / window.innerWidth) * 3;
object.rotation.x = -1.2 + (mouseY * 2.5) / window.innerHeight;
}

renderer.render(scene, camera);
}

// Handle window resizing
window.addEventListener("resize", function () {
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start animation
animate();
