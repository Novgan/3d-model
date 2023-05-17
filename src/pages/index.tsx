import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Model from "@/components/Model/Model";

export default function Home() {
    return (
        <Canvas
            camera={{ position: [2, 0, 12.25], fov: 15 }}
            style={{
                backgroundColor: "#111a21",
                width: "100vw",
                height: "100vh",
            }}
        >
            <ambientLight intensity={1} />
            <spotLight intensity={2.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
            <spotLight intensity={2.5} angle={0.1} penumbra={1} position={[10, 15, -10]} castShadow />
            <Suspense fallback={null}>
                <Model position={[0.025, -0.9, 0]} />
            </Suspense>
            <OrbitControls />
        </Canvas>
    );
}
