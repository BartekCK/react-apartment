import { Canvas } from "@react-three/fiber";
import { View } from "./components/View.jsx";

function App() {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#ffffff"]} />
      <View />
    </Canvas>
  );
}

export default App;
