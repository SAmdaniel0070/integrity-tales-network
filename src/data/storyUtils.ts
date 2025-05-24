
import { Story } from "../components/StoryCard";
import { educationStories } from "./educationStories";
import { generalStories } from "./generalStories";
import { empowermentStories } from "./empowermentStories";

// Combine all stories into one array
export const allStories: Story[] = [
  ...educationStories,
  ...generalStories,
  ...empowermentStories
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
