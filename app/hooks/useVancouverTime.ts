import { useEffect, useState } from "react";

export function useVancouverTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();

      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "America/Vancouver",
      };

      const vancouverTime = now.toLocaleTimeString("en-US", options);
      setTime(vancouverTime);
    };

    update();
    const interval = setInterval(update, 1000); // 매 초마다 업데이트

    return () => clearInterval(interval);
  }, []);

  return time;
}
