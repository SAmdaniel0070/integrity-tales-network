import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

const categories = [
  'all',
  'education',
  'empowerment',
  'income generation'
];

async function initializeCategories() {
  try {
    await setDoc(doc(db, 'categories', 'available'), {
      available: categories
    });
    console.log('Categories initialized successfully');
  } catch (error) {
    console.error('Error initializing categories:', error);
  }
}

initializeCategories(); 