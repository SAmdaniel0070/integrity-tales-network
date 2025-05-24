/**
 * Core data types and interfaces used throughout the application
 */

/**
 * Represents a story in the application
 */
export interface Story {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  location: string;
  imageUrl: string;
  slug: string;
  fullStory?: string;
  createdAt?: number; // Timestamp when the story was created
}

/**
 * Props for the StoryCard component
 */
export interface StoryCardProps {
  image: string;
  imageDescription: string;
  subTitle: string;
  title: string;
  description: string;
  link: string;
}

/**
 * Categories available for stories
 */
export type StoryCategory = 
  | 'all'
  | 'education'
  | 'empowerment'
  | 'income generation';

/**
 * Story collection type
 */
export interface StoryCollection {
  [key: string]: Story[];
}

/**
 * Story utility functions type definitions
 */
export interface StoryUtils {
  getStory: (slug: string) => Story | undefined;
  getStoriesByCategory: (category: StoryCategory) => Story[];
}