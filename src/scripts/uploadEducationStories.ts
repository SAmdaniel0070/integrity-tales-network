// src/scripts/uploadEducationStories.js
import { addStory } from '../lib/firestore';
import { educationStories } from '../data/educationStories';

async function uploadStories() {
  console.log('Starting to upload education stories...');
  for (const story of educationStories) {
    try {
      await addStory(story);
      console.log(`Successfully uploaded story: ${story.title}`);
    } catch (error) {
      console.error(`Error uploading story ${story.title}:`, error);
    }
  }
  console.log('Finished uploading education stories.');
}

uploadStories();