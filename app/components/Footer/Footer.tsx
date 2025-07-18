import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { ShootingStars } from "./ShootingStars/ShootingStars";
import { StarsBackground } from "./StarsBackground/StarsBackground";
import { FOOTER_CONST } from "./const";
import { PointerHighlight } from "../PointerHighlight/PointerHighlight";

const ORBIT_RADIUS = "35vw";

function getOrbitStyle(angleDeg: number, radius = ORBIT_RADIUS) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    position: "absolute" as const,
    left: `calc(50% + ${radius} * ${Math.cos(rad).toFixed(3)})`,
    top: `calc(50% - ${radius} * ${Math.sin(rad).toFixed(3)})`,
    transform: "translate(-50%, -50%)",
    zIndex: 101,
  };
}

// ▶️ 아이콘별 커스텀 스타일을 배열에서 지정
const SOCIALS = [
  {
    icon: <Github className="-rotate-[30deg] w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" strokeWidth={1.2} />,
    url: "https://github.com/your-github",
    label: "GitHub",
    angle: 120,
    className: "text-white/90 backdrop-blur-md rounded-full p-2 hover:text-orange-400 transition-all",
  },
  {
    icon: <Mail className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" strokeWidth={1.2} />,
    url: "mailto:your@email.com",
    label: "Email",
    angle: 90,
    className: "text-white/90 backdrop-blur-md rounded-full p-2 hover:text-orange-400 transition-all",
  },
  {
    icon: <Linkedin className="rotate-[30deg] w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" strokeWidth={1.2} />,
    url: "https://linkedin.com/in/your-linkedin",
    label: "LinkedIn",
    angle: 60,
    className: "text-white/90 backdrop-blur-md rounded-full p-2 hover:text-orange-400 transition-all",
  },

];

const Footer = () => {
  return (
    <footer>
      <div className="relative z-[600] w-full h-[60vh] sm:h-[85vh] lg:h-[90vh] pt-20 lg:pt-24 bg-primary dark:bg-black overflow-hidden">
        <StarsBackground />
        <ShootingStars />
        <div className="grid justify-center -translate-x-2">
          <div className="grid justify-center items-sate gap-1">
            <h2 className="text-white/90 dark:text-white/90 md:text-4xl text-start font-PerfectlyNineties tracking-normal">{FOOTER_CONST.HEADING1}</h2>
            <PointerHighlight
              rectangleClassName="!border-orange-200 bg-blue-700/10 dark:bg-blue-700/10"
              pointerClassName="text-orange-400"
            >
              <h2 className="text-white text-6xl md:text-7xl">{FOOTER_CONST.HEADING2}</h2>
            </PointerHighlight>
          </div>
        </div>
        <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 lg:-translate-y-72">
          {/* orbit */}
          <div className="relative w-full h-[60vw] min-h-[500px] max-h-[800px] flex justify-center items-center scale-125 lg:scale-100">
            {/* 바깥 원 */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full !border-grey_scale_900 dark:border-grey_scale_800 border border-dashed"
              style={{
                WebkitMaskImage: "radial-gradient(circle, white 95%, transparent 100%)",
              }}
            />
            {/* 아이콘 3개를 원 위에 배치 */}
            {SOCIALS.map((s, i) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={getOrbitStyle(s.angle)}
                className={s.className}
              >
                {s.icon}
              </a>
            ))}
            {/* 중간/안쪽 궤도선 */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full !border-grey_scale_900 dark:border-grey_scale_800 border border-dashed" style={{ WebkitMaskImage: "radial-gradient(circle, white 95%, transparent 100%)" }}/>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] rounded-full border !border-grey_scale_900 dark:border-grey_scale_800 border-dashed" style={{ WebkitMaskImage: "radial-gradient(circle, white 95%, transparent 100%)" }}/>
          </div>
        </div>
        <div className="absolute right-0 left-0 bottom-0 bg-primary/5 backdrop-blur-3xl py-5 md:py-4">
          <p className="text-xs sm:text-sm text-center !text-grey_scale_800 hidden md:block">{FOOTER_CONST.COPYRIGHT1_DESKTOP}</p>
          <p className="text-xs sm:text-sm text-center !text-grey_scale_800 block md:hidden">{FOOTER_CONST.COPYRIGHT1_MOBILE}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
