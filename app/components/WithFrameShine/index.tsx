import { useEffect } from "react";
import type { ComponentType, ComponentProps } from "react";

export function withFrameShine<T extends {}>(
  Component: ComponentType<T>
): ComponentType<T> {
  return (props: T) => {
    useEffect(() => {
      const style = document.createElement("style");
      style.innerHTML = `
  @keyframes maskShine {
    0% { -webkit-mask-position: 200%; mask-position: 200%; }
    100% { -webkit-mask-position: -100%; mask-position: -100%; }
  }
  .maskShine {
    -webkit-mask-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.5) 30%,
      rgba(255, 255, 255, 1.5) 50%,
      rgba(255, 255, 255, 0.5) 70%
    );
    mask-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.5) 30%,
      rgba(255, 255, 255, 1.5) 50%,
      rgba(255, 255, 255, 0.5) 70%
    );
    -webkit-mask-size: 150% auto;
    mask-size: 150% auto;
    animation: maskShine 3s ease-in-out infinite;
  }
`;

      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }, []);

    const { className, ...rest } = props as T & { className?: string };
    const combinedClassName = [className, "maskShine"]
      .filter(Boolean)
      .join(" ");

    return <Component {...(rest as T)} className={combinedClassName} />;
  };
}
