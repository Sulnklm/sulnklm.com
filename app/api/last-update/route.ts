// /app/api/last-update/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://api.github.com/repos/Sulnklm/sulnklm.com/commits?per_page=1",
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28", 
      },
      
    }
  );
  const data = await res.json();
  if (!Array.isArray(data) || !data[0]) {
    return NextResponse.json({ date: null }, { status: 500 });
  }
  const date = data[0].commit.author.date;
  return NextResponse.json({ date });
}
