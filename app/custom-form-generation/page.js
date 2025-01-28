"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Eye, Download, RefreshCw } from "lucide-react"

export default function CustomFormGenerationPage() {
  const [uploadedFile, setUploadedFile] = useState(null)
  const [generatedCode, setGeneratedCode] = useState("")
  const [promptInstruction, setPromptInstruction] = useState("")

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file && ["image/png", "image/jpeg", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type)) {
      setUploadedFile(file)
    } else {
      alert("Please upload a valid file (PNG, JPEG, PDF, DOC, DOCX).")
    }
  }

  const handleGenerateCode = () => {
    // Implement code generation logic here
    console.log("Generating code...")
  }

  const handleRegenerateCode = () => {
    // Implement code regeneration logic here
    console.log("Regenerating code...")
  }

  const handleDownload = () => {
    // Implement download functionality here
    console.log("Downloading generated code...")
  }

  const handlePreview = () => {
    // Implement preview functionality here
    console.log("Previewing generated code...")
  }

  return (
    <div className="container mx-auto px-28 py-16">
      <h1 className="text-3xl font-bold text-primary mb-6">Custom Form Generation</h1>
      <Card className="fancy-glass fancy-shadow p-6">
        <CardContent className="space-y-4">
          <Label htmlFor="file-upload">Upload File (PNG, JPEG, PDF, DOC, DOCX)</Label>
          <Input
            id="file-upload"
            type="file"
            accept=".png,.jpeg,.jpg,.pdf,.doc,.docx"
            onChange={handleFileChange}
            className="fancy-border"
          />
          <Button onClick={handleGenerateCode} className="fancy-button">
            Generate Code
          </Button>
        </CardContent>
      </Card>

      <div className="mt-8 space-y-6">
        <Card className="fancy-glass fancy-shadow p-6">
          <CardHeader>
            <CardTitle>Generated Code</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={generatedCode}
              onChange={(e) => setGeneratedCode(e.target.value)}
              placeholder="Generated code will appear here"
              rows={6}
              className="fancy-border"
            />
          </CardContent>
        </Card>

        <Card className="fancy-glass fancy-shadow p-6">
          <CardHeader>
            <CardTitle>Prompt/Instruction</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={promptInstruction}
              onChange={(e) => setPromptInstruction(e.target.value)}
              placeholder="Provide prompts or instructions here"
              rows={4}
              className="fancy-border"
            />
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 flex space-x-4">
        <Button onClick={handleRegenerateCode} className="fancy-button">
          <RefreshCw className="mr-2 h-4 w-4" /> Regenerate
        </Button>
        <Button onClick={handleDownload} className="fancy-button">
          <Download className="mr-2 h-4 w-4" /> Download
        </Button>
        <Button onClick={handlePreview} variant="outline" className="fancy-border">
          <Eye className="mr-2 h-4 w-4" /> Preview
        </Button>
      </div>
    </div>
  )
}
