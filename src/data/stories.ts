
// This file re-exports everything from the story modules for backward compatibility
import { Story } from "../components/StoryCard";
import { educationStories } from "./educationStories";
import { generalStories } from "./generalStories";
import { allStories, featuredStories, getStory, getStoriesByCategory } from "./storyUtils";

// Re-exporting for backward compatibility
export { educationStories, generalStories as stories, allStories, featuredStories, getStory, getStoriesByCategory };
