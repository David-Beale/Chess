export default function Lighting() {
  return (
    <>
      <ambientLight intensity={0.75} />
      <pointLight
        intensity={1.25}
        position={[0, 40, 0]}
        castShadow
        shadow-mapSize-width={1500}
        shadow-mapSize-height={1500}
      />
    </>
  );
}
