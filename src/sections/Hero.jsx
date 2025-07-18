import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";  // Make sure to import Suspense
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader"; 
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {
  const ismobile = useMediaQuery({maxWidth: 768});
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024});
  const isSmall = useMediaQuery({ maxWidth: 480});

  const sizes = calculateSizes(ismobile, isTablet, isSmall);

  return (
    <section className="min-h-screen border-2 border-black-500 w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I'm Ayesha <span className="magic-icon">🪄</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Projects</p>
        <div className="w-full h-full absolute inset-0">
   
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader/>}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
          <HeroCamera ismobile={ismobile}>
          <HackerRoom
              position={sizes.deskPosition}
              rotation={[0, -Math.PI, 0.0]}
              scale={sizes.deskScale}
              />
          </HeroCamera>
               <group>
                 <Target position={sizes.targetPosition}/>
                 <ReactLogo position={sizes.reactLogoPosition}/>
                 <Cube position={sizes.cubePosition}/>
                 <Rings position={sizes.ringPosition}/>
               </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5}/>
            </Suspense>
          </Canvas>
        </div>
      </div>
     <div className="absolute bottom-7 left-0 right-0 w-full z-10  c-space">
       <a href="#contact" className="w-fit">
        <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
       </a>

     </div>

    </section>
  );
};

export default Hero;
