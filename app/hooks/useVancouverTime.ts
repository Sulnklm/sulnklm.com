import { useEffect, useState } from "react";

export function useVancouverTime() {
  const [time, setTime] = useState({ str: "", hour: 0 });

  useEffect(() => {
    const update = () => {
      const now = new Date();

      const vancouverTime12 = now.toLocaleTimeString("en-US", {
        hour: "numeric",     
        minute: "2-digit",
        second: "2-digit",
        hour12: true,           
        timeZone: "America/Vancouver",
      });

      const hourStr24 = now.toLocaleString("en-US", {
        hour: "2-digit",
        hour12: false,
        timeZone: "America/Vancouver",
      });
      const hourNum = Number(hourStr24);

      setTime({ str: vancouverTime12, hour: hourNum });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}
