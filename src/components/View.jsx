import { OrbitControls } from "@react-three/drei";
import {Office} from "./Office.jsx";

export const View = () => {
  return (
    <>
      <OrbitControls />
        <ambientLight intensity={4} />
      <Office />
    </>
  );
};
