import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button"; // Assuming you're using a Button component
import Image from "next/image";

export function BRDSection({ section }) {
  const dummyText = "This is the current content for the " + section.title + " section."

  return (
    <div className="space-y-4">
      {/* Company URL Section */}
      {section.id === "about-client" && (
        <div className="mb-4 relative">
          <Label
            htmlFor={`${section.id}-company-url`}
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Company URL
          </Label>
          <div className="relative top-0">
            <Input
              id={`${section.id}-company-url`}
              placeholder="Enter company URL"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-16"
            />
            <Button
              className="absolute inset-y-0 right-0 m-1 px-3 py-1 text-sm font-medium bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-md shadow-md hover:from-green-500 hover:to-blue-600 focus:ring-2 focus:ring-blue-500"
              onClick={() => alert("Fetching data...")}
            >
              <Image src="/wired-outline-35-edit-hover-circle.svg" alt="edit" width={20} height={30} />
            </Button>
          </div>
        </div>
      )}

      {/* System Generated Content */}
      <div className="mb-4">
        <Label
          htmlFor={`${section.id}-system-content`}
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Current Content
        </Label>
        <Textarea
          id={`${section.id}-system-content`}
          value={dummyText}
          className="w-full min-h-[100px] p-2 border rounded-md bg-gray-100 text-gray-600"
          readOnly
        />
      </div>

      {/* User Input Section */}
      <div className="mb-4 relative">
        <Label
          htmlFor={`${section.id}-user-input`}
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Want to regenerate the content? Type your thoughts below.
        </Label>
        <div className="relative">
          <Textarea
            id={`${section.id}-user-input`}
            placeholder="Type your thoughts and regenerate."
            className="w-full min-h-[100px] p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-16" // Space for button
          />
          <Button
            className="absolute bottom-2 right-2 px-3 py-1 text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-md shadow-md hover:from-purple-500 hover:to-pink-600 focus:ring-2 focus:ring-pink-500"
            onClick={() => alert("Fetching data for textarea...")}
          >
            Regenerate
          </Button>
        </div>
      </div>
    </div>
  );
}
