
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getStory, allStories } from '@/data/stories';
import { ChevronRight, MapPin, Calendar, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StoryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const story = getStory(slug || '');
  
  // If story not found
  if (!story) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 container py-16 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Story Not Found</h1>
          <p className="text-gray-600 mb-8">The story you're looking for doesn't exist or has been removed.</p>
          <Link to="/stories" className="btn-primary">
            Browse All Stories
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get 3 related stories from the same category, excluding the current one
  const relatedStories = allStories
    .filter(s => s.id !== story.id)
    .filter(s => s.category === story.category)
    .slice(0, 3);

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
                <span>April 8, 2025</span>
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

      {/* Hero Image */}
      <div className="container mb-10">
        <div className="aspect-[21/9] rounded-xl overflow-hidden">
          <img 
            src={story.imageUrl} 
            alt={story.title} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Story Content */}
      <div className="container pb-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl mb-6 font-medium text-gray-700">
            {story.excerpt}
          </p>
          
          {/* Story full content */}
          {story.fullStory ? (
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: story.fullStory }}
            />
          ) : (
            <div className="prose prose-lg max-w-none">
              <p>
                In the heart of {story.location}, a remarkable transformation was taking place. What started as a small 
                initiative by local community members soon grew into something that would change hundreds of lives.
              </p>
              
              <p>
                "We never imagined the impact would be so significant," says Maria, one of the project leaders. "We simply 
                saw a need and decided to take action."
              </p>
              
              <h2>The Challenge</h2>
              <p>
                For decades, the community had struggled with limited access to resources, which created numerous obstacles 
                for residents. Children had to walk miles to attend schools that were often overcrowded and under-resourced. 
                Healthcare was scarce, and economic opportunities were limited.
              </p>
              
              <p>
                "The biggest challenge was convincing people that change was possible," explains Robert, another community leader. 
                "After years of setbacks, many had lost hope."
              </p>
              
              <h2>The Solution</h2>
              <p>
                The initiative began with a comprehensive assessment of the community's needs and assets. Rather than 
                imposing external solutions, the team worked closely with local residents to develop sustainable approaches 
                that respected cultural values and utilized local resources.
              </p>
              
              <p>
                They established training programs that equipped residents with valuable skills, created partnerships with 
                regional organizations, and implemented innovative funding mechanisms to ensure long-term sustainability.
              </p>
              
              <h2>The Impact</h2>
              <p>
                Today, the community tells a very different story. School attendance has increased by 75%, healthcare 
                access has improved significantly, and new economic opportunities have reduced unemployment by 40%.
              </p>
              
              <p>
                "The most important change is in how people see themselves," says Maria. "There's a sense of empowerment 
                and ownership that wasn't there before. People believe in their ability to create change."
              </p>
              
              <h2>Looking Forward</h2>
              <p>
                The success of this initiative has inspired similar efforts in neighboring communities. The team is now 
                focusing on creating a network that allows these communities to share resources and lessons learned.
              </p>
              
              <p>
                "This is just the beginning," Robert says with confidence. "We've shown what's possible when communities 
                come together with purpose and determination. The future is bright."
              </p>
            </div>
          )}

          <div className="border-t border-b py-6 my-8">
            <h3 className="font-bold text-lg mb-3">How You Can Help</h3>
            <p className="mb-4">Support more success stories like this by donating or volunteering with Integrity Foundation.</p>
            <div className="flex gap-4">
              <Button>Donate Now</Button>
              <Button variant="outline">Volunteer</Button>
            </div>
          </div>
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
