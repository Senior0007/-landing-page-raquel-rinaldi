import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Generate random particles data outside of component
function generateParticleData(count: number) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    
    // Gold color variations
    colors[i * 3] = 0.83 + Math.random() * 0.17;     // R
    colors[i * 3 + 1] = 0.68 + Math.random() * 0.2;   // G
    colors[i * 3 + 2] = 0.21 + Math.random() * 0.1;   // B
  }
  
  return { positions, colors };
}

function Particles({ count = 200 }) {
  const mesh = useRef<THREE.Points>(null!);
  
  const particles = useMemo(() => generateParticleData(count), [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.03;
      mesh.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[particles.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function GoldenSphere() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere args={[1.2, 64, 64]} position={[2.5, 0.5, -1]}>
        <MeshDistortMaterial
          color="#D4AF37"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.9}
          envMapIntensity={1}
        />
      </Sphere>
    </Float>
  );
}

function GlowOrb({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <Sphere args={[0.4, 32, 32]} position={position}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.15}
        />
      </Sphere>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#f4e4ba" />
        <pointLight position={[-3, 2, -2]} intensity={0.5} color="#D4AF37}" />
        
        <Particles count={150} />
        <GoldenSphere />
        <GlowOrb position={[-2.5, -1, -2]} color="#D4AF37" />
        <GlowOrb position={[3, 2, -3]} color="#f4e4ba" />
      </Canvas>
    </div>
  );
}