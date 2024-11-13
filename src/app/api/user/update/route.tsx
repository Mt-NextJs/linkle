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
    const { name, password, email } = await request.json();
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string,
    ) as JwtPayload;
    const baseUserId = decoded.userId;
    const client = await clientPromise;
    const db = client.db("linkle");
    const collection = db.collection("userdata");
    const result = await collection.updateOne(
      { userId: baseUserId },
      { $set: { name, password, email } },
    );
    if (result.modifiedCount > 0) {
      return NextResponse.json(
        { message: "User information updated successfully" },
        { status: 200 },
      );
    } else {
      return NextResponse.json(
        { message: "No document matched or nothing to update" },
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
