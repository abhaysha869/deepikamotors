"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, PerspectiveCamera, Float, ContactShadows } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function IndustrialCable() {
    const meshRef = useRef<THREE.Mesh>(null);

    // Generate a curve for the cable
    const curve = useMemo(() => {
        const points = [];
        for (let i = 0; i < 50; i++) {
            const t = i / 50;
            const x = Math.sin(t * Math.PI * 2) * 1.5;
            const y = (t - 0.5) * 20;
            const z = Math.cos(t * Math.PI * 2) * 1.5;
            points.push(new THREE.Vector3(x, y, z));
        }
        return new THREE.CatmullRomCurve3(points);
    }, []);

    useFrame((state) => {
        if (meshRef.current) {
            // Slow cinematic rotation
            meshRef.current.rotation.y += 0.003;
            meshRef.current.rotation.z += 0.001;

            // Subtle parallax effect on mouse move
            const { mouse } = state;
            meshRef.current.rotation.x = THREE.MathUtils.lerp(
                meshRef.current.rotation.x,
                mouse.y * 0.1,
                0.02
            );
            meshRef.current.rotation.y = THREE.MathUtils.lerp(
                meshRef.current.rotation.y,
                (mouse.x * 0.1) + (state.clock.elapsedTime * 0.1),
                0.02
            );
        }
    });

    return (
        <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef} rotation={[0, 0, Math.PI / 6]}>
                {/* Thick Heavy Cable Core */}
                <tubeGeometry args={[curve, 128, 1.2, 32, false]} />
                <meshStandardMaterial
                    color="#1A1A1A" // Dark Steel
                    roughness={0.2}
                    metalness={1} // Highly Metallic
                />
            </mesh>

            {/* A second slightly offset cable mimicking a strand twist */}
            <mesh scale={0.95} rotation={[0, 0, Math.PI / 4]}>
                <tubeGeometry args={[curve, 128, 1.2, 32, false]} />
                <meshStandardMaterial
                    color="#202020"
                    roughness={0.3}
                    metalness={0.9}
                />
            </mesh>
        </Float>
    );
}

export default function HeroWireScene() {
    return (
        <div className="w-full h-full">
            <Canvas dpr={[1, 2]}>
                {/* Closer and dramatic perspective */}
                <PerspectiveCamera makeDefault position={[0, -2, 10]} fov={55} />

                {/* Harsh Spotlight */}
                <spotLight
                    position={[8, 15, 8]}
                    angle={0.2}
                    penumbra={0.1}
                    intensity={200}
                    color="#FFFFFF"
                    castShadow
                />

                {/* Very faint fill light to keep blacks rich */}
                <pointLight position={[-10, -10, -10]} intensity={15} color="#4A5568" />

                {/* Molten Accent reflection underneath */}
                <pointLight position={[0, -8, 5]} intensity={100} color="#FF4500" />
                <ambientLight intensity={0.05} color="#000000" />

                <IndustrialCable />

                {/* Dense, sharp environment reflection map */}
                <Environment preset="night" />
                <ContactShadows position={[0, -5, 0]} opacity={0.6} scale={20} blur={2} far={10} />
            </Canvas>
        </div>
    );
}
