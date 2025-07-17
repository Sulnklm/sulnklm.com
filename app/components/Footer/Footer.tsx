import React from "react";
import { ShootingStars } from "./ShootingStars/ShootingStars";
import { StarsBackground } from "./StarsBackground/StarsBackground";
import { FOOTER_CONST } from "./const";
import { PointerHighlight } from "../PointerHighlight/PointerHighlight";
type Props = {};

const Footer = (props: Props): JSX.Element => {
  return (
    <footer className="pt-10">
      <div className="relative z-[100] w-full h-[60vh] sm:h-[80vh] lg:h-[90vh] pt-20 lg:pt-24 bg-primary dark:bg-black overflow-hidden">
        <StarsBackground />
        <ShootingStars />
        <div className="grid justify-center -translate-x-2">
          <div className="grid justify-center items-sate gap-1">
            <h2 className="text-white/70 dark:text-white/70 md:text-4xl text-start font-PerfectlyNineties tracking-normal">{FOOTER_CONST.HEADING1}</h2>
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
          <div className="relative w-full h-[60vw] min-h-[400px] max-h-[800px] flex justify-center items-center scale-125 lg:scale-100">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full !border-grey_scale_900 dark:border-grey_scale_800 border border-dashed"
              style={{
                WebkitMaskImage:
                  "radial-gradient(circle, white 95%, transparent 100%)",
              }}
            />
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full !border-grey_scale_900 dark:border-grey_scale_800 border border-dashed"
              style={{
                WebkitMaskImage:
                  "radial-gradient(circle, white 95%, transparent 100%)",
              }}
            />
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] rounded-full border !border-grey_scale_900 dark:border-grey_scale_800 border-dashed"
              style={{
                WebkitMaskImage:
                  "radial-gradient(circle, white 95%, transparent 100%)",
              }}
            />
          </div>
        </div>
        <div className="absolute right-0 left-0 bottom-0 bg-primary/5 backdrop-blur-3xl py-2">
          <p className="text-sm text-center !text-grey_scale_800">
            {FOOTER_CONST.COPYRIGHT1}
          </p>
        </div>

        {/* 예시로 행성(이미지 자리) */}
        <div className="absolute left-[15%] top-[35%] z-10">
          {/* <img src="your-planet1.png" /> */}
          {/* <div className="w-12 h-12 bg-orange-400 rounded-full shadow-xl blur-xl" /> */}
        </div>
        {/* ...다른 행성들도 absolute로 배치 */}
      </div>
    </footer>
  );
};

export default Footer;
