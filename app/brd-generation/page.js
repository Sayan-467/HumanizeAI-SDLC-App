'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PlusCircle } from 'lucide-react'

const sectionTypes = [
  { 
    id: 'about-client', 
    title: 'About the Client',
    fields: ['Heading', 'Company URL', 'Content', 'Instructions for text generation', 'File upload']
  },
  { 
    id: 'objective', 
    title: 'Objective of the document',
    fields: ['Heading', 'Content', 'Instructions for text generation', 'File upload']
  },
  { 
    id: 'org-structure', 
    title: 'Organization structure',
    fields: ['Heading', 'Content', 'Instructions for text generation', 'File upload for text generation', 'Files to be embedded']
  }
]

function BRDSection({ type }) {
  const sectionData = sectionTypes.find(s => s.id === type)

  return (
    <AccordionItem value={type}>
      <AccordionTrigger>{sectionData.title}</AccordionTrigger>
      <AccordionContent>
        <Card className="mb-6 fancy-glass fancy-shadow">
          <CardContent className="pt-6">
            {sectionData.fields.map((field, index) => (
              <div key={index} className="mb-4">
                <Label htmlFor={`${type}-${field}`} className="mb-2 block">{field}</Label>
                {field.toLowerCase().includes('content') || field.toLowerCase().includes('instructions') ? (
                  <Textarea 
                    id={`${type}-${field}`} 
                    placeholder={`Enter ${field}`}
                    className="fancy-border"
                  />
                ) : field.toLowerCase().includes('file') ? (
                  <Input 
                    id={`${type}-${field}`} 
                    type="file" 
                    className="fancy-border"
                  />
                ) : (
                  <Input 
                    id={`${type}-${field}`} 
                    placeholder={`Enter ${field}`}
                    className="fancy-border"
                  />
                )}
              </div>
            ))}
            <Button className="mt-4 fancy-button">Generate</Button>
          </CardContent>
        </Card>
      </AccordionContent>
    </AccordionItem>
  )
}

export default function BRDGenerationPage() {
  const [sections, setSections] = useState(['about-client', 'objective', 'org-structure'])

  const addNewSection = () => {
    setSections([...sections, sections[sections.length - 1]])
  }

  return (
    <div className="container mx-auto px-28 py-16">
      <h1 className="text-3xl font-bold text-primary mb-6">BRD Generation</h1>
      <Accordion type="single" collapsible className="w-full">
        {sections.map((section, index) => (
          <BRDSection key={index} type={section} />
        ))}
      </Accordion>
      <Button 
        onClick={addNewSection} 
        className="mt-6 fancy-button"
      >
        <PlusCircle className="mr-2 h-4 w-4" /> Add New Section
      </Button>
    </div>
  )
}

