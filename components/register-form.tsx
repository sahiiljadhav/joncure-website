"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function RegisterForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [level, setLevel] = useState("Masters")
  const [field, setField] = useState("")
  const [notes, setNotes] = useState("")
  const mailto = `mailto:register@ioncurex.com?subject=${encodeURIComponent(`Registration - ${level}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nLevel: ${level}\nField: ${field}\nNotes: ${notes}`)}`

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        window.location.href = mailto
      }}
      className="grid gap-4 max-w-xl"
    >
      <div className="grid gap-2">
        <Label>Name</Label>
        <Input value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="grid gap-2">
        <Label>Email</Label>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="grid gap-2">
        <Label>Program Level</Label>
        <Select value={level} onValueChange={setLevel}>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Bachelors">Bachelors</SelectItem>
            <SelectItem value="Masters">Masters</SelectItem>
            <SelectItem value="PhD">PhD</SelectItem>
            <SelectItem value="PostDoc">Post-Doc</SelectItem>
            <SelectItem value="Jobs">Jobs</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label>Field / Interest</Label>
        <Input
          value={field}
          onChange={(e) => setField(e.target.value)}
          placeholder="AI, Drug Discovery, Engineering, etc."
          required
        />
      </div>
      <div className="grid gap-2">
        <Label>Notes</Label>
        <Textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={5}
          placeholder="Share goals or specific targets"
        />
      </div>
      <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white">
        Register
      </Button>
    </form>
  )
}
