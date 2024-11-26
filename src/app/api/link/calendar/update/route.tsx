import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

import clientPromise from "../../../../../lib/mongodb";

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

    const body = await request.json();
    const { id, schedule } = body;
    const client = await clientPromise;
    const db = client.db("linkle");
    const collection = db.collection("userdata");
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string,
    ) as JwtPayload;
    const userId = decoded.userId;

    const result = await collection.updateOne(
      { userId: userId, "calendar.id": id },
      { $set: { "calendar.$": body } },
    );
    return NextResponse.json(
      { message: "Data successfully updated", result },
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
