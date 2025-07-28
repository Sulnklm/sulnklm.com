// CornerBoxes.tsx

interface CornerBoxProps {
    position: string;
  }
  
  const CornerBox = ({ position }: CornerBoxProps) => (
    <div className={`absolute ${position}`}>
      <div className="w-3 h-3 border rounded-[4px] border-gray-200 bg-white dark:bg-primary" />
    </div>
  );
  
  const CORNERS = [
    { position: "left-0 top-0 -translate-x-1/2 -translate-y-1/2" },
    { position: "left-0 bottom-1.5 -translate-x-1/2 translate-y-1/2" },
    { position: "right-0 top-0 translate-x-1/2 -translate-y-1/2" },
    { position: "right-0 bottom-1.5 translate-x-1/2 translate-y-1/2" },
  ];
  
    export function CornerBoxes({ height = 800 }: { height?: number }) {
    return (
      <div className="hidden md:block z-[1000]">
      {CORNERS.map((corner, idx) => (
        <CornerBox key={idx} position={corner.position} />
      ))}
      </div>
    );
  }
  