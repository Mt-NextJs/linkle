import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import type { NextRequest } from "next/server";
import type { MongoClient, Db, Collection } from "mongodb";

import clientPromise from "../../../lib/mongodb";

interface User {
  userId: string;
  password: string;
}

export async function POST(request: NextRequest) {
  try {
    const { userId, password }: { userId: string; password: string } =
      await request.json();
    const client: MongoClient = await clientPromise;
    const db: Db = client.db("linkle");
    const collection: Collection<User> = db.collection("userdata");

    const user: User | null = await collection.findOne({ userId });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    if (user.password === password) {
      const token = jwt.sign({ userId }, process.env.JWT_SECRET as string, {
        expiresIn: "1h",
      });

      const response = NextResponse.json(
        { message: "Login Successfully" },
        { status: 200 },
      );
      response.cookies.set("token", token, {
        httpOnly: true,
        secure: true,
        maxAge: 60 * 60,
        path: "/",
        sameSite: "none",
      });

      return response;
    } else {
      return NextResponse.json(
        { message: "Password invalid" },
        { status: 401 },
      );
    }
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Failed to find data", error: errorMessage },
      { status: 500 },
    );
  }
}
