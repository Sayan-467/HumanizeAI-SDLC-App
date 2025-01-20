import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Eye, Save, XCircle, PlusCircle } from "lucide-react"
import { AddSectionModal } from "./add-section-modal"

export function BRDGeneration() {
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

  return (
    <Card className="fancy-glass fancy-shadow">
      <CardHeader>
        <CardTitle>BRD Generation</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="cover-page">
            <AccordionTrigger>Cover Page</AccordionTrigger>
            <AccordionContent>
              <p>Cover Page content will be generated from project details.</p>
              <Button className="mt-2" onClick={() => console.log("Preview Cover Page")}>
                <Eye className="mr-2 h-4 w-4" /> Preview
              </Button>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="version-history">
            <AccordionTrigger>Version History</AccordionTrigger>
            <AccordionContent>
              <p>Version History will be generated from project details.</p>
              <Button className="mt-2" onClick={() => console.log("Preview Version History")}>
                <Eye className="mr-2 h-4 w-4" /> Preview
              </Button>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="about-client">
            <AccordionTrigger>About The Client</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="about-client-heading">Heading/Title</Label>
                  <Input
                    id="about-client-heading"
                    value={aboutClient.heading}
                    onChange={(e) => handleAboutClientChange("heading", e.target.value)}
                    placeholder="Enter heading or title"
                  />
                </div>
                <div>
                  <Label htmlFor="about-client-url">Company URL</Label>
                  <Input
                    id="about-client-url"
                    value={aboutClient.url}
                    onChange={(e) => handleAboutClientChange("url", e.target.value)}
                    placeholder="Enter company website URL"
                  />
                </div>
                <div>
                  <Label htmlFor="about-client-instructions">Instructions/Prompts</Label>
                  <Textarea
                    id="about-client-instructions"
                    value={aboutClient.instructions}
                    onChange={(e) => handleAboutClientChange("instructions", e.target.value)}
                    placeholder="Enter instructions for content generation"
                  />
                </div>
                <div>
                  <Label htmlFor="about-client-content">Generated Content</Label>
                  <Textarea
                    id="about-client-content"
                    value={aboutClient.content}
                    onChange={(e) => handleAboutClientChange("content", e.target.value)}
                    placeholder="Generated content will appear here"
                    rows={6}
                  />
                </div>
                <div className="flex space-x-2">
                  <Button onClick={generateAboutClient}>Generate</Button>
                  <Button onClick={saveAboutClient}>
                    <Save className="mr-2 h-4 w-4" /> Save
                  </Button>
                  <Button onClick={clearAboutClient} variant="outline">
                    <XCircle className="mr-2 h-4 w-4" /> Clear All
                  </Button>
                  <Button onClick={previewAboutClient} variant="outline">
                    <Eye className="mr-2 h-4 w-4" /> Preview
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {customSections.map((section, index) => (
            <AccordionItem key={index} value={`custom-section-${index}`}>
              <AccordionTrigger>{section.title}</AccordionTrigger>
              <AccordionContent>{/* Custom section content */}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <Button onClick={() => setIsAddSectionModalOpen(true)} className="mt-4 fancy-button">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Section
        </Button>

        <AddSectionModal
          isOpen={isAddSectionModalOpen}
          onClose={() => setIsAddSectionModalOpen(false)}
          onAdd={addCustomSection}
        />
      </CardContent>
    </Card>
  )
}

