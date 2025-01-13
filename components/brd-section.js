'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Upload } from 'lucide-react'

export function BRDSection({ id, onRemove }) {
  const [inputType, setInputType] = useState('manual')
  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  return (
    <Card className="bg-secondary/50 backdrop-blur-sm border-accent/20">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-primary">Section {id}</CardTitle>
        <div className="flex items-center space-x-2">
          <Select onValueChange={(value) => setInputType(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select input type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="manual">Manual Input</SelectItem>
              <SelectItem value="file">File Upload</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="ghost" size="icon" onClick={onRemove}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {inputType === 'manual' ? (
          <div className="space-y-4">
            <div>
              <Label htmlFor={`heading-${id}`}>Heading</Label>
              <Input id={`heading-${id}`} placeholder="Enter heading" className="bg-background/50 text-primary" />
            </div>
            <div>
              <Label htmlFor={`company-url-${id}`}>Company URL</Label>
              <Input id={`company-url-${id}`} placeholder="Enter company URL" className="bg-background/50 text-primary" />
            </div>
            <div>
              <Label htmlFor={`content-${id}`}>Content</Label>
              <Textarea id={`content-${id}`} placeholder="Enter content" className="bg-background/50 text-primary" />
            </div>
            <div>
              <Label htmlFor={`instructions-${id}`}>Instructions for Generation</Label>
              <Textarea id={`instructions-${id}`} placeholder="Enter instructions" className="bg-background/50 text-primary" />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <Label htmlFor={`file-upload-${id}`}>Upload File (.docx, .pdf, .xlsx)</Label>
            <div className="flex items-center space-x-2">
              <Input
                id={`file-upload-${id}`}
                type="file"
                accept=".docx,.pdf,.xlsx"
                onChange={handleFileChange}
                className="bg-background/50 text-primary"
              />
              <Button variant="secondary" size="icon">
                <Upload className="h-4 w-4" />
              </Button>
            </div>
            {file && (
              <p className="text-sm text-primary/70">Selected file: {file.name}</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
