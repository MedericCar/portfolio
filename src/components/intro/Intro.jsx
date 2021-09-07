import React, { useEffect, useRef, useState } from 'react'
import * as THREE from "three"
import { Color, Vector4 } from 'three';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { PerlinShader } from './perlinShader'
import './intro.scss'

var renderer = new THREE.WebGLRenderer({ antialias: true });

export default function Intro({ darkTheme, active }) {

  // Use ref because need to directly manipulate DOM
  const mountRef = useRef(null);
  const [ requestId, setRequestId ] = useState(null)

  useEffect(() => {

    const curr = mountRef.current

    var startTime = Date.now();
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    renderer.setClearColor(darkTheme ? 0x000 : 0xf7f7f7,  1)

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    console.log(darkTheme)

    let geometry, color1, color2
    let w = 12, h = 2
    if (darkTheme) {
      geometry = new THREE.PlaneGeometry(w, h, 70, 50);
      color2 = new Color(0x00d1ff)
      color1 = new Color(0x040b55)
    } else {
      geometry = new THREE.PlaneGeometry(w, h, 70, 50);
      color2 =  new Color(0x5233a8)
      color1 =  new Color(0x17a3db)
    }

    var material = new THREE.ShaderMaterial({
      glslVersion: THREE.GLSL1,
      wireframe: true,
      vertexShader: PerlinShader.vertexShader,
      fragmentShader: PerlinShader.fragmentShader,
      uniforms: {
        p: { value: PerlinShader.p },
        time: { value: 0 },
        color1: { value: new Vector4(color1.r, color1.g, color1.b, 1)},
        color2: { value: new Vector4(color2.r, color2.g, color2.b, 1)},
      }
    })

    var plane1 = new THREE.Mesh(geometry, material);
    plane1.rotateX(-1.1)
    plane1.position.z = 2
    plane1.position.y = -1.15
    scene.add(plane1)
    
    var plane2 = new THREE.Mesh(geometry, material);
    plane2.rotateX(1.1)
    plane2.position.z = 2
    plane2.position.y = 1.15
    scene.add(plane2)

    camera.position.z = 5

    var animate = function () {
      if (!active) { 
        cancelAnimationFrame(requestId)
        setRequestId(null)
        return
      }

      setRequestId(requestAnimationFrame(animate));

      var elapsedMilliseconds = Date.now() - startTime;
      plane1.material.uniforms.time.value = elapsedMilliseconds / 1000. / 2;
      plane1.material.uniforms.time.value %= 30;
      renderer.render(scene, camera);
    }

    let onWindowResize = function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onWindowResize, false);

    animate()

    return () => curr.removeChild(renderer.domElement);

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <ExpandMoreIcon fontSize='large'/>
      </a>

    </div>
  )
}
