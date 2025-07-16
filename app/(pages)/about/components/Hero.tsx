import { InsetBlock } from "@/components/InsetBlock";
import { InsetBlockInside } from "@/components/InsetBlockInside";
import React from "react";
import { ABOUT_CONST } from "../const";

export default function Hero() {
    return (
        <div className="relative z-50 mt-20 bg-white/30 dark:bg-primary container mx-auto rounded-[30px] border border-dashed py-20">
                {/* <h2>{ABOUT_CONST.HERO.HEADING1}</h2> */}
                <InsetBlockInside>
                    <div></div>
                </InsetBlockInside>

        </div>
    )
}