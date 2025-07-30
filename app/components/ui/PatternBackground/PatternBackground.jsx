const PatternBackground = () => {
    return (
      <div
        style={{
          backgroundImage: "repeating-linear-gradient(315deg, var(--pattern-fg) 0, var(--pattern-fg) 1px, transparent 0, transparent 50%)",
          backgroundSize: "6px 6px",
          backgroundAttachment: "fixed",
          pointerEvents: "none",
          userSelect: "none",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      />
    );
  };
  
  export default PatternBackground;
  