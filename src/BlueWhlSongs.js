import React, { Component } from "react";
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

class BlueWhlSongs extends Component {

    componentDidMount() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 25, window.innerWidth/window.innerHeight, 0.1, 1000 );
        const renderer = new THREE.WebGLRenderer();

        const container = document.querySelector('#testdiv');
        const dims = container.getBoundingClientRect();

        renderer.setSize( dims.width, dims.height );
        this.mount.appendChild( renderer.domElement );

        const resizeWhl = () => {
            const dims = container.getBoundingClientRect();
            renderer.setSize( dims.width, dims.height );
        }

        window.addEventListener("resize", resizeWhl);

        const loader = new GLTFLoader();
        loader.load('assets/bluwhl-dolphin-centered2.glb', function ( glb ) {

        const root = glb.scene;
        scene.add( root );

        }, undefined, function ( error ) {
        
            console.error( error );
        
        } );

        const light = new THREE.DirectionalLight(0xffffff, 1)

        light.position.set(0,0,1)
        scene.add(light)

        camera.position.z = 15;

        // var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        // var cube = new THREE.Mesh( geometry, material );
        // scene.add( cube );
        // // camera.position.z = 5;
        // // console.log(root)
        // console.log(cube)

        var animate = function () {
            requestAnimationFrame( animate );
            renderer.render( scene, camera );
        };
        animate();
    }


    render() {
        return (
            <div 
                ref={mount => { this.mount = mount}}
            />
        )
    }
}
export default BlueWhlSongs;