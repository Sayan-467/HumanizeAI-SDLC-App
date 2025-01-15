'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'

export default function CustomReportGenerationPage() {
  const [reports, setReports] = useState([])
  const [generatedCode, setGeneratedCode] = useState('')

  const handleNewReport = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const newReport = {
      name: formData.get('reportName'),
      requirement: formData.get('requirement').name,
      instructions: formData.get('instructions')
    }
    setReports([...reports, newReport])
    e.target.reset()
  }

  const generateCode = (report) => {
    setGeneratedCode(`// ABAP Code for ${report.name}\n\n// This is a placeholder for the generated ABAP code\n// based on the requirements and instructions provided.`)
  }

  const addNewReport = () => {
    setReports([...reports, { name: `New Report ${reports.length + 1}`, requirement: '', instructions: '' }])
  }

  return (
    <div className="container mx-auto px-28 py-16">
      <Link href="/projects/1">
        <Button variant="outline" className="mb-4 fancy-border">
          ← Back to Project
        </Button>
      </Link>
      <h1 className="text-3xl font-bold text-primary mb-6">Custom Report Generation</h1>

      <Tabs defaultValue="new" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 fancy-glass">
          <TabsTrigger value="new" className="fancy-border">New Report</TabsTrigger>
          <TabsTrigger value="existing" className="fancy-border">Existing Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="new">
          <Card className="fancy-glass fancy-shadow">
            <CardHeader>
              <CardTitle>Create New Report</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleNewReport} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="requirement">Upload Excel File</Label>
                  <Input id="requirement" name="requirement" type="file" required className="fancy-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reportName">Report Name</Label>
                  <Input id="reportName" name="reportName" placeholder="Enter report name" required className="fancy-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instructions">Instructions to Generate Code (Optional)</Label>
                  <Textarea id="instructions" name="instructions" placeholder="Enter instructions" required className="fancy-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instructions">Selection Parameters</Label>
                  <Textarea id="instructions" name="instructions" placeholder="Enter instructions" required className="fancy-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instructions">Report Fields</Label>
                  <Textarea id="instructions" name="instructions" placeholder="Enter instructions" required className="fancy-border" />
                </div>
                <Button type="submit" className="fancy-button">Create Report</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="existing">
          <Card className="fancy-glass fancy-shadow">
            <CardHeader>
              <CardTitle>Existing Reports</CardTitle>
            </CardHeader>
            <CardContent>
              {reports.length === 0 ? (
                <p>No reports created yet.</p>
              ) : (
                <ul className="space-y-4">
                  {reports.map((report, index) => (
                    <li key={index} className="fancy-border p-4 rounded-lg">
                      <h3 className="font-bold">{report.name}</h3>
                      <p>Requirement: {report.requirement}</p>
                      <Button onClick={() => generateCode(report)} className="mt-2 fancy-button">Generate ABAP Code</Button>
                    </li>
                  ))}
                </ul>
              )}
              <Button onClick={addNewReport} className="mt-4 fancy-button">Add New Report</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {generatedCode && (
        <Card className="mt-8 fancy-glass fancy-shadow">
          <CardHeader>
            <CardTitle>Generated ABAP Code</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{generatedCode}</code>
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

