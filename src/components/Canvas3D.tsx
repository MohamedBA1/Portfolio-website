import HairlineLaptop from './HairlineLaptop';

/**
 * Replaced Three.js canvas with @lucasmarkes/hairline interactive Laptop
 */
const Canvas3D = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-0 pointer-events-auto flex items-center justify-center">
      <HairlineLaptop intensity={0.9} play={true} />
    </div>
  );
};

export default Canvas3D;
