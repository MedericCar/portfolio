import React, { useEffect, useRef } from 'react'
import * as THREE from "three"
import { PerlinShader } from './perlinShader'

import './intro.scss'
import { Vector4 } from 'three';

export default function Intro({ darkTheme }) {
  const mountRef = useRef(null);

  useEffect(() => {

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(darkTheme ? 0x17151F : 0xf7f7f7,  1)

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    //var geometry = new THREE.SphereGeometry(1.7, 10, 10);
    //var geometry = new THREE.OctahedronGeometry( 1.5, 1);
    //var geometry = new THREE.IcosahedronGeometry(1, 200);
    var geometry = new THREE.PlaneGeometry( 15, 5, 50, 50);
    var material = new THREE.ShaderMaterial({
      wireframe: true,
      vertexShader: PerlinShader.vertexShader,
      fragmentShader: PerlinShader.fragmentShader,
      uniforms: {
        p: { value: PerlinShader.p },
        time: { value: 0 },
        freq: { value: 0.01 },
        //freq: { value: 0.005 },
        amplitude: { value: 0.25 },
        //modelTransposeInv: { value: camera.ma},
        color2: { value: new Vector4(0.32, 0.2, 0.66, 1)},
        color1: { value: new Vector4(0.09, 0.64, 0.86, 1)},
      }
    })

    var sphere = new THREE.Mesh(geometry, material);
    sphere.rotateX(-1)
    //sphere.position.x = 2.5
    //sphere.position.z = 0

    scene.add(sphere);
    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame(animate);
      var elapsedMilliseconds = Date.now() - startTime;
      sphere.material.uniforms.time.value = elapsedMilliseconds / 1000. / 2;
      renderer.render(scene, camera);
    };

    let onWindowResize = function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onWindowResize, false);

    var startTime = Date.now();
    animate();

    return () => mountRef.current.removeChild( renderer.domElement);
  }, [darkTheme]);

  return (
    <div className='intro' id='intro'>

      <div id='c' ref={mountRef}></div>
      
      <div className='info'>
        <h1>Médéric Carriat</h1>
        <h4>Software Engineering student in Paris</h4>
      </div>

      <a 
        className='arrow'
        href='#experience'
      >
      </a>

    </div>
  )
}
