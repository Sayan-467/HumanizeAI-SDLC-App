'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from 'next/link';

export default function CustomReportGenerationPage() {
  const [reports, setReports] = useState([]);
  const [generatedCode, setGeneratedCode] = useState('');
  const [abapCode, setAbapCode] = useState('');

  const handleNewReport = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newReport = {
      name: formData.get('reportName'),
      requirement: (formData.get('requirement')?.name) || '',
      instructions: formData.get('instructions'),
    };
    setReports([...reports, newReport]);
    generateABAPCode(newReport);
    e.target.reset();
  };

  const generateABAPCode = (report) => {
    const code = `REPORT ${report.name.toUpperCase().replace(/\s/g, '_')}.

* Generated based on: ${report.requirement}
* Instructions: ${report.instructions}

DATA: lt_data TYPE TABLE OF ty_data,
      ls_data TYPE ty_data.

* Fetch data
SELECT * FROM your_table INTO TABLE @lt_data.

* Process data
LOOP AT lt_data INTO ls_data.
  * Your custom logic here
ENDLOOP.

* Output report
cl_salv_table=>factory(
  IMPORTING
    r_salv_table = DATA(lo_alv)
  CHANGING
    t_table      = lt_data
).

lo_alv->display( ).`;

    setAbapCode(code);
  };

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
                  <Label htmlFor="instructions">Additional Instructions (Optional)</Label>
                  <Textarea id="instructions" name="instructions" placeholder="Enter instructions" required className="fancy-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="parameters">Selection Parameters</Label>
                  <Textarea id="parameters" name="parameters" placeholder="Enter selection paramaters" required className="fancy-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="output">Output Fields</Label>
                  <Textarea id="output" name="output" placeholder="Output fields will be shown here" required className="fancy-border" />
                </div>
                <Button type="submit" className="fancy-button">ABAP Code Generation</Button>
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
                      <Button onClick={() => generateABAPCode(report)} className="mt-2 fancy-button">Generate ABAP Code</Button>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {abapCode && (
        <Card className="mt-8 fancy-glass fancy-shadow">
          <CardHeader>
            <CardTitle>Generated ABAP Code</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{abapCode}</code>
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
