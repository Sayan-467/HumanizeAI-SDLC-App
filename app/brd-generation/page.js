'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PlusCircle } from 'lucide-react';
import { BRDSection } from '@/components/brd-section';
import { AddSectionModal } from '@/components/add-section-modal';

const initialSections = [
  {
    id: 'about-client',
    title: 'About the Client',
    fields: ['Company URL', 'Content', 'Instructions for text generation', 'File upload'],
  },
  {
    id: 'objective',
    title: 'Objective of the document',
    fields: ['Content', 'Instructions for text generation', 'File upload'],
  },
  {
    id: 'org-structure',
    title: 'Organization structure',
    fields: [
      'Content',
      'Instructions for text generation',
      'File upload for text generation',
      'Files to be embedded',
    ],
  },
];

export default function BRDGenerationPage() {
  const [sections, setSections] = useState(initialSections);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const addNewSection = (newSection) => {
    setSections([...sections, newSection]);
    setIsAddModalOpen(false);
  };

  return (
    <div className="container mx-auto px-28 py-16">
      <h1 className="text-3xl font-bold text-primary mb-6">BRD Generation</h1>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {sections.map((section) => (
          <AccordionItem key={section.id} value={section.id} className="border rounded-lg overflow-hidden fancy-glass">
            <AccordionTrigger className="px-4 py-2 hover:no-underline hover:bg-gray-100">
              <h3 className="text-lg font-semibold">{section.title}</h3>
            </AccordionTrigger>
            <AccordionContent>
              <Card className="m-4 fancy-glass">
                <CardContent className="p-4">
                  <BRDSection section={section} />
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Button onClick={() => setIsAddModalOpen(true)} className="mt-6 fancy-button">
        <PlusCircle className="mr-2 h-4 w-4" /> Add New Section
      </Button>
      <AddSectionModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={addNewSection}
      />
    </div>
  );
}
