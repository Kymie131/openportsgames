import { NextResponse } from "next/server";
import { getPorts, hardware, testRecordsValidated } from "@/lib/ports";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json({
    version: 1,
    exportedAt: new Date().toISOString().slice(0, 10),
    ports: getPorts(),
    hardware,
    tests: testRecordsValidated,
  });
}