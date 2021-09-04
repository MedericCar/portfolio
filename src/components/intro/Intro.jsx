import React, { useEffect, useRef } from 'react'
import * as THREE from "three"
import { PerlinShader } from './perlinShader'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Color, Vector4 } from 'three';

import './intro.scss'

export default function Intro({ darkTheme, active }) {
  const mountRef = useRef(null);

  useEffect(() => {

    const curr = mountRef.current

    if (!active) return () => {
      console.log('removing scene')
      console.log(curr)
      if (renderer) curr.removeChild(renderer.domElement);
    }

    var startTime = Date.now();
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(darkTheme ? 0x17151F : 0xf7f7f7,  1)

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    let geometry, color1, color2
    let w = 12, h = 2
    if (darkTheme) {
      geometry = new THREE.PlaneGeometry( w, h, 70, 50);
      color2 = new Color(0x00d1ff)
      color1 = new Color(0x040b55)
    } else {
      geometry = new THREE.PlaneGeometry( w, h, 70, 50);
      color2 =  new Color(0x5233a8)
      color1 =  new Color(0x17a3db)
    }

    var material = new THREE.ShaderMaterial({
      wireframe: true,
      vertexShader: PerlinShader.vertexShader,
      fragmentShader: PerlinShader.fragmentShader,
      uniforms: {
        p: { value: PerlinShader.p },
        time: { value: 0 },
        freq: { value: 0.0075 },
        amplitude: { value: 0.2 },
        color1: { value: new Vector4(color1.r, color1.g, color1.b, 1)},
        color2: { value: new Vector4(color2.r, color2.g, color2.b, 1)},
      }
    })

    var sphere = new THREE.Mesh(geometry, material);
    sphere.rotateX(-1.1)
    sphere.position.z = 2
    sphere.position.y = -1.15
    scene.add(sphere)

    camera.position.z = 5

    var animate = function () {
      if (!active) return
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

    if (active) animate();

    return () => curr.removeChild(renderer.domElement);

  }, [darkTheme, active]);

  return (
    <div className='intro' id='intro'>

      <div id='c' ref={mountRef}></div>
      
      <div className='info'>
        <h1>Médéric Carriat</h1>
        <h4>Software Engineer looking for a 6-month internship</h4>
      </div>

      <a 
        className='arrow'
        href='#experience'
      >
        <ExpandMoreIcon/>
      </a>

    </div>
  )
}
