
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StoryCard from '@/components/StoryCard';
import { featuredStories } from '@/data/stories';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/95 to-secondary/95 text-white py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Stories of Integrity, Impact, and Inspiration
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Discover how individuals and communities are creating positive change around the world through resilience and determination.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Explore Stories
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Get Involved
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="People collaborating" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Success Stories</h2>
            <Link to="/stories" className="text-primary flex items-center font-medium hover:underline">
              View all stories <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Global Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-card text-center">
              <p className="text-4xl font-bold text-primary mb-2">2,500+</p>
              <p className="text-lg font-medium">Success Stories</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-card text-center">
              <p className="text-4xl font-bold text-primary mb-2">120</p>
              <p className="text-lg font-medium">Countries</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-card text-center">
              <p className="text-4xl font-bold text-primary mb-2">$15M</p>
              <p className="text-lg font-medium">In Donations</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-card text-center">
              <p className="text-4xl font-bold text-primary mb-2">1.2M</p>
              <p className="text-lg font-medium">Lives Impacted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Browse Stories by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/stories/education" className="group relative rounded-lg overflow-hidden aspect-[3/2]">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Education" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">Education</h3>
                  <p className="text-white/80">Transforming lives through learning</p>
                </div>
              </div>
            </Link>
            <Link to="/stories/healthcare" className="group relative rounded-lg overflow-hidden aspect-[3/2]">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Healthcare" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">Healthcare</h3>
                  <p className="text-white/80">Building healthier communities</p>
                </div>
              </div>
            </Link>
            <Link to="/stories/community" className="group relative rounded-lg overflow-hidden aspect-[3/2]">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Community" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">Community</h3>
                  <p className="text-white/80">Empowering local action</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-tertiary/10 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-lg mb-8">
              Help us continue sharing inspiring stories of impact and change by supporting our work. Together, we can build a world where everyone's success stories matter.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="btn-primary">Donate Now</Button>
              <Button size="lg" variant="outline" className="btn-outline">Become a Volunteer</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
