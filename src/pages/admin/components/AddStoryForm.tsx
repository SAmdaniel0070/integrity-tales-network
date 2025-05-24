import { useState } from 'react';
import { addStory } from '../../../lib/firestore';
import type { Story } from '../../../types/schema';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RichTextEditor from '@/components/RichTextEditor';
import StoryPreview from '@/components/StoryPreview';

interface AddStoryFormProps {
  categories: string[];
  onSuccess: () => Promise<void>;
}

export default function AddStoryForm({ categories, onSuccess }: AddStoryFormProps) {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('edit');
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    category: '',
    location: '',
    imageUrl: '',
    fullStory: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Add a confirmation step if needed
    const confirmSubmit = window.confirm('Are you sure you want to submit this story?');
    if (!confirmSubmit) return;
    
    if (!formData.title || !formData.category || !formData.excerpt) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      setLoading(true);
      const newStory: Story = {
        id: Date.now().toString(), // Simple ID generation
        slug: formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        ...formData
      };

      await addStory(newStory);
      await onSuccess();
      
      // Reset form
      setFormData({
        title: '',
        excerpt: '',
        category: '',
        location: '',
        imageUrl: '',
        fullStory: ''
      });
      
      toast.success('Story added successfully');
    } catch (error) {
      console.error('Error adding story:', error);
      toast.error('Failed to add story');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="edit">Edit</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="edit" className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Title <span className="text-red-500">*</span>
            </label>
            <Input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter story title"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Category <span className="text-red-500">*</span>
            </label>
            <Select 
              value={formData.category} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category} className="capitalize">
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Excerpt <span className="text-red-500">*</span>
            </label>
            <Textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              placeholder="Enter a brief excerpt"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <Input
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter story location"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <Input
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="Enter image URL"
              type="url"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Full Story</label>
            <RichTextEditor
              content={formData.fullStory}
              onChange={(content) => setFormData(prev => ({ ...prev, fullStory: content }))}
            />
          </div>
        </TabsContent>

        <TabsContent value="preview">
          <StoryPreview story={formData} />
        </TabsContent>
      </Tabs>

      <div className="mt-6">
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? 'Adding Story...' : 'Add Story'}
        </Button>
      </div>
    </form>
  );
}