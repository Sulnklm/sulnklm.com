export async function getLastUpdatedDate() {
  const res = await fetch(
    "https://api.github.com/repos/Sulnklm/sulnklm.com/commits?per_page=1",
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, // optional
        Accept: "application/vnd.github+json",
      },
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    console.error("❌ Failed to fetch from GitHub API");
    return null;
  }

  const data = await res.json();
  const dateString = data?.[0]?.commit?.committer?.date;

  if (!dateString) {
    console.error("❌ No commit date found");
    return null;
  }

  return new Date(dateString);
}
