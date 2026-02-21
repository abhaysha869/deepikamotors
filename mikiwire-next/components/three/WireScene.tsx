"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, PerspectiveCamera, Float } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Cable() {
    const meshRef = useRef<THREE.Mesh>(null);

    // Generate a curve for the cable
    const curve = useMemo(() => {
        const points = [];
        for (let i = 0; i < 50; i++) {
            const t = i / 50;
            const x = Math.sin(t * Math.PI * 2) * 2;
            const y = (t - 0.5) * 15;
            const z = Math.cos(t * Math.PI * 2) * 2;
            points.push(new THREE.Vector3(x, y, z));
        }
        return new THREE.CatmullRomCurve3(points);
    }, []);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.002;

            const { mouse } = state;
            meshRef.current.rotation.x = THREE.MathUtils.lerp(
                meshRef.current.rotation.x,
                mouse.y * 0.15,
                0.05
            );
            meshRef.current.rotation.y = THREE.MathUtils.lerp(
                meshRef.current.rotation.y,
                (mouse.x * 0.15) + (state.clock.elapsedTime * 0.1),
                0.05
            );
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <mesh ref={meshRef} rotation={[0, 0, Math.PI / 4]}>
                <tubeGeometry args={[curve, 128, 0.8, 16, false]} />
                <meshStandardMaterial
                    color="#D4AF37"
                    roughness={0.15}
                    metalness={0.9}
                    envMapIntensity={1.5}
                />
            </mesh>
        </Float>
    );
}

export default function WireScene() {
    return (
        <div className="w-full h-full">
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />

                <ambientLight intensity={0.2} color="#0F172A" />
                <spotLight position={[5, 10, 5]} angle={0.2} penumbra={1} intensity={150} color="#F8FAFC" castShadow />
                <pointLight position={[-5, -5, -5]} intensity={80} color="#E85D04" />
                <pointLight position={[0, 0, 5]} intensity={30} color="#D4AF37" />

                <Cable />

                <Environment preset="studio" />
            </Canvas>
        </div>
    );
}
