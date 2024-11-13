import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { Collection } from "mongodb";

import clientPromise from "../../../../lib/mongodb";

interface JwtPayload {
  userId: string;
}
interface UserDocument {
  userId: string;
  data: Array<{ id: string }>;
}

interface ScheduleType {
  id?: number;
  title: string;
  url: string;
  dateStart: string;
  dateEnd: string;
}

interface NewData {
  id: number;
  type: number;
  sequence: number;
  url?: string;
  style?: number;
  title?: string;
  imgUrl?: string;
  subText01?: string;
  subText02?: string;
  dateStart?: string;
  dateEnd?: string;
  schedule?: ScheduleType[];
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
    const {
      id,
      type,
      sequence,
      url,
      style,
      title,
      imgUrl,
      subText01,
      subText02,
      dateStart,
      dateEnd,
      schedule,
    } = body;
    const client = await clientPromise;
    const db = client.db("linkle");
    const collection: Collection<UserDocument> = db.collection("userdata");

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string,
    ) as JwtPayload;
    const userId = decoded.userId;

    const newData: NewData = {
      id,
      type,
      sequence,
      url,
      style,
      title,
      imgUrl,
      subText01,
      subText02,
      dateStart,
      dateEnd,
      schedule,
    };

    const result = await collection.updateOne(
      { userId: userId, "data.id": id },
      {
        $set: {
          "data.$": newData,
        },
      },
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
