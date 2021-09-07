const PerlinShader = {

  p: [
    151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30, 69, 142,
    8,99,37,240,21,10,23,190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,
    35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165, 71,
    134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92, 41,
    55,46,245,40,244,102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,
    18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52 , 217,
    226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,
    182,189,28,42,223,183,170,213,119,248,152, 2,44,154,163, 70,221,153, 101, 155,
    167, 43,172,9,129,22,39,253, 19,98,108,110,79,113,224,232, 178, 185, 112, 104,
    218,246,97,228,251,34,242,193,238,210,144,12,191,179, 162, 241, 81,51,145,235,
    249,14,239,107,49,192,214, 31,181,199,106,157,184, 84, 204, 176,115,121,50,45,
    127, 4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78, 66, 215,
    61,156,180,
    151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30, 69, 142,
    8,99,37,240,21,10,23,190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,
    35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165, 71,
    134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92, 41,
    55,46,245,40,244,102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,
    18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52 , 217,
    226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,
    182,189,28,42,223,183,170,213,119,248,152, 2,44,154,163, 70,221,153, 101, 155,
    167, 43,172,9,129,22,39,253, 19,98,108,110,79,113,224,232, 178, 185, 112, 104,
    218,246,97,228,251,34,242,193,238,210,144,12,191,179, 162, 241, 81,51,145,235,
    249,14,239,107,49,192,214, 31,181,199,106,157,184, 84, 204, 176,115,121,50,45,
    127, 4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78, 66, 215,
    61,156,180
  ],

  vertexShader: `
    #include <common>

    in vec3 position;
    in vec3 normal;
    
    varying float maxDelta;
    varying float delta;
      
    uniform int p[512]; 
    uniform float time;
    
    // Permutation array, repeated to avoid overflow
    
    // Smooth function
    float fade(float v)
    {
      return (v * v * v * (v * (v * 6.0 - 15.0) + 10.0));
    }
    
    // Pseudo-random direction : compute dot product between distance vector (fx, fy, fz) 
    // in the cube with a random gradient vector (12 possibilities)
    float grad(int hash, float x, float y, float z)
    {
      float val = mod(float(hash), 15.0);
      if (val == 0.0) return  x + y;
      else if (val == 1.0) return -x + y;
      else if (val == 2.0) return  x - y;
      else if (val == 3.0) return -x - y;
      else if (val == 4.0) return  x + z;
      else if (val == 5.0) return -x + z;
      else if (val == 6.0) return  x - z;
      else if (val == 7.0) return -x - z;
      else if (val == 8.0) return  y + z;
      else if (val == 9.0) return -y + z;
      else if (val == 10.0) return  y - z;
      else if (val == 11.0) return -y - z;
      else if (val == 12.0) return  y + x;
      else if (val == 13.0) return -y + z;
      else if (val == 14.0) return  y - x;
      else if (val == 15.0) return -y - z;
      else return 0.0;
    }
    
    // Noise function based on pseudo-random gradient values
    // Perlin, Ken. 2002. "Improving Noise." 
    float noise(float x, float y, float z)
    {
      // Unit cube of the point (bounds are [i, i+1])
      int ix = int(mod(floor(x), 255.0));
      int iy = int(mod(floor(y), 255.0));
      int iz = int(mod(floor(z), 255.0));
    
      // Position in the cube (fractional part)
      float fx = x - float(ix);
      float fy = y - float(iy);
      float fz = z - float(iz);
    
      // Smooth the coordinates for smoother transition between gradients
      float u = fade(fx);
      float v = fade(fy);
      float w = fade(fz);
    
      // Hash coordinates of cube corners
      int A =  p[ix     ] + iy;
      int B =  p[ix  + 1] + iy;
      int AA = p[A      ] + iz;
      int BA = p[B      ] + iz;
      int AB = p[A   + 1] + iz;
      int BB = p[B   + 1] + iz;
    
      // Interpolate axis by axis
      return mix(
        mix(
          mix(
            grad(p[AA  ], fx  , fy  , fz  ),
            grad(p[BA  ], fx-1.0, fy  , fz  ),
            u
          ),
          mix(
            grad(p[AB  ], fx  , fy-1.0, fz  ),
            grad(p[BB  ], fx-1.0, fy-1.0, fz  ),
            u
          ),
          v
        ),
        mix(
          mix(
            grad(p[AA+1], fx  , fy  , fz-1.0),
            grad(p[BA+1], fx-1.0, fy  , fz-1.0),
            u
          ),
          mix(
            grad(p[AB+1], fx  , fy-1.0, fz-1.0),
            grad(p[BB+1], fx-1.0, fy-1.0, fz-1.0),
            u
          ),
          v
        ),
        w
      );
    }
    
    void main()
    {
      float freq = 0.0075;
      float amplitude = 0.2;

      // Conversion to clip
      vec4 pos = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
      pos.xyz /= pos.w;
      pos.w = 1.0 / pos.w;
      pos.xyz += vec3(15);
      pos.xy *= vec2(1000);
    
      maxDelta = amplitude;
      delta = noise(pos.x*freq, pos.y*freq, time) * amplitude;
      //delta = noise(pos.x*freq, pos.y*freq, time) * amplitude;
    
      vec3 FragWorldPosDisplaced = vec3(modelMatrix * vec4(position + normal * delta, 1.0));
      gl_Position = projectionMatrix * viewMatrix * vec4(FragWorldPosDisplaced, 1.0);
    }
    `,

  fragmentShader : `
    #include <common>

    varying float maxDelta;
    varying float delta;
      
    uniform float time;
    uniform vec4 color1;
    uniform vec4 color2;


    void main()
    {
        vec4 color = mix(color1, color2, delta / maxDelta);
        gl_FragColor = color;
    } 
    `
}

export { PerlinShader }