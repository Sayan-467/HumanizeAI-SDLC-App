'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { PlusCircle } from 'lucide-react'
import { BRDSection } from '@/components/brd-section'

export default function BRDGenerationPage() {
  const [sections, setSections] = useState([{ id: 1, type: 'manual' }])

  const addNewSection = () => {
    setSections([...sections, { id: Date.now(), type: 'manual' }])
  }

  const removeSection = (id) => {
    setSections(sections.filter(section => section.id !== id))
  }

  return (
    <div className="container mx-auto px-14 py-12">
      <h1 className="text-3xl font-bold text-primary mb-6">BRD Generation</h1>
      <div className="space-y-6">
        {sections.map((section) => (
          <BRDSection 
            key={section.id} 
            id={section.id} 
            onRemove={() => removeSection(section.id)} 
          />
        ))}
      </div>
      <Button 
        onClick={addNewSection} 
        className="mt-6 bg-accent hover:bg-accent/80 text-accent-foreground"
      >
        <PlusCircle className="mr-2 h-4 w-4" /> Add New Section
      </Button>
    </div>
  )
}
