import * as THREE from 'three'

export default class Body {
    constructor(scene) {
        /**
         * Objects
         */
        this.group = new THREE.Group()
        this.group.position.set(0, 0, 0);
        this.group.scale.set(0.5, 0.5, 0.5);
        scene.add(this.group)

        const cube = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ color: 0xff0000 })
        )

        this.group.add(cube)
    }

    update(delta) {
        this.group.rotateY(delta);
    }
}