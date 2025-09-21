"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/sonner"

export function EmailCaptureForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (res.ok) {
        toast.success("You're on the list!", { description: data.message })
        setEmail("")
      } else {
        toast.error("Something went wrong", { description: data.message || "Please try again." })
      }
    } catch {
      toast.error("Network error", { description: "Please try again later." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md items-center gap-2" aria-label="Get notified">
      <Input
        type="email"
        name="email"
        required
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Email address"
      />
      <Button type="submit" disabled={loading} className="relative">
        <span className="[background:linear-gradient(90deg,rgba(255,255,255,.25),rgba(255,255,255,0)_20%,rgba(255,255,255,0)_80%,rgba(255,255,255,.25))] bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
          {loading ? "Submitting…" : "Get notified"}
        </span>
      </Button>
    </form>
  )
}