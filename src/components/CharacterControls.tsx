import { useRef, useState } from "react";
import { OperatorCharacter } from "./OperatorCharacter";
import { Joystick } from "playroomkit";
import { Group } from "three";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";

interface CharacterControlsProps {
  state: any;
  joystick: Joystick;
  userPlayer: boolean;
  [key: string]: any;
}

const CharacterControls = ({
  state,
  joystick,
  userPlayer,
  ...props
}: CharacterControlsProps) => {
  const group = useRef<Group>(null);
  const character = useRef<Group>(null);
  const [animation, setAnimation] = useState<string>("Idle");

  return (
    <group ref={group} {...props}>
      <RigidBody colliders={false}>
        {" "}
        <group ref={character}>
          <OperatorCharacter
            color={state.state.profile?.color}
            animation={animation}
          />
        </group>
        <CapsuleCollider args={[0.7, 0.6]} position={[0, 1.28, 0]}/>
      </RigidBody>
    </group>
  );
};

export default CharacterControls;
