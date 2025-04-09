
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio'; 

export interface Story {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  location: string;
  imageUrl: string;
  slug: string;
  fullStory?: string;
}

interface StoryCardProps {
  story: Story;
}

const StoryCard = ({ story }: StoryCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full group transition-all duration-300 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <AspectRatio ratio={4/3}>
          <img 
            src={story.imageUrl} 
            alt={story.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </AspectRatio>
        <div className="absolute top-3 left-3 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary rounded-full">
          {story.category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
          {story.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {story.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{story.location}</span>
          <Link to={`/story/${story.slug}`} className="text-primary font-medium flex items-center text-sm hover:underline">
            Read more <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
