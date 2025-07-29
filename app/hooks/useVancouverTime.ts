import { useEffect, useState } from "react";

export function useVancouverTime() {
  const [time, setTime] = useState({ str: "", hour: 0 });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "America/Vancouver",
      };
      const vancouverTime = now.toLocaleTimeString("en-US", options);

      const hourStr = now.toLocaleString("en-US", {
        hour: "2-digit",
        hour12: false,
        timeZone: "America/Vancouver",
      });
      const hourNum = Number(hourStr);

      setTime({ str: vancouverTime, hour: hourNum });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}