/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useMemo } from 'react'
import { useGLTF, useAnimations, useTexture } from '@react-three/drei'
import { useGraph } from '@react-three/fiber'
import { useEffect } from 'react';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js'

export default function Model(props) {
  const group = useRef()
  const { scene, materials, animations } = useGLTF('/thought-box-draco.glb')
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes } = useGraph(clone);

  // Load texture and flip it for the texture. 
  const bakedTexture = useTexture('/baked.jpg');
  bakedTexture.flipY = false;
  
  // Read animations
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    let action;
    if (props.animation === 'squats') {
      action = actions.Squats;
    } else if (props.animation === 'walk') {
      action = actions.Walk;
    } else if (props.animation === 'sit') {
      action = actions.Sit;
    } else {
      action = actions.Laugh;
    }    
    action.play();
  }, [])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]}>
          <group name="Body005">
            <skinnedMesh
              name="Mesh012"
              geometry={nodes.Mesh012.geometry}
              skeleton={nodes.Mesh012.skeleton}
            >
              <meshBasicMaterial map={bakedTexture} />
            </skinnedMesh>
            <skinnedMesh
              name="Mesh012_1"
              geometry={nodes.Mesh012_1.geometry}
              skeleton={nodes.Mesh012_1.skeleton}
            >
              <meshBasicMaterial map={bakedTexture} />
            </skinnedMesh>
            <skinnedMesh
              name="Mesh012_2"
              geometry={nodes.Mesh012_2.geometry}
              skeleton={nodes.Mesh012_2.skeleton}
            >
              <meshBasicMaterial map={bakedTexture} />
            </skinnedMesh>
            <skinnedMesh
              name="Mesh012_3"
              geometry={nodes.Mesh012_3.geometry}
              skeleton={nodes.Mesh012_3.skeleton}
            >
              <meshBasicMaterial color={0xff0000} />
            </skinnedMesh>
          </group>
          <primitive object={nodes.mixamorig6Hips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/thought-box-draco.glb')