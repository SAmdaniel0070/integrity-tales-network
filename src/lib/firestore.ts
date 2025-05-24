import { 
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  query,
  where,
  arrayUnion,
  arrayRemove,
  deleteDoc
} from 'firebase/firestore';
import { db } from '../firebase';
import type { Story, StoryCategory } from '../types/schema';

// Add a new story
export async function addStory(story: Story) {
  // Add createdAt timestamp
  const storyWithTimestamp = {
    ...story,
    createdAt: Date.now() // Add current timestamp in milliseconds
  };
  
  // Add to stories collection
  await setDoc(doc(db, 'stories', story.id), storyWithTimestamp);
  
  // Update category collection
  await setDoc(
    doc(db, 'storyCollections', story.category),
    {
      stories: arrayUnion(story.id)
    },
    { merge: true }
  );
}

// Get a story by ID
export async function getStoryById(storyId: string): Promise<Story | null> {
  const docRef = doc(db, 'stories', storyId);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return docSnap.data() as Story;
  }
  return null;
}

// Get stories by category
export async function getStoriesByCategory(category: StoryCategory): Promise<Story[]> {
  if (category === 'all') {
    const querySnapshot = await getDocs(collection(db, 'stories'));
    return querySnapshot.docs.map(doc => doc.data() as Story);
  }

  const collectionRef = doc(db, 'storyCollections', category);
  const collectionSnap = await getDoc(collectionRef);
  
  if (!collectionSnap.exists()) {
    return [];
  }

  const storyIds = collectionSnap.data().stories;
  const stories = await Promise.all(
    storyIds.map((id: string) => getStoryById(id))
  );

  return stories.filter((story): story is Story => story !== null);
}

// Get all categories
export async function getCategories(): Promise<string[]> {
  const docRef = doc(db, 'categories', 'available');
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return docSnap.data().available;
  }
  return [];
}

// Delete a story
export async function deleteStory(storyId: string, category: string) {
  // Remove from stories collection
  await deleteDoc(doc(db, 'stories', storyId));
  
  // Remove from category collection
  await setDoc(
    doc(db, 'storyCollections', category),
    {
      stories: arrayRemove(storyId)
    },
    { merge: true }
  );
}