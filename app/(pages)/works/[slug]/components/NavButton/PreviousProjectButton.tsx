import React from "react";
import Link from "next/link";
import { NAV_BUTTON_CONST } from "./const";

export function PreviousProjectButton({ href, disabled }: { href?: string; disabled?: boolean }) {
  if (disabled || !href) {
    return (
      <p className="px-4 py-2 !font-[450] rounded-xl border opacity-70 dark:bg-primary bg-gray-50 select-none cursor-not-allowed">
        {NAV_BUTTON_CONST.PREVIOUS_PROJECT.LABEL}
      </p>
    );
  }
  return (
    <Link
      href={href}
      className="px-4 !font-[450] py-2 rounded-xl border !text-grey_scale_900 dark:!text-background bg-white dark:bg-primary hover:bg-grey_scale_100 hover:text-grey_scale_900 dark:hover:text-grey_scale_700 hover:shadow-none dark:hover:bg-grey_scale_1000/70 transition shadow-br"
    >
      {NAV_BUTTON_CONST.PREVIOUS_PROJECT.LABEL}
    </Link>
  );
}
