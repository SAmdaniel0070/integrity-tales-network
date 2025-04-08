
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StoryCard from '@/components/StoryCard';
import { stories, getStoriesByCategory } from '@/data/stories';
import { Button } from '@/components/ui/button';

// Education success stories data
const educationStories = [
  {
    id: "khushi",
    title: "Khushi Sable: A Beacon of Hope and Resilience",
    excerpt: "In a world where financial constraints often hinder dreams and aspirations, Khushi Sable, a determined 7th-grade student, embodies the indomitable spirit of perseverance through ASC's free education program.",
    category: "Education",
    location: "Jalna",
    imageUrl: "/lovable-uploads/7dd03504-9233-4f7a-aa5c-f45e2a52e716.png",
    slug: "khushi-sable-story"
  },
  {
    id: "ravi",
    title: "Ravi Mehra: From School Dropout to College Graduate",
    excerpt: "Abandoned his education due to financial struggles, Ravi found hope through ASC's outreach program. After joining, his natural aptitude for mathematics was nurtured, eventually earning him a full scholarship to engineering college.",
    category: "Education",
    location: "Sambhajinagar",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "ravi-mehra-story"
  },
  {
    id: "priya",
    title: "Priya Singh: Finding Her Voice Through Education",
    excerpt: "Once shy and timid, Priya transformed through ASC's confidence-building workshops. Now leading a women's literacy program in her village, she's helping other girls discover the power of their voices.",
    category: "Leadership",
    location: "Amravati",
    imageUrl: "https://images.unsplash.com/photo-1560251180-1a0b9a576d31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "priya-singh-story"
  },
  {
    id: "arjun",
    title: "Arjun Patel: Digital Dreams in a Rural Village",
    excerpt: "With no prior computer exposure, Arjun discovered a natural talent for coding through ASC's digital literacy program. Today, he's developing apps to solve local community challenges and inspiring a new generation of rural technologists.",
    category: "Technology",
    location: "Nandurbar",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "arjun-patel-story"
  },
  {
    id: "sharma-twins",
    title: "The Sharma Twins: Young Entrepreneurs Making a Difference",
    excerpt: "Twin sisters from a farming family used ASC's entrepreneurship program to launch an eco-friendly crafts business. Their venture now employs 15 village women and funds school supplies for local children.",
    category: "Entrepreneurship",
    location: "Ahilyanagar",
    imageUrl: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "sharma-twins-story"
  },
  {
    id: "vijay",
    title: "Vijay Kumar: Finding Healing Through Creative Expression",
    excerpt: "Overcoming trauma through ASC's arts program, Vijay discovered his talent for painting. His artwork now raises awareness about rural challenges while earning him national recognition and a scholarship to art school.",
    category: "Arts",
    location: "Jalna",
    imageUrl: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "vijay-kumar-story"
  }
];

// Combine with existing stories
const allStories = [...educationStories, ...stories];

const Stories = () => {
  const { category } = useParams<{ category?: string }>();
  const [activeCategory, setActiveCategory] = useState(category || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter stories by category and search query
  const filteredStories = activeCategory === 'all' 
    ? allStories.filter(story =>
        story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allStories.filter(story => 
        story.category.toLowerCase() === activeCategory.toLowerCase() &&
        (story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.location.toLowerCase().includes(searchQuery.toLowerCase()))
      );

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
                variant={activeCategory === 'healthcare' ? 'default' : 'outline'}
                onClick={() => setActiveCategory('healthcare')}
              >
                Healthcare
              </Button>
              <Button 
                variant={activeCategory === 'community' ? 'default' : 'outline'}
                onClick={() => setActiveCategory('community')}
              >
                Community
              </Button>
              <Button 
                variant={activeCategory === 'leadership' ? 'default' : 'outline'}
                onClick={() => setActiveCategory('leadership')}
              >
                Leadership
              </Button>
              <Button 
                variant={activeCategory === 'technology' ? 'default' : 'outline'}
                onClick={() => setActiveCategory('technology')}
              >
                Technology
              </Button>
              <Button 
                variant={activeCategory === 'entrepreneurship' ? 'default' : 'outline'}
                onClick={() => setActiveCategory('entrepreneurship')}
              >
                Entrepreneurship
              </Button>
              <Button 
                variant={activeCategory === 'arts' ? 'default' : 'outline'}
                onClick={() => setActiveCategory('arts')}
              >
                Arts
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
