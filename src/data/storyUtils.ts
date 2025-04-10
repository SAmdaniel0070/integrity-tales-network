
import { Story } from "../components/StoryCard";
import { educationStories } from "./educationStories";
import { technologyStories } from "./technologyStories";
import { entrepreneurshipStories } from "./entrepreneurshipStories";
import { artsStories } from "./artsStories";
import { generalStories } from "./generalStories";

// Combine all stories into one array
export const allStories: Story[] = [
  ...educationStories,
  ...technologyStories,
  ...entrepreneurshipStories,
  ...artsStories,
  ...generalStories
];

// Featured stories (first 3 from general stories)
export const featuredStories = generalStories.slice(0, 3);

// Get a specific story by slug
export const getStory = (slug: string): Story | undefined => {
  return allStories.find(story => story.slug === slug);
};

// Get stories by category
export const getStoriesByCategory = (category: string): Story[] => {
  if (category === 'all') return allStories;
  return allStories.filter(story => story.category.toLowerCase() === category.toLowerCase());
};
