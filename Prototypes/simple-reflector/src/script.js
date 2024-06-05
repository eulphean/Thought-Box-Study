import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import Mirrors from './Mirrors'
import Body from './Body'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color("grey");

// Mirrors and Body
const mirrors = new Mirrors(scene);
const body = new Body(scene);

// Add lights.
const light1 = new THREE.PointLight(0xffffff, 100)
light1.position.set(2.5, 2.5, 2.5)
light1.castShadow = true
scene.add(light1)

const light2 = new THREE.PointLight(0xffffff, 100)
light2.position.set(-2.5, 2.5, 2.5)
light2.castShadow = true
scene.add(light2)

const ambient = new THREE.AmbientLight(0x404040, 5.5);
scene.add(ambient);

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(0, 2, 6);
camera.lookAt(new THREE.Vector3(0, 0, 0))
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)


// Resize the canvas
window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

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
    // body.update(delta);

    // Render the scene
    render();
}

animate();