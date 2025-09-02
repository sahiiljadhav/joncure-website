"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [topic, setTopic] = useState("General")
  const [message, setMessage] = useState("")

  const topicToEmail: Record<string, string> = {
    "Higher Studies": "contact@ioncurerx.com",
    "AI Research": "contact@ioncurerx.com",
    Partnerships: "contact@ioncurerx.com",
    Media: "contact@ioncurerx.com",
    "PhD Admissions Guidance": "phd@ioncurerx.com",
    "Masters Admissions Guidance": "masters@ioncurerx.com",
    "Bachelors Admissions Guidance": "bachelors@ioncurerx.com",
    "Jobs Guidance": "jobs@ioncurex.com",
    "Work with us / Volunteer": "volunteer@ioncurerx.com",
    General: "contact@ioncurerx.com",
  }

  const recipient = topicToEmail[topic] ?? "contact@ioncurerx.com"
  const mailto = `mailto:${recipient}?subject=${encodeURIComponent(`[${topic}] From ${name}`)}&body=${encodeURIComponent(message + "\n\nFrom: " + name + " <" + email + ">")}`

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        window.location.href = mailto
      }}
      className="grid gap-4 max-w-xl"
    >
      <p className="text-sm text-muted-foreground">
        Fill out the form and we’ll route your message to the right team. We typically respond within 2–3 business days.
      </p>
      <Input placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} required />
      <Input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Select value={topic} onValueChange={setTopic}>
        <SelectTrigger>
          <SelectValue placeholder="Select topic" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Higher Studies">Higher Studies</SelectItem>
          <SelectItem value="AI Research">AI Research</SelectItem>
          <SelectItem value="Partnerships">Partnerships</SelectItem>
          <SelectItem value="Media">Media</SelectItem>
          <SelectItem value="PhD Admissions Guidance">PhD Admissions Guidance</SelectItem>
          <SelectItem value="Masters Admissions Guidance">Masters Admissions Guidance</SelectItem>
          <SelectItem value="Bachelors Admissions Guidance">Bachelors Admissions Guidance</SelectItem>
          <SelectItem value="Jobs Guidance">Jobs Guidance</SelectItem>
          <SelectItem value="Work with us / Volunteer">Work with us / Volunteer</SelectItem>
          <SelectItem value="General">General</SelectItem>
        </SelectContent>
      </Select>
      <Textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={6}
        required
      />
      <Button type="submit">
        Send Message
      </Button>
    </form>
  )
}
