import { useEffect, useState } from "react";

export function useLastUpdate() {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/last-update")
      .then((res) => res.json())
      .then((data) => setDate(data.date));
  }, []);

  return date ? new Date(date) : null;
}
