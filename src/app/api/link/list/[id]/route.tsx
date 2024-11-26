import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

import clientPromise from "../../../../../lib/mongodb";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (id) {
      const client = await clientPromise;
      const db = client.db("linkle");
      const collection = db.collection("userdata");
      const userId = id;

      const userData = await collection.find({ userId: userId }).toArray();
      const data = userData.length > 0 ? userData[0].data : [];
      return NextResponse.json(
        { message: "Success to get blocks", data },
        { status: 200 },
      );
    }
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Failed to authenticate", error: errorMessage },
      { status: 500 },
    );
  }
}
