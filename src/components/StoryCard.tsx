
import React from 'react';
import { Link } from 'react-router-dom';

export interface Story {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  location: string;
  imageUrl: string;
  slug: string;
}

interface StoryCardProps {
  story: Story;
}

const StoryCard = ({ story }: StoryCardProps) => {
  return (
    <Link to={`/story/${story.slug}`} className="story-card block group">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={story.imageUrl} 
          alt={story.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-white px-3 py-1 text-xs font-semibold rounded-full">
          {story.category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
          {story.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3">
          {story.excerpt}
        </p>
        <div className="flex items-center text-sm text-gray-500">
          <span>{story.location}</span>
        </div>
      </div>
    </Link>
  );
};

export default StoryCard;
