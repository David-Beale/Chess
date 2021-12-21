export default function Lighting() {
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight
        intensity={1.5}
        position={[0, 40, 0]}
        castShadow
        shadow-mapSize-width={1500}
        shadow-mapSize-height={1500}
      />
      <directionalLight intensity={0.5} position={[0, 50, 50]} />
    </>
  );
}
