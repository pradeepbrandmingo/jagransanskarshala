import { NextResponse } from "next/server";
import { initialGalleryData, galleryTabs } from "@/services/galleryService";

// Simple in-memory cache for API demo, sorted by createdAt desc (latest top)
let galleryMemoryDB = [...initialGalleryData].sort(
  (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
);

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const year = searchParams.get("year");

  let filtered = [...galleryMemoryDB];

  if (year && year !== "All" && year !== "all") {
    filtered = filtered.filter((item) => item.year === year);
  }

  // Ensure latest added images are always on top
  filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return NextResponse.json({
    success: true,
    tabs: galleryTabs,
    data: filtered,
    total: filtered.length,
  });
}

// POST endpoint for Admin / backend image push simulation
export async function POST(request) {
  try {
    const body = await request.json();
    const { title, url, year } = body;

    if (!url || !year) {
      return NextResponse.json(
        { success: false, message: "URL and Year are required." },
        { status: 400 }
      );
    }

    const newImage = {
      id: `img-${year}-${Date.now()}`,
      title: title || `Sanskarshala ${year}`,
      url: url,
      year: String(year),
      tabId: String(year),
      createdAt: new Date().toISOString(),
    };

    galleryMemoryDB.unshift(newImage); // Put at top (latest)

    return NextResponse.json({
      success: true,
      message: "Image added successfully",
      data: newImage,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
