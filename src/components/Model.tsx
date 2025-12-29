'use client';
import { useGSAP } from '@gsap/react';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

export default function Model({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);
  const { viewport, size } = useThree(); // 'size' gives us pixel width

  // EXACT 768PX BREAKPOINT
  const isMobile = size.width < 768; 

  useGSAP(() => {
    if (!meshRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    // --- CHOREOGRAPHY ---

    // 1. HERO -> SECTION 2
    // Mobile: Stay Center (x:0, y:0) | Desktop: Move Left
    tl.to(meshRef.current.position, { 
      x: isMobile ? 0 : -3, 
      y: isMobile ? 0 : -1, // CHANGED: Mobile stays at 0 (Middle)
      z: 0, 
      duration: 2 
    })
    .to(meshRef.current.rotation, { y: Math.PI / 2, x: 0, duration: 2 }, '<');

    // 2. SECTION 2 -> SECTION 3
    // Mobile: Stay Center | Desktop: Center Zoom
    tl.to(meshRef.current.position, { 
      x: 0, 
      y: 0, 
      z: isMobile ? 3 : 4, 
      duration: 2 
    }) 
    .to(meshRef.current.rotation, { x: Math.PI / 2, y: Math.PI * 2, duration: 2 }, '<');

    // 3. SECTION 3 -> SECTION 4
    // Mobile: Stay Center | Desktop: Move Right
    tl.to(meshRef.current.position, { 
      x: isMobile ? 0 : 3, 
      y: isMobile ? 0 : 0, // CHANGED: Mobile stays at 0
      z: 0, 
      duration: 2 
    })
    .to(meshRef.current.rotation, { y: Math.PI * 3, x: Math.PI / 2, duration: 2 }, '<');

    // 4. SECTION 4 -> FOOTER
    // Mobile: Stay Center (float slightly)
    tl.to(meshRef.current.position, { 
      x: 0, 
      y: isMobile ? 0.5 : 2, // Slight float up for footer text, but mostly middle
      z: -2, 
      duration: 2 
    }) 
    .to(meshRef.current.rotation, { x: Math.PI * 4, duration: 2 }, '<');

  }, { dependencies: [size.width] }); // Re-run if window resizes

  return (
    <group position={[0, 0, 0]}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        {/* Scale: 1.0 on Mobile keeps it fully visible without cropping */}
        <mesh ref={meshRef} scale={isMobile ? 1.0 : 1.8}> 
          <torusGeometry args={[1.2, 0.3, 64, 128]} />
          
          <MeshTransmissionMaterial 
            ref={materialRef}
            backside={true}
            samples={4} 
            resolution={1024} 
            thickness={1.5}
            roughness={0}          
            ior={1.5}              
            chromaticAberration={0.02}
            anisotropy={0.1}       
            distortion={0}
            distortionScale={0.2}
            temporalDistortion={0}
            color={color}          
            attenuationDistance={2}
            attenuationColor="#ffffff"
          />
        </mesh>
      </Float>
    </group>
  );
}