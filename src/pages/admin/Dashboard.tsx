import { useState, useEffect } from 'react';
import { getStoriesByCategory, getCategories } from '../../lib/firestore';
import type { Story } from '../../types/schema';
import StoryList from './components/StoryList';
import AddStoryForm from './components/AddStoryForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminDashboard() {
  const [stories, setStories] = useState<Story[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('view');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const allStories = await getStoriesByCategory('all');
        const availableCategories = await getCategories();
        setStories(allStories);
        setCategories(availableCategories);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const refreshStories = async () => {
    const allStories = await getStoriesByCategory('all');
    setStories(allStories);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="view">View Stories</TabsTrigger>
          <TabsTrigger value="add">Add Story</TabsTrigger>
          <TabsTrigger value="stats">Statistics</TabsTrigger>
        </TabsList>

        <TabsContent value="view">
          <Card>
            <CardHeader>
              <CardTitle>Stories Management</CardTitle>
            </CardHeader>
            <CardContent>
              <StoryList 
                stories={stories} 
                categories={categories}
                onUpdate={refreshStories}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="add">
          <Card>
            <CardHeader>
              <CardTitle>Add New Story</CardTitle>
            </CardHeader>
            <CardContent>
              <AddStoryForm 
                categories={categories}
                onSuccess={refreshStories}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Total Stories</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">{stories.length}</p>
              </CardContent>
            </Card>
            
            {categories.map(category => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="capitalize">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">
                    {stories.filter(story => story.category === category).length}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 