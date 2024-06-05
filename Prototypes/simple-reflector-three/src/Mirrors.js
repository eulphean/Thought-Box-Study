import { Reflector } from 'three/addons/objects/Reflector.js'
import * as THREE from 'three'

const NUM_MIRRRORS = 4;
const RADIUS = 2;
export default class Mirrors {
    constructor(scene) {
        console.log('Create mirror room');
        this.createMirrors(scene);
    }

    // Create a mirror configuration
    createMirrors(scene) {
        this.group = new THREE.Group();
        const geo = new THREE.PlaneGeometry(4, 1);
        const angleIncrement = (2*Math.PI)/NUM_MIRRRORS;

        this.innerMirrors = []; 
        for(let a = 0; a < 2 * Math.PI; a+=angleIncrement) {
            const posX = RADIUS * Math.cos(a);
            const posZ = RADIUS * Math.sin(a);

            // const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({color: "red", side: THREE.DoubleSide}));
            const m = new Reflector(geo, {
                color: 0x0,
                textureWidth: window.innerWidth * window.devicePixelRatio/6,
                textureHeight: window.innerHeight * window.devicePixelRatio/6
            });
            m.position.set(posX, 0, posZ);
            m.lookAt(new THREE.Vector3(0, 0, 0));
          
            // Add the mirror into the scene
            scene.add(m);

            // Save it in the array.
            // this.innerMirrors.push(m);
        }

        // Upper reflector
        const upper = new Reflector(new THREE.PlaneGeometry(4, 4), {
            color: 0x0,
            textureWidth: window.innerWidth * window.devicePixelRatio/6,
            textureHeight: window.innerHeight * window.devicePixelRatio/6
        });
        upper.position.set(0, 0.5, 0);
        upper.rotateX(Math.PI/2)
        scene.add(upper);

        // Bottom reflector
        const bottom = new Reflector(new THREE.PlaneGeometry(4, 4), {
            color: 0x0,
            textureWidth: window.innerWidth * window.devicePixelRatio/6,
            textureHeight: window.innerHeight * window.devicePixelRatio/6
        });
        bottom.position.set(0, -0.5, 0);
        bottom.rotateX(-Math.PI/2)
        scene.add(bottom);
    }
}

// // Mirrors
// const geometry = new THREE.CircleGeometry(1, 32);
// const mL1 = new Reflector(geometry, {
// textureWidth: window.innerWidth * window.devicePixelRatio,
// textureHeight: window.innerHeight * window.devicePixelRatio,
// })

// mL1.position.y = 1
// mL1.position.x = 1
// mL1.rotateY(-Math.PI/2);
// scene.add(mL1)

// const mL2 = new Reflector(geometry, {
// textureWidth: window.innerWidth * window.devicePixelRatio,
// textureHeight: window.innerHeight * window.devicePixelRatio,
// })

// mL2.position.y = 1
// mL2.position.x = 2
// mL2.rotateY(-Math.PI/2);
// scene.add(mL2)

// const mR1 = new Reflector(geometry, {
// //clipBias: 0.003,
// textureWidth: window.innerWidth * window.devicePixelRatio,
// textureHeight: window.innerHeight * window.devicePixelRatio,
// })
// mR1.position.y = 1
// mR1.position.x = -1
// mR1.rotateY(Math.PI/2)
// scene.add(mR1)

// const mR2 = new Reflector(geometry, {
// //clipBias: 0.003,
// textureWidth: window.innerWidth * window.devicePixelRatio,
// textureHeight: window.innerHeight * window.devicePixelRatio,
// })
// mR2.position.x = -2
// mR2.position.y = 1
// mR2.rotateY(Math.PI/2)
// scene.add(mR2)