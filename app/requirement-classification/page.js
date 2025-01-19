'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

export default function RequirementsClassificationPage() {
  const [output, setOutput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setOutput('Generated requirements classification...')
  }

  return (
    <div className="container mx-auto px-28 py-12">
      <Link href="/projects/1">
        <Button variant="outline" className="mb-4 fancy-border">
          ← Back to Project
        </Button>
      </Link>
      <h1 className="text-3xl font-bold text-primary mb-6">Requirements Classification</h1>
      
      <Card className="fancy-glass fancy-shadow">
        <CardHeader>
          <CardTitle>Generate Requirements Classification</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="instructions">Output</Label>
              <Textarea 
                id="instructions" 
                placeholder="Output will be displayed here"
                className="fancy-border"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="instructions">Want to tune the current content? Type your thoughts and regenerate.</Label>
              <Textarea 
                id="instructions" 
                placeholder="Enter instructions for text generation"
                className="fancy-border"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="inputFile">Input File for Content Generation</Label>
              <Input 
                id="inputFile" 
                type="file" 
                className="fancy-border"
                required
              />
            </div>
            <Button type="submit" className="fancy-button">Generate</Button>
          </form>
        </CardContent>
      </Card>

      {output && (
        <Card className="mt-8 fancy-glass fancy-shadow">
          <CardHeader>
            <CardTitle>Generated Output</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{output}</code>
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

