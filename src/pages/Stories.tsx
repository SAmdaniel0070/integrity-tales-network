import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StoryCard from '@/components/StoryCard';
import { getStoriesByCategory, getCategories } from '@/lib/firestore';
import type { Story } from '@/types/schema';
import { Button } from '@/components/ui/button';

const Stories = () => {
  const { category } = useParams<{ category?: string }>();
  const [activeCategory, setActiveCategory] = useState(category || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        const fetchedStories = await getStoriesByCategory(activeCategory as any);
        setStories(fetchedStories);
      } catch (error) {
        console.error('Error fetching stories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, [activeCategory]);

  const filteredStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    story.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    story.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gray-50 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Success Stories</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Explore inspiring stories of transformation, resilience, and positive change from around the world.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={activeCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setActiveCategory('all')}
              >
                All Stories
              </Button>
              <Button 
                variant={activeCategory === 'education' ? 'default' : 'outline'}
                onClick={() => setActiveCategory('education')}
              >
                Education
              </Button>
              <Button 
                variant={activeCategory === 'empowerment' ? 'default' : 'outline'}
                onClick={() => setActiveCategory('empowerment')}
              >
                Empowerment
              </Button>
              <Button 
                variant={activeCategory === 'income generation' ? 'default' : 'outline'}
                onClick={() => setActiveCategory('income generation')}
              >
                Income Generation
              </Button>
            </div>
            
            <div className="w-full md:w-64">
              <input
                type="text"
                placeholder="Search stories..."
                className="w-full px-4 py-2 border rounded-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-12">
        <div className="container">
          {filteredStories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No stories found</h3>
              <p className="text-gray-600">Try changing your search criteria or check back later for new stories.</p>
            </div>
          )}
        </div>
      </section>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Stories;
