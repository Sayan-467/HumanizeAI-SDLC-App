'use client'

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusCircle, X, Download } from "lucide-react";
import { BRDSection } from "@/components/brd-section";
import { AddSectionModal } from "@/components/add-section-modal";

const initialSections = [
  {
    id: 'about-client',
    title: 'About the Client',
    fields: ['Company URL', 'Current Content', 'Want to tune the Current Content? Type your thoughts and regenerate.'],
  },
  {
    id: 'objective',
    title: 'Objective of the document',
    fields: ['Current Content', 'Want to tune the Current Content? Type your thoughts and regenerate.'],
  },
  {
    id: 'scope',
    title: 'Scope of the document',
    fields: ['Current Content', 'Want to tune the Current Content? Type your thoughts and regenerate.'],
  },
  {
    id: 'material',
    title: 'Introduction to the SAP module',
    fields: ['Current Content', 'Want to tune the Current Content? Type your thoughts and regenerate.'],
  },
  {
    id: 'area',
    title: 'Business Areas',
    fields: ['Current Content', 'Want to tune the Current Content? Type your thoughts and regenerate.'],
  },
  {
    id: 'org-structure',
    title: 'Organization Structure',
    fields: ['Current Content', 'Want to tune the Current Content? Type your thoughts and regenerate.'],
  },
  {
    id: 'kds',
    title: 'Key Document Structure',
    fields: ['Current Content', 'Want to tune the Current Content? Type your thoughts and regenerate.'],
  },
  {
    id: 'process',
    title: 'Process Scope',
    fields: ['Current Content', 'Want to tune the Current Content? Type your thoughts and regenerate.'],
  },
  {
    id: 'process-flow',
    title: 'Relevant process flows',
    fields: ['Current Content', 'Want to tune the Current Content? Type your thoughts and regenerate.'],
  },
  {
    id: 'data',
    title: 'Master Data',
    fields: ['Current Content', 'Want to tune the Current Content? Type your thoughts and regenerate.'],
  },
  {
    id: 'soln',
    title: 'Solution Data',
    fields: ['Current Content', 'Want to tune the Current Content? Type your thoughts and regenerate.'],
  },
  {
    id: 'forms',
    title: 'Reports and Forms',
    fields: ['Current Content', 'Want to tune the Current Content? Type your thoughts and regenerate.'],
  },
];

export default function BRDGenerationPage() {
  const [sections, setSections] = useState(initialSections);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const addNewSection = (newSection) => {
    setSections([...sections, newSection]);
    setIsAddModalOpen(false);
  };

  const removeSection = (id) => {
    setSections(sections.filter((section) => section.id !== id));
  };

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
      <div className="flex flex-col pb-6">
        <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-primary mb-6">BRD Generation</h1>
        <Button 
          onClick={downloadBRD} 
          className="fancy-button"
        >
          <Download className="mr-2 h-4 w-4" /> Download BRD
        </Button>
        </div>
        <span>We have populated below sections. Please review and fine tune as needed. Once done, click &apos;Generate BRD now!&apos; to get your BRD document. While we have used the standard BRD sections, you can add/remove sections as applicable.</span>
      </div>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {sections.map((section) => (
          <AccordionItem
            key={section.id}
            value={section.id}
            className="border rounded-lg overflow-hidden fancy-glass"
          >
            <AccordionTrigger className="flex items-center justify-between px-4 py-2 hover:no-underline hover:bg-gray-100 gap-4">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  removeSection(section.id);
                }}
                className="text-red-600 hover:text-red-800 cursor-pointer transition duration-200 ml-auto"
                aria-label="Remove Section"
              >
                <X className="w-5 h-5" />
              </span>
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
      <div className="flex flex-col w-[30%]">
        <Button className="mt-8 fancy-button">Generate BRD now!</Button>
        <Button
          onClick={() => setIsAddModalOpen(true)}
          className="mt-6 fancy-button"
        >
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Section
        </Button>
      </div>
      <AddSectionModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={addNewSection}
      />
    </div>
  );
}
