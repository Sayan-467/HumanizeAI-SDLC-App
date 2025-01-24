"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Eye, Save, XCircle, PlusCircle } from "lucide-react"
import { AddSectionModal } from "@/components/add-section-modal"

export default function BRDGenerationPage() {
  const [aboutClient, setAboutClient] = useState({ heading: "", url: "", instructions: "", content: "" })
  const [isAddSectionModalOpen, setIsAddSectionModalOpen] = useState(false)
  const [customSections, setCustomSections] = useState([])

  const handleAboutClientChange = (field, value) => {
    setAboutClient((prev) => ({ ...prev, [field]: value }))
  }

  const generateAboutClient = () => {
    // Implement AI-based content generation here
    console.log("Generating About Client content...")
  }

  const saveAboutClient = () => {
    // Implement save functionality here
    console.log("Saving About Client content...")
  }

  const clearAboutClient = () => {
    setAboutClient({ heading: "", url: "", instructions: "", content: "" })
  }

  const previewAboutClient = () => {
    // Implement preview functionality here
    console.log("Previewing About Client content...")
  }

  const addCustomSection = (newSection) => {
    setCustomSections([...customSections, newSection])
    setIsAddSectionModalOpen(false)
  }

  const downloadBRD = () => {
    console.log("Downloading BRD...")
  }

  return (
    <div className="container mx-auto px-28 py-16">
      <Link href="/projects/1">
        <Button variant="outline" className="mb-4 fancy-border">
          ← Back to Project
        </Button>
      </Link>
      <h1 className="text-3xl font-bold text-primary mb-6">BRD Generation</h1>

      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="cover-page" className="fancy-glass fancy-shadow">
          <AccordionTrigger className="px-4 py-2">Cover Page</AccordionTrigger>
          <AccordionContent className="px-4 py-2">
            <p>Cover Page content will be generated from project details.</p>
            <Button className="mt-2 fancy-button" onClick={() => console.log("Preview Cover Page")}>
              <Eye className="mr-2 h-4 w-4" /> Preview
            </Button>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="version-history" className="fancy-glass fancy-shadow">
          <AccordionTrigger className="px-4 py-2">Version History</AccordionTrigger>
          <AccordionContent className="px-4 py-2">
            <p>Version History will be generated from project details.</p>
            <Button className="mt-2 fancy-button" onClick={() => console.log("Preview Version History")}>
              <Eye className="mr-2 h-4 w-4" /> Preview
            </Button>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="about-client" className="fancy-glass fancy-shadow">
          <AccordionTrigger className="px-4 py-2">About The Client</AccordionTrigger>
          <AccordionContent className="px-4 py-2">
            <div className="space-y-4">
              <div>
                <Label htmlFor="about-client-heading">Heading/Title</Label>
                <Input
                  id="about-client-heading"
                  value={aboutClient.heading}
                  onChange={(e) => handleAboutClientChange("heading", e.target.value)}
                  placeholder="Enter heading or title"
                  className="fancy-border"
                />
              </div>
              <div>
                <Label htmlFor="about-client-url">Company URL</Label>
                <Input
                  id="about-client-url"
                  value={aboutClient.url}
                  onChange={(e) => handleAboutClientChange("url", e.target.value)}
                  placeholder="Enter company website URL"
                  className="fancy-border"
                />
              </div>
              <div>
                <Label htmlFor="about-client-instructions">Instructions/Prompts</Label>
                <Textarea
                  id="about-client-instructions"
                  value={aboutClient.instructions}
                  onChange={(e) => handleAboutClientChange("instructions", e.target.value)}
                  placeholder="Enter instructions for About us page generation"
                  className="fancy-border"
                />
              </div>
              <div>
                <Button onClick={generateAboutClient} className="fancy-button">
                  Generate
                </Button>
              </div>
              <div>
                <Label htmlFor="about-client-content">Generated Content</Label>
                <Textarea
                  id="about-client-content"
                  value={aboutClient.content}
                  onChange={(e) => handleAboutClientChange("content", e.target.value)}
                  placeholder="Generated content will appear here"
                  rows={6}
                  className="fancy-border"
                />
              </div>
              <div className="flex space-x-2">
                <Button onClick={saveAboutClient} className="fancy-button">
                  <Save className="mr-2 h-4 w-4" /> Save
                </Button>
                <Button onClick={clearAboutClient} variant="outline" className="fancy-border">
                  <XCircle className="mr-2 h-4 w-4" /> Clear All
                </Button>
                <Button onClick={previewAboutClient} variant="outline" className="fancy-border">
                  <Eye className="mr-2 h-4 w-4" /> Preview
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {customSections.map((section, index) => (
          <AccordionItem key={index} value={`custom-section-${index}`} className="fancy-glass fancy-shadow">
            <AccordionTrigger className="px-4 py-2">{section.title}</AccordionTrigger>
            <AccordionContent className="px-4 py-2">
              <div className="space-y-4">
                <div>
                  <Label htmlFor={`custom-section-${index}-content`}>Content</Label>
                  <Textarea
                    id={`custom-section-${index}-content`}
                    value={section.content}
                    onChange={(e) => {
                      const updatedSections = [...customSections]
                      updatedSections[index].content = e.target.value
                      setCustomSections(updatedSections)
                    }}
                    placeholder="Section content"
                    rows={6}
                    className="fancy-border"
                    required
                  />
                </div>
                <div className="flex space-x-2">
                  <Button onClick={() => console.log(`Generate content for ${section.title}`)} className="fancy-button">
                    Generate
                  </Button>
                  <Button onClick={() => console.log(`Save content for ${section.title}`)} className="fancy-button">
                    <Save className="mr-2 h-4 w-4" /> Save
                  </Button>
                  <Button
                    onClick={() => console.log(`Clear content for ${section.title}`)}
                    variant="outline"
                    className="fancy-border"
                  >
                    <XCircle className="mr-2 h-4 w-4" /> Clear
                  </Button>
                  <Button
                    onClick={() => console.log(`Preview content for ${section.title}`)}
                    variant="outline"
                    className="fancy-border"
                  >
                    <Eye className="mr-2 h-4 w-4" /> Preview
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="flex justify-start items-center my-6 gap-4">
        <Button onClick={() => setIsAddSectionModalOpen(true)} className="fancy-button">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Section
        </Button>
        
        <Button
          onClick={downloadBRD}
          className="fancy-button"
        >Generate BRD</Button>

        <Button
          onClick={() => console.log(`Preview content for ${section.title}`)}
          variant="outline"
          className="fancy-button"
        >
          <Eye className="mr-2 h-4 w-4" /> Preview BRD
        </Button>
      </div>

      <AddSectionModal
        isOpen={isAddSectionModalOpen}
        onClose={() => setIsAddSectionModalOpen(false)}
        onAdd={addCustomSection}
      />
    </div>
  )
}
