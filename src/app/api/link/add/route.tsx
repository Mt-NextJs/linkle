import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import clientPromise from "../../../../lib/mongodb";

interface JwtPayload {
  userId: string;
}

interface ScheduleType {
  id: number;
  title: string;
  url: string;
  dateStart: string;
  dateEnd: string;
}

interface NewData {
  id: number;
  type: number;
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

interface UserDocument {
  userId: string;
  data: NewData[];
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
    const client = await clientPromise;
    const db = client.db("linkle");
    const collection = db.collection<UserDocument>("userdata");
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string,
    ) as JwtPayload;
    const userId = decoded.userId;
    const userDocument = await collection.findOne({ userId });
    const newId = userDocument?.data?.length ?? 0;

    const body = await request.json();
    const {
      type,
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

    const newData: NewData = {
      id: newId,
      type,
      url,
      style,
      title,
      imgUrl,
      subText01,
      subText02,
      dateStart,
      dateEnd,
      schedule: schedule?.map((item: ScheduleType, index: number) => ({
        ...item,
        id: index,
      })),
    };

    const result = await collection.updateOne(
      { userId },
      { $push: { data: newData } },
      { upsert: true },
    );

    return NextResponse.json(
      { message: "Data successfully added", result },
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
