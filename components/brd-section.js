import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export function BRDSection({ section }) {
  return (
    <div className="space-y-4">
      {section.fields.map((field, index) => (
        <div key={index} className="mb-4">
          <Label htmlFor={`${section.id}-${field}`} className="mb-2 block text-sm font-medium text-gray-700">
            {field}
          </Label>
          {field.toLowerCase().includes('content') || field.toLowerCase().includes('instructions') ? (
            <Textarea
              id={`${section.id}-${field}`}
              placeholder={`Enter ${field}`}
              className="w-full min-h-[100px] p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ) : field.toLowerCase().includes('file') ? (
            <Input
              id={`${section.id}-${field}`}
              type="file"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ) : (
            <Input
              id={`${section.id}-${field}`}
              placeholder={`Enter ${field}`}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          )}
        </div>
      ))}
      <Button className="w-full fancy-button">Generate</Button>
    </div>
  );
}
