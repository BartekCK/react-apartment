import React, {useRef} from 'react'
import {useGLTF, useTexture} from '@react-three/drei'
import * as Three from 'three'

export function Office(props) {
    const {nodes, materials} = useGLTF('/models/untitled.gltf')

    const texture = useTexture('/textures/Baked.png')
    texture.flipY = false;
    texture.colorSpace = "srgb";

    const textureMaterial = new Three.MeshStandardMaterial({map: texture})
    const textureGlassMaterial = new Three.MeshStandardMaterial({map: texture, transparent: true, opacity: 0.4})

    return (
        <group {...props} dispose={null}>
            <group position={[-1.478, 0.29, 1.021]} rotation={[0, -1.571, 0]} scale={1.503}>
                <mesh geometry={nodes.mesh2012942376.geometry} material={textureMaterial}/>
                <mesh geometry={nodes.mesh2012942376_1.geometry} material={textureMaterial}/>
                <mesh geometry={nodes.mesh2012942376_2.geometry} material={textureMaterial}/>
                <mesh geometry={nodes.mesh2012942376_3.geometry} material={textureMaterial}/>
                <mesh geometry={nodes.mesh2012942376_4.geometry} material={textureMaterial}/>
                <mesh geometry={nodes.mesh2012942376_5.geometry} material={textureMaterial}/>
            </group>
            <mesh geometry={nodes.Desk.geometry} material={textureMaterial} position={[0.663, 0, -1.892]}
                  scale={159.631}/>
            <group position={[1.6, 1.065, -2.487]} rotation={[0, -1.571, 0]} scale={0.145}>
                <mesh geometry={nodes['Wall_Painting_01_Plane002-Mesh'].geometry} material={textureMaterial}/>
                <mesh geometry={nodes['Wall_Painting_01_Plane002-Mesh_1'].geometry} material={textureMaterial}/>
                <mesh geometry={nodes['Wall_Painting_01_Plane002-Mesh_2'].geometry} material={textureMaterial}/>
                <mesh geometry={nodes['Wall_Painting_01_Plane002-Mesh_3'].geometry} material={textureMaterial}/>
                <mesh geometry={nodes['Wall_Painting_01_Plane002-Mesh_4'].geometry} material={textureMaterial}/>
                <mesh geometry={nodes['Wall_Painting_01_Plane002-Mesh_5'].geometry} material={textureMaterial}/>
            </group>
            <group scale={[2.5, 1, 2.5]}>
                <mesh geometry={nodes.Plane.geometry} material={textureMaterial}/>
                <mesh geometry={nodes.Plane_1.geometry} material={textureMaterial}/>
            </group>
            <mesh geometry={nodes.window.geometry} material={textureGlassMaterial} position={[-2.626, 1.433, 0]}
                  scale={[0.227, 0.302, 0.647]}/>
        </group>
    )
}

useGLTF.preload('/models/untitled.gltf')
