import { NextResponse } from "next/server";
import { sanityClient, sanityConfigured } from "@/lib/sanity/client";
import { sanityInternalApiKey } from "@/lib/sanity/config";
import { sanityWriteClient } from "@/lib/sanity/write-client";
import { blogListQuery } from "@/lib/sanity/queries";

export async function GET() {
  if (!sanityConfigured || !sanityClient) {
    return NextResponse.json(
      { error: "Sanity read client is not configured." },
      { status: 503 },
    );
  }

  const posts = await sanityClient.fetch(blogListQuery, {}, { cache: "no-store" });
  return NextResponse.json({ posts });
}

export async function POST(request: Request) {
  if (!sanityWriteClient) {
    return NextResponse.json(
      { error: "Sanity write client is not configured." },
      { status: 503 },
    );
  }

  const providedKey = request.headers.get("x-admin-api-key") ?? "";
  if (!sanityInternalApiKey || providedKey !== sanityInternalApiKey) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const title = String(body?.title ?? "").trim();
  const slug = String(body?.slug ?? "").trim();
  const excerpt = String(body?.excerpt ?? "").trim();

  if (!title || !slug) {
    return NextResponse.json(
      { error: "title and slug are required." },
      { status: 400 },
    );
  }

  const created = await sanityWriteClient.create({
    _type: "post",
    title,
    slug: { _type: "slug", current: slug },
    excerpt: excerpt || undefined,
    publishedAt: new Date().toISOString(),
  });

  return NextResponse.json({ id: created._id }, { status: 201 });
}

