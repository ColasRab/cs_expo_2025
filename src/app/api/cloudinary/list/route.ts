import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const folder = searchParams.get("folder");

    console.log("📁 Requested folder:", folder);
    console.log("🔑 Cloudinary config:", {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      hasKey: !!process.env.CLOUDINARY_API_KEY,
      hasSecret: !!process.env.CLOUDINARY_API_SECRET,
    });

    const res = await cloudinary.search
      .expression(`folder="${folder}"`)
      .sort_by("public_id", "desc")
      .max_results(200)
      .execute();

    return NextResponse.json(res.resources);
  } catch (err: any) {
    console.error("❌ Cloudinary API Error:", err);
    return NextResponse.json(
      { error: err.message || "Unknown error" },
      { status: 500 }
    );
  }
}
