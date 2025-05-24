import type { Story } from '../types/schema';
import { AspectRatio } from './ui/aspect-ratio';

interface StoryPreviewProps {
  story: Partial<Story>;
}

const StoryPreview = ({ story }: StoryPreviewProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {story.imageUrl && (
        <AspectRatio ratio={16/9}>
          <img 
            src={story.imageUrl} 
            alt={story.title} 
            className="w-full h-full object-cover"
          />
        </AspectRatio>
      )}
      <div className="p-6">
        {story.category && (
          <div className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-3 capitalize">
            {story.category}
          </div>
        )}
        {story.title && (
          <h1 className="text-2xl font-bold mb-3">{story.title}</h1>
        )}
        {story.location && (
          <div className="text-sm text-gray-500 mb-4">{story.location}</div>
        )}
        {story.excerpt && (
          <p className="text-gray-600 mb-6">{story.excerpt}</p>
        )}
        {story.fullStory && (
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: story.fullStory }}
          />
        )}
      </div>
    </div>
  );
};

export default StoryPreview; 