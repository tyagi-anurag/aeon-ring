'use client';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Model from './Model';

export default function Scene({ color }: { color: string }) {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100vw', 
      height: '100vh',
      zIndex: 0,
      pointerEvents: 'none'
    }}>
      <Canvas 
        dpr={1} 
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }} 
      >
        <directionalLight position={[10, 10, 5]} intensity={4} color="#ffffff" />
        {/* Boosted color light to make the ring glow properly */}
        <directionalLight position={[-10, -10, -5]} intensity={6} color={color} />
        <ambientLight intensity={1} />
        
        <Environment preset="studio" />
        
        <Model color={color} />
      </Canvas>
    </div>
  );
}