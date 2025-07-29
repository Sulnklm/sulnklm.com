interface CornerBoxProps {
  position: string;
}

const CornerBox = ({ position }: CornerBoxProps) => (
  <div className={`absolute ${position}`}>
    <div className="w-[9px] h-[9px] border rounded-[2.5px] border-gray-200 bg-white dark:bg-primary" />
  </div>
);

const BASE_CORNERS = [
  { position: "left-0 top-0 -translate-x-1/2 -translate-y-1/2" },
  { position: "left-0 bottom-1 -translate-x-1/2 translate-y-1/2" },
  { position: "right-0 top-0 translate-x-1/2 -translate-y-1/2" },
  { position: "right-0 bottom-1 translate-x-1/2 translate-y-1/2" },
];

// overrideBottom prop: { [index]: 'bottom-0' }
export function CornerBoxes({
  height = 800,
  overrideBottom,
}: {
  height?: number;
  overrideBottom?: { [index: number]: string };
}) {
  return (
    <div className="hidden md:block z-[1000]">
      {BASE_CORNERS.map((corner, idx) => {
        const position = overrideBottom && overrideBottom[idx]
          ? corner.position.replace(/bottom-\S+/, overrideBottom[idx])
          : corner.position;
        return <CornerBox key={idx} position={position} />;
      })}
    </div>
  );
}
