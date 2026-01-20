import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { Mesh } from "three"; 

const Map = () => {
  const map = useGLTF("/models/map.glb");

  useEffect(() => {
    map.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, []);

  return <primitive object={map.scene} position={[0, 0, 0]} />;
};

useGLTF.preload("/models/map.glb");

export default Map;
