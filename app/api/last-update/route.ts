import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://api.github.com/repos/Sulnklm/sulnklm.com/commits?per_page=1",
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
      cache: "no-store",
    }
  );
  const data = await res.json();
  if (!Array.isArray(data) || !data[0]) {
    return NextResponse.json({ date: null }, { status: 500 });
  }
  const date = data[0].commit.author.date;
  return new NextResponse(
    JSON.stringify({ date }),
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        "Content-Type": "application/json",
      },
    }
  );
}
