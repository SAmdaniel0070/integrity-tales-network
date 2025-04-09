
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
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
                <Button size="lg" className="bg-white text-primary hover:bg-white/90"  onClick={() => navigate("/stories")}>
                  Explore Stories
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

      {/* Success Stories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Transforming Education in Rural Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Story 1 - Khushi's Story with the uploaded image */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/7dd03504-9233-4f7a-aa5c-f45e2a52e716.png" 
                  alt="Khushi Sable" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-3">Education</span>
                <h3 className="text-xl font-bold mb-3">Khushi Sable: A Beacon of Hope and Resilience</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  In a world where financial constraints often hinder dreams and aspirations, Khushi Sable, a determined 7th-grade student, embodies the indomitable spirit of perseverance through ASC's free education program.
                </p>
                <Link to="/story/khushi-sable-story" className="text-primary font-medium flex items-center hover:underline">
                  Read full story <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Story 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Ravi Mehra" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-3">Education</span>
                <h3 className="text-xl font-bold mb-3">Ravi Mehra: From School Dropout to College Graduate</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Abandoned his education due to financial struggles, Ravi found hope through ASC's outreach program. After joining, his natural aptitude for mathematics was nurtured, eventually earning him a full scholarship to engineering college.
                </p>
                <Link to="/story/ravi-mehra-story" className="text-primary font-medium flex items-center hover:underline">
                  Read full story <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Story 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560251180-1a0b9a576d31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Priya Singh" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-3">Leadership</span>
                <h3 className="text-xl font-bold mb-3">Priya Singh: Finding Her Voice Through Education</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Once shy and timid, Priya transformed through ASC's confidence-building workshops. Now leading a women's literacy program in her village, she's helping other girls discover the power of their voices.
                </p>
                <Link to="/story/priya-singh-story" className="text-primary font-medium flex items-center hover:underline">
                  Read full story <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Story 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Arjun Patel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-3">Technology</span>
                <h3 className="text-xl font-bold mb-3">Arjun Patel: Digital Dreams in a Rural Village</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  With no prior computer exposure, Arjun discovered a natural talent for coding through ASC's digital literacy program. Today, he's developing apps to solve local community challenges and inspiring a new generation of rural technologists.
                </p>
                <Link to="/story/arjun-patel-story" className="text-primary font-medium flex items-center hover:underline">
                  Read full story <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Story 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Meena and Reena Sharma" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-3">Entrepreneurship</span>
                <h3 className="text-xl font-bold mb-3">The Sharma Twins: Young Entrepreneurs Making a Difference</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Twin sisters from a farming family used ASC's entrepreneurship program to launch an eco-friendly crafts business. Their venture now employs 15 village women and funds school supplies for local children.
                </p>
                <Link to="/story/sharma-twins-story" className="text-primary font-medium flex items-center hover:underline">
                  Read full story <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Story 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Vijay Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-3">Arts</span>
                <h3 className="text-xl font-bold mb-3">Vijay Kumar: Finding Healing Through Creative Expression</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Overcoming trauma through ASC's arts program, Vijay discovered his talent for painting. His artwork now raises awareness about rural challenges while earning him national recognition and a scholarship to art school.
                </p>
                <Link to="/story/vijay-kumar-story" className="text-primary font-medium flex items-center hover:underline">
                  Read full story <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-gray-50 py-16 flex justify-center">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            <div className="bg-white p-8 rounded-lg shadow-card">
              <p className="text-4xl font-bold text-primary mb-2">2,500+</p>
              <p className="text-lg font-medium">Success Stories</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-card">
              <p className="text-4xl font-bold text-primary mb-2">24</p>
              <p className="text-lg font-medium">Districts</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-card">
              <p className="text-4xl font-bold text-primary mb-2">110</p>
              <p className="text-lg font-medium">Taluka</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-card">
              <p className="text-4xl font-bold text-primary mb-2">1093</p>
              <p className="text-lg font-medium">Villages</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-card">
              <p className="text-4xl font-bold text-primary mb-2">$15M</p>
              <p className="text-lg font-medium">In Donations</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-card">
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
            <Link to="/stories/empowerment" className="group relative rounded-lg overflow-hidden aspect-[3/2]">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Empowerment" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">Empowerment</h3>
                  <p className="text-white/80">Building stronger individuals</p>
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
