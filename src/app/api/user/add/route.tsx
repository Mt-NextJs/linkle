import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

import clientPromise from "../../../../lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const { name, userId, password, email } = await request.json();

    const client = await clientPromise;
    const db = client.db("linkle");
    const check = await db.collection("userdata").findOne({ userId: userId });
    if (!check) {
      await db.collection("userdata").insertOne({
        name,
        userId,
        password,
        email,
        dateCreate: new Date(),
        calender: [],
      });
      return NextResponse.json(
        { message: "Sign up successfully" },
        { status: 200 },
      );
    } else {
      return NextResponse.json(
        { message: "Name already exists" },
        { status: 409 },
      );
    }
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Failed to create data", error: errorMessage },
      { status: 500 },
    );
  }
}
