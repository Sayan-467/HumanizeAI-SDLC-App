'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import Link from 'next/link'

export default function CustomReportGenerationPage() {
  const [reportData, setReportData] = useState(null)

  const handleManualSubmit = (e) => {
    e.preventDefault()
    generateReport()
  }

  const handleFileUpload = (e) => {
    generateReport()
  }

  const generateReport = () => {
    const sampleData = [
      { sno: 1, poNo: 'PO001', poDate: '2023-06-01', itemCode: 'IC001', itemName: 'Item 1', uom: 'EA', quantity: 100, unitRate: 10, amount: 1000, date: '2023-06-05', location: 'Warehouse A', branchName: 'Branch 1' },
      { sno: 2, poNo: 'PO002', poDate: '2023-06-02', itemCode: 'IC002', itemName: 'Item 2', uom: 'KG', quantity: 50, unitRate: 20, amount: 1000, date: '2023-06-06', location: 'Warehouse B', branchName: 'Branch 2' },
      { sno: 3, poNo: 'PO003', poDate: '2023-06-03', itemCode: 'IC003', itemName: 'Item 3', uom: 'L', quantity: 200, unitRate: 5, amount: 1000, date: '2023-06-07', location: 'Warehouse C', branchName: 'Branch 3' },
    ]
    setReportData(sampleData)
  }

  return (
    <div className="container mx-auto px-28 py-8">
      <Link href="/projects/1">
        <Button variant="outline" className="mb-4">
          ← Back to Project
        </Button>
      </Link>
      <h1 className="text-4xl font-bold text-primary mb-6">Custom Report Generation</h1>
      <Tabs defaultValue="manual" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 bg-secondary/50">
          <TabsTrigger value="manual" className="data-[state=active]:bg-primary/20">Manual Input</TabsTrigger>
          <TabsTrigger value="file" className="data-[state=active]:bg-primary/20">File Upload</TabsTrigger>
        </TabsList>
        <TabsContent value="manual">
          <Card className="glass-effect border-primary/20">
            <CardHeader>
              <CardTitle>Manual Input</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleManualSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="reportName">Report Name</Label>
                  <Input id="reportName" placeholder="Enter report name" className="bg-secondary/50 border-primary/20 focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="purpose">Purpose of the report</Label>
                  <Textarea id="purpose" placeholder="Describe the purpose of the report" className="bg-secondary/50 border-primary/20 focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <Label>Selection Parameters</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="From Date" type="date" className="bg-secondary/50 border-primary/20 focus:border-primary" />
                    <Input placeholder="To Date" type="date" className="bg-secondary/50 border-primary/20 focus:border-primary" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="materialWise" />
                  <Label htmlFor="materialWise">Material wise</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="vendorSelection" />
                  <Label htmlFor="vendorSelection">Vendor selection</Label>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="poNo">PO No</Label>
                  <Input id="poNo" placeholder="Enter PO number" className="bg-secondary/50 border-primary/20 focus:border-primary" />
                </div>
                <Button type="submit" className="bg-accent hover:bg-accent/80 text-accent-foreground">
                  Generate Report
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="file">
          <Card className="glass-effect border-primary/20">
            <CardHeader>
              <CardTitle>File Upload</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input 
                  type="file" 
                  onChange={handleFileUpload}
                  className="bg-secondary/50 border-primary/20 focus:border-primary"
                />
                <Button onClick={generateReport} className="bg-accent hover:bg-accent/80 text-accent-foreground">
                  Generate Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {reportData && (
        <Card className="mt-8 glass-effect border-primary/20">
          <CardHeader>
            <CardTitle>Report Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-primary">
                <thead className="text-xs uppercase bg-secondary/50">
                  <tr>
                    {Object.keys(reportData[0]).map((key) => (
                      <th key={key} className="px-6 py-3">{key}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {reportData.map((row, index) => (
                    <tr key={index} className="border-b border-secondary/50">
                      {Object.values(row).map((value, cellIndex) => (
                        <td key={cellIndex} className="px-6 py-4">{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

