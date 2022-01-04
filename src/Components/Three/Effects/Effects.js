import React, { useRef, useEffect, useState } from "react";
import { extend, useThree, useFrame } from "@react-three/fiber";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "./CustomBloom";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader";

extend({ EffectComposer, ShaderPass, RenderPass, UnrealBloomPass });

export default function Effects({ children }) {
  const composer = useRef();
  const { gl, size, camera } = useThree();
  const [scene, setScene] = useState();
  useEffect(
    () => void composer.current.setSize(size.width, size.height),
    [size]
  );
  useFrame(() => {
    if (!scene || !composer.current) return;
    composer.current.render();
  }, 1);

  const bloom = {
    strength: 1,
    radius: 1,
    threshold: 0.01,
  };
  return (
    <>
      <scene ref={setScene}>{children}</scene>
      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray="passes" scene={scene} camera={camera} />
        <unrealBloomPass
          attachArray="passes"
          args={[undefined, bloom.strength, bloom.radius, bloom.threshold]}
        />
        <shaderPass
          attachArray="passes"
          args={[FXAAShader]}
          material-uniforms-resolution-value={[1 / size.width, 1 / size.height]}
          renderToScreen
        />
      </effectComposer>
    </>
  );
}
