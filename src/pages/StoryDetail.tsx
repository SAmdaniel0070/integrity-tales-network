import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getStoriesByCategory } from '@/lib/firestore';
import type { Story } from '@/types/schema';
import { ChevronRight, MapPin, Calendar, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const StoryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [story, setStory] = useState<Story | null>(null);
  const [relatedStories, setRelatedStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        setLoading(true);
        const allStories = await getStoriesByCategory('all');
        const foundStory = allStories.find(s => s.slug === slug);
        setStory(foundStory || null);

        if (foundStory) {
          const categoryStories = await getStoriesByCategory(foundStory.category as any);
          const related = categoryStories
            .filter(s => s.id !== foundStory.id)
            .slice(0, 3);
          setRelatedStories(related);
        }
      } catch (error) {
        console.error('Error fetching story:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 container py-16 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!story) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 container py-16 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Story Not Found</h1>
          <p className="text-gray-600 mb-8">The story you're looking for doesn't exist or has been removed.</p>
          <Link to="/stories" className="btn-primary">Browse All Stories</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-3">
        <div className="container">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight size={14} className="mx-2" />
            <Link to="/stories" className="hover:text-primary">Stories</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-gray-900 font-medium">{story.title}</span>
          </div>
        </div>
      </div>

      {/* Story Header */}
      <div className="container py-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-6">
          <div>
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 text-sm font-medium rounded-full mb-3">
              {story.category}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{story.title}</h1>
            <div className="flex items-center text-sm text-gray-500 gap-4">
              <div className="flex items-center">
                <MapPin size={16} className="mr-1" />
                <span>{story.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>{new Date(story.createdAt || '').toDateString()}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center">
              <Share2 size={16} className="mr-2" /> Share
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Facebook size={16} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Twitter size={16} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Linkedin size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Story Content with Floating Image */}
      <div className="container pb-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl mb-6 font-medium text-gray-700">{story.excerpt}</p>

          <div className="mb-6 md:float-right md:ml-6 md:w-2/5 lg:w-1/3 rounded-lg overflow-hidden shadow-md">
            <AspectRatio ratio={4 / 3}>
              <img
                src={story.imageUrl}
                alt={story.title}
                className="w-full h-full object-contain"
              />
            </AspectRatio>
            <div className="bg-gray-50 p-2 text-sm text-center text-gray-600">
              {story.title} - {story.location}
            </div>
          </div>

          {story.fullStory ? (
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: story.fullStory }}
            />
          ) : (
            <p>No detailed story available.</p>
          )}

          {/* <div className="border-t border-b py-6 my-8 clear-both">
            <h3 className="font-bold text-lg mb-3">How You Can Help</h3>
            <p className="mb-4">Support more success stories like this by volunteering with Integrity Foundation.</p>
            <div className="flex gap-4">
              <Button variant="outline">Volunteer</Button>
            </div>
          </div> */}
        </div>

        {/* Related Stories */}
        {relatedStories.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedStories.map((relatedStory) => (
                <Link
                  key={relatedStory.id}
                  to={`/story/${relatedStory.slug}`}
                  className="group"
                >
                  <div className="aspect-[16/9] overflow-hidden rounded-lg mb-3">
                    <img
                      src={relatedStory.imageUrl}
                      alt={relatedStory.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    {relatedStory.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{relatedStory.location}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default StoryDetail;
