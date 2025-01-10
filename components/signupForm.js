'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function SignUpForm({ onSuccess }) {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // TODO: Implement actual signup logic here

    setIsLoading(false)
    onSuccess()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div className="space-y-2">
        <Label htmlFor="officialEmail">Official Email Address</Label>
        <Input
          id="officialEmail"
          type="email"
          placeholder="Enter your official email"
          required
          className="bg-background/50 text-primary placeholder:text-primary/50"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="officeEmail">Office Email</Label>
        <Input
          id="officeEmail"
          type="email"
          placeholder="Enter your office email"
          required
          className="bg-background/50 text-primary placeholder:text-primary/50"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact">Official Contact</Label>
        <Input
          id="contact"
          type="tel"
          placeholder="Enter your official contact number"
          required
          className="bg-background/50 text-primary placeholder:text-primary/50"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="purpose">State Purpose</Label>
        <Textarea
          id="purpose"
          placeholder="Briefly describe your purpose for signing up"
          required
          className="bg-background/50 text-primary placeholder:text-primary/50"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-accent hover:bg-accent/80 text-accent-foreground"
        disabled={isLoading}
      >
        {isLoading ? 'Signing up...' : 'Sign Up'}
      </Button>
    </form>
  )
}

