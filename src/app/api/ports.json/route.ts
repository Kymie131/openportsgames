import { NextResponse } from "next/server";
import { buildCatalogJson } from "@/lib/ports/api-json";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json(buildCatalogJson(absoluteUrl("/")));
}
