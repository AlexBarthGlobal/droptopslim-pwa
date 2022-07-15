// import './App.css';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';



// function App() {

  // const scene = new THREE.Scene();
  // const loader = new GLTFLoader();

  // loader.load( 'path/to/model.glb', function ( gltf ) {

  //   scene.add( gltf.scene );
  
  // }, undefined, function ( error ) {
  
  //   console.error( error );
  
  // } );

//   const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

//   return (
//     <div className="App">
//       <
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

class App extends Component {
  componentDidMount() {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    const loader = new GLTFLoader();
    loader.load('./glbs/bluwhl.glb', function ( gltf ) {
  
      scene.add( gltf.scene );
    
    }, undefined, function ( error ) {
    
      console.error( error );
    
    } );

    camera.position.z = 5;

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
  render() {
    return (
      <div />
    )
  }
}
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default App;