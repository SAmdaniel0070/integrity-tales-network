import { useState } from 'react';
import { deleteStory } from '../../../lib/firestore';
import type { Story } from '../../../types/schema';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import EditStoryDialog from './EditStoryDialog';

interface StoryListProps {
  stories: Story[];
  categories: string[];
  onUpdate: () => Promise<void>;
}

export default function StoryList({ stories, categories, onUpdate }: StoryListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [editingStory, setEditingStory] = useState<Story | null>(null);

  const filteredStories = stories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || story.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDelete = async (story: Story) => {
    if (window.confirm('Are you sure you want to delete this story?')) {
      try {
        await deleteStory(story.id, story.category);
        await onUpdate();
      } catch (error) {
        console.error('Error deleting story:', error);
      }
    }
  };

  return (
    <div>
      <div className="flex gap-4 mb-6">
        <Input
          type="text"
          placeholder="Search stories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map(category => (
              <SelectItem key={category} value={category} className="capitalize">
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {filteredStories.map(story => (
          <div key={story.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">{story.title}</h3>
                <p className="text-sm text-gray-500 capitalize">{story.category}</p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setEditingStory(story)}
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(story)}
                >
                  Delete
                </Button>
              </div>
            </div>
            <p className="text-gray-600">{story.excerpt}</p>
            <div className="mt-2 text-sm text-gray-500">
              <span>Location: {story.location}</span>
            </div>
          </div>
        ))}

        {filteredStories.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No stories found matching your criteria
          </div>
        )}
      </div>

      {editingStory && (
        <EditStoryDialog
          story={editingStory}
          categories={categories}
          onClose={() => setEditingStory(null)}
          onSave={onUpdate}
        />
      )}
    </div>
  );
} 