export async function getLastUpdatedDate() {
  const baseURL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const res = await fetch(`${baseURL}/api/last-updated`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("❌ Failed to fetch last updated date");
    return null;
  }

  const data = await res.json();
  const dateString = data?.date;

  if (!dateString) {
    console.error("❌ No date found in API response");
    return null;
  }

  return new Date(dateString);
}
