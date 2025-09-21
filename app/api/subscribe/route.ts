import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { email } = await request.json().catch(() => ({ email: "" }))
  if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: "Invalid email." }, { status: 400 })
  }
  // Stub: simulate work and success
  await new Promise((r) => setTimeout(r, 600))
  console.log("[subscribe]", email)
  return NextResponse.json({ message: "We'll email you when Kansyl is ready." })
}