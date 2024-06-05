import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Axes Helper
 */
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

/**
 * Objects
 */
const group = new THREE.Group()
group.scale.y = 1
group.rotation.y = 0.2
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)

group.add(cube1)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(0, 2, 2);
camera.lookAt(new THREE.Vector3(0, 0, 0))
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Orbit controls
const orbitControls = new OrbitControls(camera, renderer.domElement)
orbitControls.enableDamping = true; 
orbitControls.target.set(0, 0, 0);

// Render loop.
function render() {
    renderer.render(scene, camera);
}

// Setup the animation loop.
const clock = new THREE.Clock();
function animate() {
    requestAnimationFrame(animate); 
    orbitControls.update();

    const delta = clock.getDelta();
    // Update objects here. 
    group.rotation.y += delta;

    // Render the scene
    render();
}

animate();