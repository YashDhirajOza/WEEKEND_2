import { useFrame, useThree } from "@react-three/fiber";

import useCustomControls from "./useCustomControls";
function useCameraControl() {
  const camera = useThree((context) => context.camera);
  const controls = useCustomControls();

  useFrame(() => {
    if (controls.camera.manual) {
      camera.position.set(
        controls.camera.position.x,
        controls.camera.position.y,
        controls.camera.position.z
      );
      camera.rotation.set(
        controls.camera.rotation.x,
        controls.camera.rotation.y,
        controls.camera.rotation.z
      );
    }
  });
}

export default useCameraControl;
