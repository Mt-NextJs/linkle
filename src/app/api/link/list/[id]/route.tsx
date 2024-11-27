import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

import clientPromise from "../../../../../lib/mongodb";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const id = params.id;
    if (!id) {
      return NextResponse.json(
        { message: "ID parameter is required" },
        { status: 400 },
      );
    }
    const client = await clientPromise;
    const db = client.db("linkle");
    const collection = db.collection("userdata");
    const userData = await collection.find({ userId: id }).toArray();
    const data = userData.length > 0 ? userData[0].data : [];
    return NextResponse.json(
      { message: "Success to get blocks", data },
      { status: 200 },
    );
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Failed to authenticate", error: errorMessage },
      { status: 500 },
    );
  }
}
