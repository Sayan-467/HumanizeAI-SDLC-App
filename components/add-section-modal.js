import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function AddSectionModal({ isOpen, onClose, onAdd }) {
  const [title, setTitle] = useState("")
  const [instructions, setInstructions] = useState("")
  const [selectedFiles, setSelectedFiles] = useState([])
  const [generatedContent, setGeneratedContent] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const newSection = {
      title,
      instructions,
      selectedFiles,
      content: generatedContent,
    }
    onAdd(newSection)
    resetForm()
  }

  const resetForm = () => {
    setTitle("")
    setInstructions("")
    setSelectedFiles([])
    setGeneratedContent("")
  }

  const generateContent = () => {
    // Implement AI-based content generation here
    console.log("Generating content...")
    setGeneratedContent("This is some generated content based on your instructions and selected files.")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] fancy-glass fancy-border bg-gradient-to-br from-white to-blue-50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Section
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="title">Heading/Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter section title"
              className="fancy-border"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="instructions">Instructions/Prompts</Label>
            <Textarea
              id="instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Enter instructions for content generation"
              required
              className="fancy-border"
            />
          </div>
          <div>
            <Button type="button" onClick={generateContent} className="fancy-button">
              Generate
            </Button>
          </div>
          {/* <div className="space-y-2">
            <Label htmlFor="file-reference">File Reference</Label>
            <Input
              id="file-reference"
              type="file"
              multiple
              onChange={(e) => setSelectedFiles(Array.from(e.target.files))}
              className="fancy-border"
            />
          </div> */}
          <div className="space-y-2">
            <Label htmlFor="generated-content">Generated Content</Label>
            <Textarea
              id="generated-content"
              value={generatedContent}
              onChange={(e) => setGeneratedContent(e.target.value)}
              placeholder="Generated content will appear here"
              rows={4}
              className="fancy-border"
            />
          </div>
          <div className="flex space-x-2">
            <Button type="submit" className="fancy-button">
              Save
            </Button>
            <Button type="button" onClick={resetForm} variant="outline" className="fancy-border">
              Clear All
            </Button>
            <Button
              type="button"
              onClick={() => console.log("Preview content")}
              variant="outline"
              className="fancy-border"
            >
              Preview
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

