import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();

    // DB logic here
    console.log("Saving user:", { name, email });

    return NextResponse.json(
      { success: true, message: `✅ User ${name} saved successfully`, color: "green" },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: "❌ Failed to save user", color: "red" },
      { status: 500 }
    );
  }
}
