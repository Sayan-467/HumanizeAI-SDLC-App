import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload } from 'lucide-react'

export function BRDSection({ section }) {
  return (
    <div className="space-y-4">
      {section.fields.map((field, index) => (
        <div key={index} className="mb-4">
          <Label htmlFor={`${section.id}-${field}`} className="mb-2 block text-sm font-medium text-gray-700">{field}</Label>
          {field.toLowerCase().includes('content') || field.toLowerCase().includes('instructions') ? (
            <Textarea 
              id={`${section.id}-${field}`} 
              placeholder={`Enter ${field}`}
              className="w-full min-h-[100px] p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ) : field.toLowerCase().includes('file') ? (
            <div className="relative">
              <Input 
                id={`${section.id}-${field}`} 
                type="file" 
                className="sr-only"
              />
              <label
                htmlFor={`${section.id}-${field}`}
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105"
              >
                <Upload className="w-5 h-5 mr-2" />
                Upload File
              </label>
            </div>
          ) : (
            <Input 
              id={`${section.id}-${field}`} 
              placeholder={`Enter ${field}`}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          )}
        </div>
      ))}
    </div>
  )
}

