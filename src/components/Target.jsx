import { useGLTF } from '@react-three/drei';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');

  useEffect(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  return (
    <mesh
      {...props}
      ref={targetRef}
      rotation={[0, Math.PI / 5, 0]}
      position={props.position || [-3, 0.5, -1]}
      scale={1.3}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
