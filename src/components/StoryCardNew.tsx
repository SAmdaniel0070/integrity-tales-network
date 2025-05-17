
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
// import { AspectRatio } from '@/components/ui/aspect-ratio'; 

// export interface Story {
//   id: string;
//   title: string;
//   excerpt: string;
//   category: string;
//   location: string;
//   imageUrl: string;
//   slug: string;
//   fullStory?: string;
// }

// interface StoryCardProps {
//   story: Story;
// }

// const StoryCard = ({ story }: StoryCardProps) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden h-full group transition-all duration-300 hover:shadow-lg">
//       <div className="relative overflow-hidden">
//         <AspectRatio ratio={4/3}>
//           <img 
//             src={story.imageUrl} 
//             alt={story.title} 
//             className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
//           />
//         </AspectRatio>
//         <div className="absolute top-3 left-3 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary rounded-full">
//           {story.category}
//         </div>
//       </div>
//       <div className="p-5">
//         <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
//           {story.title}
//         </h3>
//         <p className="text-gray-600 text-sm mb-3 line-clamp-2">
//           {story.excerpt}
//         </p>
//         <div className="flex items-center justify-between">
//           <span className="text-sm text-gray-500">{story.location}</span>
//           <Link to={`/story/${story.slug}`} className="text-primary font-medium flex items-center text-sm hover:underline">
//             Read more <ArrowRight size={16} className="ml-1" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StoryCard;


// components/StoryCard.jsx
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const StoryCard = ({ image, imageDescription, subTitle, title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-64 overflow-hidden">
        <img src={image} alt={imageDescription} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-3">
          {subTitle}
        </span>
        <h3 className="text-xl font-bold mb-3">{title?.replace(/"/g, '')}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <Link to={`${link}`} className="text-primary font-medium flex items-center hover:underline">
          Read full story <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default StoryCard;

