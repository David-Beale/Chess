export default function Board({ board, boardRef }) {
  return (
    <group
      ref={boardRef}
      rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      scale={[100, 100, 100]}
    >
      <mesh
        receiveShadow
        geometry={board.geometry1}
        material={board.material1}
      />
      <mesh
        receiveShadow
        geometry={board.geometry2}
        material={board.material2}
      />
    </group>
  );
}
