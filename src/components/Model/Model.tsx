import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

useGLTF.preload("./Girl_Cut.glb");

const Model = ({ position }: { position: [x: number, y: number, z: number] }) => {
    const { nodes, materials } = useGLTF("./Girl_Cut.glb") as any;
    // const { nodes, materials } = useGLTF(
    //     "https://d1a370nemizbjq.cloudfront.net/f8e25565-9091-474b-aed9-67625f51855a.glb"
    // ) as any;

    return (
        <group dispose={null} position={position}>
            <primitive object={nodes.Extract2} />
            <primitive object={nodes.FemaleBody_FeetsStraight1} />
            <primitive object={nodes.UMesh_Merged_slim_female_basemesh6} />
            <primitive object={nodes.HighpolyGirl} />
            <primitive object={nodes.LP} />
            <primitive object={nodes.LP1} />
            <primitive object={nodes.LP1_2} />
            <primitive object={nodes.LP1_3} />
            <primitive object={nodes.Merged_slim_female_basemesh3} />
            <primitive object={nodes.Merged_slim_female_basemesh3_6} />
            <primitive object={nodes.PM3D_Cylinder3D1_2} />
            <primitive object={nodes.PM3D_Cylinder3D1_3} />
            <primitive object={nodes.Scene} />
            <primitive object={nodes.cloth} />
        </group>
    );
};

export default Model;
