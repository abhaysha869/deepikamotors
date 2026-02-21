"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls, Environment, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function WireGlobe() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
        }
    });

    return (
        <group>
            {/* Inner Dark Core */}
            <mesh>
                <sphereGeometry args={[2.9, 64, 64]} />
                <meshStandardMaterial color="#050505" />
            </mesh>

            {/* Outer Wireframe Globe */}
            <mesh ref={meshRef}>
                <sphereGeometry args={[3, 32, 32]} />
                <meshStandardMaterial
                    color="#FFFFFF"
                    wireframe
                    transparent
                    opacity={0.15}
                    emissive="#FFFFFF"
                    emissiveIntensity={0.2}
                />
            </mesh>

            {/* Glowing Export Nodes (Abstract representation of S.Africa, Nepal, Philippines, Qatar, Sri Lanka) */}
            <group ref={meshRef}>
                {/* Node 1 */}
                <mesh position={[1.5, 1.5, 2]}>
                    <sphereGeometry args={[0.08, 16, 16]} />
                    <meshStandardMaterial color="#FF4500" emissive="#FF4500" emissiveIntensity={2} />
                </mesh>
                <mesh position={[-2, 0.5, 2.2]}>
                    <sphereGeometry args={[0.08, 16, 16]} />
                    <meshStandardMaterial color="#FF4500" emissive="#FF4500" emissiveIntensity={2} />
                </mesh>
                <mesh position={[2, -1.5, 1.5]}>
                    <sphereGeometry args={[0.08, 16, 16]} />
                    <meshStandardMaterial color="#FF4500" emissive="#FF4500" emissiveIntensity={2} />
                </mesh>
                <mesh position={[2.5, 0.5, -1.5]}>
                    <sphereGeometry args={[0.08, 16, 16]} />
                    <meshStandardMaterial color="#FF4500" emissive="#FF4500" emissiveIntensity={2} />
                </mesh>
                <mesh position={[0.5, -2, 2.2]}>
                    <sphereGeometry args={[0.08, 16, 16]} />
                    <meshStandardMaterial color="#FF4500" emissive="#FF4500" emissiveIntensity={2} />
                </mesh>
            </group>
        </group>
    );
}

export default function GlobeScene() {
    return (
        <div className="w-full h-[500px] lg:h-[700px] pointer-events-none">
            <Canvas dpr={[1, 2]}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} color="#FF4500" />
                <pointLight position={[-10, 10, -10]} intensity={0.5} color="#FFFFFF" />

                <WireGlobe />

                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
}
