
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StoryCard from '@/components/StoryCard';
import { getStoriesByCategory } from '@/data/stories';
import { BookOpen, User, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Education = () => {
  const educationStories = getStoriesByCategory('education');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* History Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6">Education Initiatives</h1>
                <h2 className="text-2xl font-semibold text-primary mb-4">History of LWA Education</h2>
                <p className="text-gray-600 mb-6">
                  Since our founding in 2010, the Integrity Foundation has been committed to transforming education
                  in underserved communities. What began as a single classroom initiative in rural India has grown
                  into a comprehensive educational program spanning multiple states.
                </p>
                <p className="text-gray-600 mb-6">
                  Our first education center was established in Jalna, Maharashtra, with just 15 students and 2 volunteer
                  teachers. Today, we support over 50 education centers, reaching more than 5,000 students annually and
                  providing employment to local educators.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                    <div className="p-2 bg-primary/10 rounded-full mr-3">
                      <BookOpen className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-bold text-xl">50+</div>
                      <div className="text-sm text-gray-600">Education Centers</div>
                    </div>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                    <div className="p-2 bg-primary/10 rounded-full mr-3">
                      <User className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-bold text-xl">5,000+</div>
                      <div className="text-sm text-gray-600">Students Annually</div>
                    </div>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                    <div className="p-2 bg-primary/10 rounded-full mr-3">
                      <Building className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-bold text-xl">12</div>
                      <div className="text-sm text-gray-600">States Reached</div>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="mt-2">Get Involved</Button>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1122&q=80" 
                  alt="Students learning in classroom" 
                  className="rounded-xl shadow-lg w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Programs */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Education Mission</h2>
              <p className="text-gray-600">
                We believe that quality education is a fundamental right that should be accessible to all, 
                regardless of socioeconomic background. Our mission is to provide educational opportunities 
                that empower individuals to break the cycle of poverty and build brighter futures.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="text-primary h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl mb-2">Primary Education</h3>
                <p className="text-gray-600">
                  Providing quality primary education to children in rural and underserved communities, 
                  focusing on foundational skills in literacy and numeracy.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-6 w-6">
                    <path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">Digital Literacy</h3>
                <p className="text-gray-600">
                  Equipping students with essential digital skills through computer labs 
                  and technology programs to prepare them for the modern workforce.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-6 w-6">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z" fill="currentColor" opacity="0.1"></path>
                    <path d="M12 16v-5"></path>
                    <path d="M10.5 13.5h3"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">Teacher Training</h3>
                <p className="text-gray-600">
                  Developing skilled educators through comprehensive training programs that emphasize 
                  modern teaching techniques and student engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Education Success Stories</h2>
              <p className="text-gray-600">
                Every day, we witness the transformative power of education in the communities we serve. 
                These stories highlight the impact of our educational initiatives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {educationStories.length > 0 ? (
                educationStories.map((story) => (
                  <StoryCard key={story.id} story={story} />
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <p className="text-gray-600">No education stories available at the moment.</p>
                </div>
              )}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/stories/education">
                <Button variant="outline" size="lg">View All Education Stories</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Get Involved CTA */}
        <section className="py-16 bg-primary/10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Support Our Education Mission</h2>
              <p className="text-gray-600 mb-8">
                Your contribution can help provide quality education to children who need it most. 
                Join us in making a difference through education.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="px-8">Donate Now</Button>
                <Button variant="outline" size="lg" className="px-8">Volunteer</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Education;
