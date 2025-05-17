import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import StoryCard from "../components/StoryCardNew";





const Index = () => {
  const navigate = useNavigate();
  const [stories, setStories] = useState([]);

  const SuccessStories = () => {

    return (
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Transforming Lives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <StoryCard key={index} {...story} />
            ))}
          </div>
        </div>
      </section>
    );
  };

  useEffect(() => {
    const fetchStories = async () => {
      const querySnapshot = await getDocs(collection(db, "Story"));
      const storyData = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();

        // Loop through all keys (e.g., story1, story2, etc.)
        Object.keys(data).forEach((key) => {
          if (key.startsWith("story")) {
            storyData.push({
              id: doc.id + "_" + key, // make id unique per story
              ...data[key]
            });
          }
        });
      });

      setStories(storyData);
    };

    fetchStories();
  }, []);



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
                <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => navigate("/stories")}>
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


      <SuccessStories />


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
