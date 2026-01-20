import { OrbitControls, Environment } from "@react-three/drei";
import { onPlayerJoin, insertCoin, isHost, myPlayer } from "playroomkit";
import Map from "./Map";
import {useEffect} from "react"


export const Experience = () => {

  useEffect(() => {}, []);

  
  return (
    <>
      <directionalLight
        intensity={0.3}
        castShadow={true}
        position={[25, 18, -25]}
        // Shadow settings
        shadow-camera-near={0}
        shadow-camera-far={90}
        shadow-camera-right={30}
        shadow-camera-left={-30}
        shadow-camera-top={25}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-bias={-0.0001}
      />
      <OrbitControls />
      <Environment preset="park" />
      <Map />
    </>
  );
};

export default Experience;
