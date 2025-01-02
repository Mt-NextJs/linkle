import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

import clientPromise from "../../../../lib/mongodb";

interface JwtPayload {
  userId: string;
}

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json(
        { message: "Cookie not found" },
        { status: 401 },
      );
    }
    const { userId } = await request.json();
    const client = await clientPromise;
    const db = client.db("linkle");
    const collection = db.collection("userdata");
    const result = await collection.deleteOne({ userId: userId });
    if (result.deletedCount > 0) {
      return NextResponse.json(
        { message: "User data deleted successfully" },
        { status: 200 },
      );
    } else {
      return NextResponse.json(
        { message: "No document matched the userId" },
        { status: 404 },
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
