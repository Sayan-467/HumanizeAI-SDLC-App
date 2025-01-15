import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function AddSectionModal({ isOpen, onClose, onAdd }) {
  const [title, setTitle] = useState('')
  const [fields, setFields] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newSection = {
      id: Date.now().toString(),
      title,
      fields: fields.split(',').map(field => field.trim())
    }
    onAdd(newSection)
    setTitle('')
    setFields('')
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] fancy-glass fancy-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center fancy-gradient bg-clip-text text-transparent fancy-text-glow">
            Add New Section
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="title">Section Name</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter section name"
              required
              className="fancy-border"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fields">Fields (comma-separated)</Label>
            <Textarea
              id="fields"
              value={fields}
              onChange={(e) => setFields(e.target.value)}
              placeholder="Enter fields (e.g., Heading, Content, File upload)"
              required
              className="fancy-border"
            />
          </div>
          <Button type="submit" className="w-full fancy-button">
            Add Section
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
