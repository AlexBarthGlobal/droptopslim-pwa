import React, { Component } from "react";
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const App3 = () => {
    
    const scene = new THREE.Scene();
    // const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    const camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    const loader = new GLTFLoader();
    loader.load('assets/bluwhl.glb', function ( glb ) {

      const root = glb.scene;
      scene.add( root );

    }, undefined, function ( error ) {
    
      console.error( error );
    
    } );

    const light = new THREE.DirectionalLight(0xffffff, 1)
    // light.position.set(2,2,5)
    light.position.set(-0.05,0.25,1)
    scene.add(light)

    camera.position.z = 13.3;
    camera.position.y = 2.45;
    camera.position.x = 0.06;

    // var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // var cube = new THREE.Mesh( geometry, material );
    // scene.add( cube );
    // camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame( animate );
      renderer.render( scene, camera );
    };
    animate();

    return (
        // <div />
        <></>
    )

    // var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // var cube = new THREE.Mesh( geometry, material );
    // scene.add( cube );
    // camera.position.z = 5;
    // var animate = function () {
    //   requestAnimationFrame( animate );
    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.01;
    //   renderer.render( scene, camera );
    // };
    // animate();

    
    // === THREE.JS EXAMPLE CODE END ===
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default App3;