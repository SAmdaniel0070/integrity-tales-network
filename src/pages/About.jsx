
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero */}
      <section className="bg-primary/10 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">About Integrity Foundation</h1>
            <p className="text-lg text-gray-700">
              We believe in the power of storytelling to inspire change and build a better world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Integrity Foundation exists to discover, document, and share inspiring stories of resilience, 
                innovation, and positive change from across the globe. We believe that by amplifying these 
                stories, we can inspire others to create their own positive impact.
              </p>
              <p className="text-lg text-gray-600">
                Our work spans education, healthcare, community development, and environmental initiatives, 
                showcasing how individual and collective efforts can transform lives and communities.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-tertiary p-6 rounded-lg shadow-lg">
                <p className="font-bold text-2xl">1,000+</p>
                <p className="text-black/80">Communities Impacted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-card">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full mb-4">
                <span className="text-primary text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We're committed to honesty, transparency, and ethical practices in all our work.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-card">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full mb-4">
                <span className="text-primary text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Empowerment</h3>
              <p className="text-gray-600">
                We believe in amplifying voices and supporting communities to drive their own change.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-card">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full mb-4">
                <span className="text-primary text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We celebrate creative solutions and innovative approaches to complex challenges.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-card">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full mb-4">
                <span className="text-primary text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We focus on long-term, sustainable solutions that continue to benefit communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl opacity-90 mb-8">
              Together, we can amplify more stories of integrity and impact. Get involved today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Donate Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Become a Volunteer
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
