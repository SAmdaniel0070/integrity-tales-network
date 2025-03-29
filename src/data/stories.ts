
import { Story } from "../components/StoryCard";

export const stories: Story[] = [
  {
    id: "1",
    title: "Transforming Education in Rural Communities",
    excerpt: "How one teacher's vision created opportunities for an entire generation of students.",
    category: "Education",
    location: "Kenya",
    imageUrl: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "transforming-education-rural-communities"
  },
  {
    id: "2",
    title: "Building Sustainable Healthcare Solutions",
    excerpt: "A community-led initiative that revolutionized healthcare access in remote regions.",
    category: "Healthcare",
    location: "India",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "sustainable-healthcare-solutions"
  },
  {
    id: "3",
    title: "Clean Water Initiative Changes Lives",
    excerpt: "How access to clean water transformed a drought-prone village into a thriving community.",
    category: "Community",
    location: "Ethiopia",
    imageUrl: "https://images.unsplash.com/photo-1627391519234-864ceb7db0a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "clean-water-initiative"
  },
  {
    id: "4",
    title: "Youth Empowerment Through Technology",
    excerpt: "A coding bootcamp that's creating the next generation of tech entrepreneurs.",
    category: "Education",
    location: "Brazil",
    imageUrl: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "youth-empowerment-technology"
  },
  {
    id: "5",
    title: "Women-Led Farming Cooperative",
    excerpt: "How a group of women revolutionized agricultural practices in their community.",
    category: "Community",
    location: "Guatemala",
    imageUrl: "https://images.unsplash.com/photo-1505471768190-275e2ad7b3f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "women-led-farming-cooperative"
  },
  {
    id: "6",
    title: "Mental Health Services for Remote Areas",
    excerpt: "Innovative telemedicine approach brings mental healthcare to underserved communities.",
    category: "Healthcare",
    location: "Philippines",
    imageUrl: "https://images.unsplash.com/photo-1576765608866-5b51046452be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "mental-health-services-remote"
  },
  {
    id: "7",
    title: "Rebuilding Schools After Natural Disaster",
    excerpt: "A community comes together to ensure education continues despite devastating earthquake.",
    category: "Education",
    location: "Nepal",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "rebuilding-schools-disaster"
  },
  {
    id: "8",
    title: "Eco-friendly Entrepreneurship Program",
    excerpt: "Young entrepreneurs create sustainable businesses that protect local ecosystems.",
    category: "Community",
    location: "Costa Rica",
    imageUrl: "https://images.unsplash.com/photo-1503642551022-c011aafb3c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "eco-friendly-entrepreneurship"
  }
];

export const featuredStories = stories.slice(0, 3);

export const getStory = (slug: string) => {
  return stories.find(story => story.slug === slug);
};

export const getStoriesByCategory = (category: string) => {
  if (category === 'all') return stories;
  return stories.filter(story => story.category.toLowerCase() === category.toLowerCase());
};
