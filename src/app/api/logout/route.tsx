import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({ message: "Logged out successfully" });

    try {
      response.cookies.set("token", "", {
        path: "/",
        maxAge: 0,
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });
    } catch (cookieError: unknown) {
      const errorMessage =
        cookieError instanceof Error ? cookieError.message : "Unknown error";
      return NextResponse.json(
        { message: "Failed to Delete data", error: errorMessage },
        { status: 500 },
      );
    }
    return response;
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Failed to fetch", error: errorMessage },
      { status: 500 },
    );
  }
}
