import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { NextApiRequest } from "next";

import clientPromise from "../../../../lib/mongodb";

export async function GET(request: NextApiRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("linkle");
    const collection = db.collection("userdata");

    const { limit, offset } = request.query;
    const limitNumber = parseInt(limit as string) || 10;
    const offsetNumber = parseInt(offset as string) || 0;

    const users = await collection
      .find({})
      .project({ password: 0, _id: 0, dateCreate: 0, data: 0, calendar: 0 })
      .skip(offsetNumber)
      .limit(limitNumber)
      .toArray();
    return NextResponse.json({ message: "success", users }, { status: 200 });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Failed to find data", error: errorMessage },
      { status: 500 },
    );
  }
}
