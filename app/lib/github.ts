export async function getLastUpdatedDate(): Promise<Date | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/last-updated`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const { date } = await res.json();
  return date ? new Date(date) : null;
}
