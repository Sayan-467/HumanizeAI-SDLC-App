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
    <form onSubmit={handleSubmit} className="space-y-6 mt-8 max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-green-600">Sign Up</h2>
      <div className="space-y-4">
        <Label htmlFor="officialEmail" className="text-sm font-medium text-gray-700">Official Email Address</Label>
        <Input
          id="officialEmail"
          type="email"
          placeholder="Enter your official email"
          required
          className="fancy-border"
        />
      </div>
      <div className="space-y-4">
        <Label htmlFor="officeEmail" className="text-sm font-medium text-gray-700">Office Email</Label>
        <Input
          id="officeEmail"
          type="email"
          placeholder="Enter your office email"
          required
          className="fancy-border"
        />
      </div>
      <div className="space-y-4">
        <Label htmlFor="contact" className="text-sm font-medium text-gray-700">Official Contact</Label>
        <Input
          id="contact"
          type="tel"
          placeholder="Enter your official contact number"
          required
          className="fancy-border"
        />
      </div>
      <div className="space-y-4">
        <Label htmlFor="purpose" className="text-sm font-medium text-gray-700">State Purpose</Label>
        <Textarea
          id="purpose"
          placeholder="Briefly describe your purpose for signing up"
          required
          className="fancy-border"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white py-2 rounded-md hover:from-green-600 hover:to-green-800 transition-all"
        disabled={isLoading}
      >
        {isLoading ? 'Signing up...' : 'Sign Up'}
      </Button>
    </form>
  )
}
