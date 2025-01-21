import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function AddDocumentModal({ isOpen, onClose, onAdd, tabName }) {
  const [name, setName] = useState("")
  const [tag, setTag] = useState("")
  const [inputFile, setInputFile] = useState(null)
  const [notes, setNotes] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newDocument = {
      id: Date.now().toString(),
      name,
      tag,
      inputFile,
      notes,
      tabName,
    }
    onAdd(newDocument)
    setName("")
    setTag("")
    setInputFile(null)
    setNotes(null)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] fancy-glass fancy-border bg-gradient-to-br from-white to-blue-50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Document
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700">
              Name (Descriptive)
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter document name"
              required
              className="fancy-border transition-all duration-200 hover:shadow-md"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tag" className="text-gray-700">
              Tag/Label (Unique)
            </Label>
            <Input
              id="tag"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              placeholder="Enter unique tag"
              required
              className="fancy-border transition-all duration-200 hover:shadow-md"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="inputFile" className="text-gray-700">
              Input File (xlsx, word, pdf)
            </Label>
            <Input
              id="inputFile"
              type="file"
              accept=".xlsx,.docx,.pdf"
              onChange={(e) => setInputFile(e.target.files[0])}
              required
              className="fancy-border transition-all duration-200 hover:shadow-md"
            />
            <p className="text-xs text-gray-500">Max file size: 10MB</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes" className="text-gray-700">
              Notes (txt, word)
            </Label>
            <Input
              id="notes"
              type="file"
              accept=".txt,.docx"
              onChange={(e) => setNotes(e.target.files[0])}
              className="fancy-border transition-all duration-200 hover:shadow-md"
            />
          </div>
          <Button
            type="submit"
            className="w-full fancy-button bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
          >
            Add Document
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

