# CLAUDE.md - AI Assistant Guide for Integrity Tales Network

## Project Overview

**Integrity Tales Network** is a web application for sharing and managing inspiring stories about social impact work across education, empowerment, and income generation initiatives. The platform features a public-facing story browser and an admin dashboard for content management.

**Tech Stack:**
- React 18.3.1 + TypeScript 5.5.3
- Vite 5.4.1 (build tool)
- React Router 6.26.2 (routing)
- Firebase 11.7.3 (Firestore database + Authentication)
- Tailwind CSS 3.4.11 + shadcn/ui components
- React Query 5.56.2 (data fetching)
- TipTap (rich text editor)

**Deployment:**
- GitHub Pages with basename `/integrity-tales-network`
- Deploy command: `npm run deploy` (uses gh-pages)

---

## Project Structure

```
/integrity-tales-network
├── src/
│   ├── pages/              # Route components
│   │   ├── admin/         # Admin dashboard pages
│   │   │   ├── Dashboard.tsx           # Main admin interface
│   │   │   └── components/             # Admin-specific components
│   │   │       ├── AddStoryForm.tsx    # Story creation form
│   │   │       ├── EditStoryDialog.tsx # Story editing modal
│   │   │       └── StoryList.tsx       # Admin story management
│   │   ├── Login.jsx      # Authentication entry (NOT FUNCTIONAL)
│   │   ├── Index.tsx      # Homepage/landing
│   │   ├── Stories.tsx    # Story listing with filters
│   │   ├── StoryDetail.tsx # Individual story view
│   │   ├── About.tsx      # About page
│   │   ├── Impact.tsx     # Analytics dashboard
│   │   └── NotFound.tsx   # 404 page
│   ├── components/        # Shared components
│   │   ├── ui/           # shadcn/ui primitives (41 components)
│   │   ├── Header.tsx    # Navigation bar
│   │   ├── Footer.tsx    # Site footer
│   │   ├── StoryCard.jsx # Story preview card
│   │   ├── RichTextEditor.tsx # TipTap editor component
│   │   └── StoryPreview.tsx   # Preview for admin
│   ├── contexts/         # React contexts
│   │   └── AuthContext.jsx  # Firebase Auth wrapper (DEFINED BUT NOT USED)
│   ├── lib/              # Utilities and services
│   │   ├── firestore.ts  # Firestore CRUD operations
│   │   └── utils.ts      # General utilities
│   ├── types/            # TypeScript type definitions
│   │   └── schema.ts     # Core data models
│   ├── data/             # Seed data files
│   │   ├── educationStories.ts
│   │   ├── empowermentStories.ts
│   │   ├── IGStories.ts
│   │   └── firestoreSchema.json
│   ├── scripts/          # Data seeding scripts
│   │   ├── uploadEducationStories.ts
│   │   └── initCategories.ts
│   ├── hooks/            # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── assets/           # Static assets
│   ├── firebase.js       # Firebase configuration
│   ├── App.jsx          # Root component with routing
│   └── main.tsx         # Application entry point
├── public/              # Static files
├── components.json      # shadcn/ui configuration
├── tailwind.config.ts   # Tailwind configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies and scripts
```

---

## Routing Structure

**Base Path:** `/integrity-tales-network` (for GitHub Pages)

| Route | Component | Purpose | Protection |
|-------|-----------|---------|------------|
| `/` | Login | Authentication entry | None |
| `/home` | Index | Landing page with categories | None |
| `/about` | About | Mission and values | None |
| `/stories` | Stories | Story listing with filters | None |
| `/stories/:category` | Stories | Category-filtered stories | None |
| `/story/:slug` | StoryDetail | Full story view | None |
| `/impact` | Impact | Analytics dashboard | None |
| `/admin` | Dashboard | Admin panel | **NONE** (Critical) |
| `*` | NotFound | 404 page | None |

**CRITICAL:** No routes are currently protected. Admin panel is accessible to anyone via direct URL.

---

## Data Models

### Story Schema (`/src/types/schema.ts`)

```typescript
interface Story {
  id: string;              // Unique identifier (Date.now())
  title: string;           // Story title
  excerpt: string;         // Short summary (2-3 sentences)
  category: string;        // One of: 'education' | 'empowerment' | 'income generation'
  location: string;        // Geographic location
  imageUrl: string;        // Full URL to story image
  slug: string;            // URL-friendly identifier (auto-generated from title)
  fullStory?: string;      // Full HTML content
  createdAt?: number;      // Timestamp
}
```

### Firebase Firestore Structure

```
/stories/{storyId}
  - id: string
  - title: string
  - excerpt: string
  - category: string
  - location: string
  - imageUrl: string
  - slug: string
  - fullStory: string (HTML)
  - createdAt: number

/storyCollections/{category}
  - stories: string[]  // Array of story IDs

/categories/available
  - available: string[]  // ["education", "general", "empowerment", "technology", "arts"]
```

**Design Pattern:** Denormalized dual-indexing
- Stories exist in both `/stories` collection and category-specific `/storyCollections`
- This enables fast category filtering without complex queries
- Trade-off: Must update multiple locations on create/delete

---

## Firebase Configuration

**Location:** `/src/firebase.js`

**Firebase Project:** `ifdatabase`

**Services Used:**
- Firestore (database)
- Authentication (configured but not actively used)

**SECURITY WARNING:** Firebase config is currently hardcoded in source. For production:
1. Move to environment variables (`.env.local`)
2. Use Vite's `import.meta.env` pattern
3. Add `.env.local` to `.gitignore`

---

## Key Service Layer

### Firestore Service (`/src/lib/firestore.ts`)

**Available Functions:**

```typescript
// Add a new story to both collections
addStory(story: Omit<Story, 'id' | 'createdAt'>): Promise<string>

// Get single story by ID
getStoryById(storyId: string): Promise<Story | null>

// Get all stories or filter by category
getStoriesByCategory(category?: string): Promise<Story[]>

// Get available categories
getCategories(): Promise<string[]>

// Delete story from all locations
deleteStory(storyId: string): Promise<void>
```

**Usage Pattern:**
```typescript
import { addStory, getStoriesByCategory } from '@/lib/firestore';

// Fetch stories
const stories = await getStoriesByCategory('education');

// Add story
const storyId = await addStory({
  title: 'New Story',
  excerpt: 'Story summary...',
  category: 'education',
  location: 'Mumbai',
  imageUrl: 'https://...',
  slug: 'new-story',
  fullStory: '<p>Full content...</p>'
});
```

---

## Development Workflows

### Starting Development

```bash
# Install dependencies
npm install

# Start dev server (runs on port 5173 by default)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

### Adding a New Story (via Admin Panel)

1. Navigate to `/admin`
2. Click "Add Story" tab
3. Fill required fields:
   - Title (required) - auto-generates slug
   - Excerpt (required) - brief summary
   - Category (required) - dropdown selection
   - Location - geographic identifier
   - Image URL - full URL to hosted image
   - Full Story - rich HTML content via TipTap editor
4. Use Edit/Preview tabs to view formatted content
5. Submit - creates story in Firestore with timestamp

**Behind the scenes:**
- Story added to `/stories/{id}` collection
- Story ID appended to `/storyCollections/{category}/stories` array
- Slug generated via `title.toLowerCase().replace(/\s+/g, '-')`
- ID generated via `Date.now().toString()`

### Editing an Existing Story

1. Navigate to `/admin`
2. "View Stories" tab
3. Find story via search or filter
4. Click "Edit" button
5. Modify fields in dialog
6. Save - updates Firestore document

**Note:** Edit only updates the main story document, not category collections

### Deleting a Story

1. Admin panel → "View Stories" tab
2. Click "Delete" button
3. Confirm in dialog
4. Removes from both `/stories` and `/storyCollections/{category}`

---

## Key Conventions to Follow

### Code Style

1. **Component Files:**
   - Use `.tsx` for new TypeScript components
   - Use `.jsx` for legacy JavaScript components (prefer migrating to `.tsx`)
   - Functional components only (no class components)
   - Hooks-based state management

2. **Naming:**
   - **Components:** PascalCase (e.g., `StoryCard.tsx`)
   - **Functions:** camelCase (e.g., `getStoryById`)
   - **Constants:** SCREAMING_SNAKE_CASE (e.g., `MAX_STORIES`)
   - **Slugs:** kebab-case (e.g., `inspiring-education-story`)
   - **Firestore collections:** lowercase (e.g., `stories`, `storyCollections`)

3. **Imports:**
   - Use `@/` alias for `/src` (configured in `tsconfig.json`)
   - Example: `import { Button } from '@/components/ui/button'`

4. **Component Structure:**
   ```typescript
   // 1. Imports
   import React from 'react';
   import { SomeComponent } from '@/components/SomeComponent';

   // 2. Type definitions
   interface ComponentProps {
     // ...
   }

   // 3. Component
   export const MyComponent = ({ prop }: ComponentProps) => {
     // 4. Hooks
     const [state, setState] = useState();

     // 5. Event handlers
     const handleClick = () => {
       // ...
     };

     // 6. Render
     return (
       <div>
         {/* JSX */}
       </div>
     );
   };
   ```

### Styling Conventions

1. **Tailwind Utility Classes:**
   - Prefer utility classes over custom CSS
   - Use `cn()` helper from `@/lib/utils` for conditional classes
   ```typescript
   <div className={cn("base-class", condition && "conditional-class")}>
   ```

2. **Component Variants:**
   - Use `class-variance-authority` (cva) for component variants
   - Example in shadcn/ui components

3. **Responsive Design:**
   - Mobile-first approach
   - Use Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`

4. **Custom Classes (Rare):**
   - Defined in `/src/index.css`
   - Use only for complex animations or global styles

### Data Fetching Patterns

**Use React Query for all Firestore operations:**

```typescript
import { useQuery } from '@tanstack/react-query';
import { getStoriesByCategory } from '@/lib/firestore';

const { data: stories, isLoading, error } = useQuery({
  queryKey: ['stories', category],
  queryFn: () => getStoriesByCategory(category),
});
```

**Key Query Keys:**
- `['stories']` - All stories
- `['stories', category]` - Category-filtered stories
- `['story', slug]` - Individual story

### Form Handling

**Use React Hook Form + Zod validation:**

```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  excerpt: z.string().min(1, 'Excerpt is required'),
  // ...
});

const form = useForm({
  resolver: zodResolver(schema),
  defaultValues: { /* ... */ }
});
```

### Error Handling

1. **Firestore Operations:**
   - Use try-catch blocks
   - Display user-friendly error messages via toast
   ```typescript
   import { toast } from 'sonner';

   try {
     await addStory(data);
     toast.success('Story added successfully!');
   } catch (error) {
     toast.error('Failed to add story. Please try again.');
     console.error(error);
   }
   ```

2. **React Query:**
   - Handle `error` state in query results
   - Provide fallback UI

### Rich Text Handling

**Editor:** TipTap with StarterKit extensions

**Storage:** HTML strings in Firestore

**Rendering:** Use `dangerouslySetInnerHTML` (security consideration - see below)

```typescript
<div dangerouslySetInnerHTML={{ __html: story.fullStory }} />
```

**SECURITY NOTE:** Content is stored as raw HTML. Consider:
- Input sanitization (DOMPurify library)
- Content Security Policy headers
- Admin-only content creation (requires auth implementation)

---

## Component Library (shadcn/ui)

### Adding New Components

```bash
# Example: Add a new dialog component
npx shadcn-ui@latest add dialog
```

This will:
1. Download component to `/src/components/ui/dialog.tsx`
2. Include all necessary dependencies
3. Follow project's Tailwind configuration

### Available Components (41 total)

**Key Components:**
- `Button` - Primary interaction element
- `Card` - Content container
- `Dialog` - Modal dialogs
- `Form` - Form field wrappers
- `Input`, `Textarea`, `Select` - Form inputs
- `Toast` - Notifications via Sonner
- `Table` - Data tables
- `Tabs` - Tabbed interfaces
- `Dropdown Menu` - Menus and popovers

**Documentation:** [ui.shadcn.com](https://ui.shadcn.com)

---

## Critical Issues & Recommendations

### CRITICAL: Authentication Not Implemented

**Current State:**
- Login page (`/pages/Login.jsx`) uses hardcoded client-side validation
- Hardcoded credentials: `admin@example.com/admin123` and `kulkarniajay@hotmail.com/password123`
- No actual Firebase Authentication integration
- `AuthContext` exists but is NOT wrapped around the app
- Direct URL access bypasses login entirely
- Admin panel at `/admin` has NO protection

**Impact:**
- Anyone can access admin panel
- Anyone can create/edit/delete stories
- No audit trail of who made changes
- Major security vulnerability

**Required Implementation:**

1. **Activate AuthContext:**
   ```typescript
   // In App.jsx, wrap routes with AuthContext.Provider
   import { AuthProvider } from '@/contexts/AuthContext';

   <AuthProvider>
     <QueryClientProvider client={queryClient}>
       <RouterProvider router={router} />
     </QueryClientProvider>
   </AuthProvider>
   ```

2. **Implement Protected Routes:**
   ```typescript
   const ProtectedRoute = ({ children }) => {
     const { user, loading } = useAuth();

     if (loading) return <LoadingSpinner />;
     if (!user) return <Navigate to="/" replace />;

     return children;
   };

   // In router
   {
     path: '/admin',
     element: <ProtectedRoute><Dashboard /></ProtectedRoute>
   }
   ```

3. **Connect Login to Firebase:**
   ```typescript
   // In Login.jsx
   import { signInWithEmailAndPassword } from 'firebase/auth';
   import { auth } from '@/firebase';

   const handleLogin = async (email, password) => {
     try {
       await signInWithEmailAndPassword(auth, email, password);
       navigate('/admin');
     } catch (error) {
       toast.error('Invalid credentials');
     }
   };
   ```

4. **Remove Hardcoded Credentials:**
   - Delete client-side validation logic
   - Remove hardcoded email/password checks
   - Let Firebase handle authentication

5. **Add Authorization:**
   - Create `/users` collection in Firestore
   - Store user roles (admin, viewer, etc.)
   - Check role before rendering admin features
   ```typescript
   {
     uid: 'user123',
     email: 'admin@example.com',
     role: 'admin',
     createdAt: timestamp
   }
   ```

### TypeScript Migration Incomplete

**Status:** Project uses TypeScript but many files still in JavaScript

**Files needing migration:**
- `/src/App.jsx` → `.tsx`
- `/src/pages/Login.jsx` → `.tsx`
- `/src/contexts/AuthContext.jsx` → `.tsx`
- `/src/components/StoryCard.jsx` → `.tsx`
- `/src/components/Header.jsx` → `.tsx`
- `/src/components/Footer.jsx` → `.tsx`
- `/src/firebase.js` → `.ts`

**Migration Pattern:**
1. Rename `.jsx` → `.tsx` or `.js` → `.ts`
2. Add type annotations for props
3. Type state variables
4. Type event handlers
5. Fix any TypeScript errors
6. Update imports if needed

### No Image Upload Functionality

**Current:** Admin must paste full image URLs

**Recommendation:** Implement Firebase Storage integration
```typescript
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '@/firebase';

const uploadImage = async (file: File): Promise<string> => {
  const storageRef = ref(storage, `stories/${Date.now()}_${file.name}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
};
```

### No Pagination

**Current:** Fetches all stories at once

**Recommendation:** Implement pagination for story lists
- Use Firestore `limit()` and `startAfter()` queries
- Add pagination UI component
- Implement infinite scroll or page-based navigation

### Hardcoded Analytics Data

**Current:** Impact page (`/pages/Impact.tsx`) uses static chart data

**Recommendation:**
- Create Cloud Functions for data aggregation
- Store aggregated metrics in Firestore
- Fetch real-time statistics
- Schedule periodic updates

---

## Testing (Not Currently Implemented)

### Recommended Testing Setup

**Framework:** Vitest + React Testing Library

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

**Test File Convention:**
- Place tests next to components: `ComponentName.test.tsx`
- Or in `__tests__/` directory

**Example Test:**
```typescript
import { render, screen } from '@testing-library/react';
import { StoryCard } from './StoryCard';

describe('StoryCard', () => {
  it('renders story title', () => {
    render(<StoryCard title="Test Story" excerpt="..." />);
    expect(screen.getByText('Test Story')).toBeInTheDocument();
  });
});
```

---

## Git Workflow

### Branch Strategy

**Main Branch:** `main` (production)

**Feature Branches:** `claude/claude-md-mix1fxkbflhs9ndu-014Dgv1d99CKrQAcJQzntGhS` (current)

### Commit Guidelines

**Format:** `<type>: <description>`

**Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `refactor:` - Code refactoring
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `chore:` - Build process or tooling changes

**Examples:**
```
feat: add story pagination
fix: correct category filter logic
refactor: migrate Login component to TypeScript
docs: update CLAUDE.md with auth instructions
```

### Pushing Changes

```bash
# Ensure you're on the correct branch
git checkout claude/claude-md-mix1fxkbflhs9ndu-014Dgv1d99CKrQAcJQzntGhS

# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: add CLAUDE.md documentation"

# Push to remote (with retry on network errors)
git push -u origin claude/claude-md-mix1fxkbflhs9ndu-014Dgv1d99CKrQAcJQzntGhS
```

---

## Common Tasks Reference

### Adding a New Page

1. Create component in `/src/pages/NewPage.tsx`
2. Add route in `/src/App.jsx`:
   ```typescript
   {
     path: '/new-page',
     element: <NewPage />
   }
   ```
3. Add navigation link in `Header.tsx`

### Adding a New shadcn/ui Component

```bash
npx shadcn-ui@latest add <component-name>
```

### Modifying Firestore Schema

1. Update type definitions in `/src/types/schema.ts`
2. Update service functions in `/src/lib/firestore.ts`
3. Create migration script in `/src/scripts/` if needed
4. Test thoroughly - data changes can break existing functionality

### Adding Form Validation

1. Define Zod schema:
   ```typescript
   const schema = z.object({
     field: z.string().min(1, 'Required'),
   });
   ```
2. Use with React Hook Form:
   ```typescript
   const form = useForm({ resolver: zodResolver(schema) });
   ```
3. Display errors:
   ```typescript
   {form.formState.errors.field && (
     <span className="text-red-500">{form.formState.errors.field.message}</span>
   )}
   ```

### Debugging Firestore Queries

1. Check Firebase Console: https://console.firebase.google.com/
2. Navigate to Firestore Database
3. Inspect collection structure
4. Test queries in Firebase console before implementing in code

### Environment Variables (Not Yet Implemented)

**Setup:**
1. Create `.env.local` in project root
2. Add variables:
   ```
   VITE_FIREBASE_API_KEY=...
   VITE_FIREBASE_AUTH_DOMAIN=...
   ```
3. Access in code:
   ```typescript
   const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
   ```
4. Add `.env.local` to `.gitignore`

---

## Troubleshooting

### Common Issues

**Issue:** "Cannot find module '@/...'"
- **Solution:** Check `tsconfig.json` has correct path alias configuration
- Verify import path starts with `@/` for src directory

**Issue:** Firestore queries return empty results
- **Solution:** Check collection names (case-sensitive)
- Verify data exists in Firebase Console
- Check Firestore rules allow read access

**Issue:** TipTap editor not rendering
- **Solution:** Ensure all TipTap extensions are installed
- Check for console errors
- Verify content is valid HTML

**Issue:** Routing not working in production
- **Solution:** Verify `basename` is set to `/integrity-tales-network` in router config
- Check GitHub Pages is configured correctly

**Issue:** Styles not applying
- **Solution:** Run `npm run build` to regenerate Tailwind
- Check class names are correct
- Verify Tailwind config includes all content paths

---

## Performance Considerations

### Current Performance Issues

1. **Fetching All Stories:** No pagination leads to large data transfers
2. **Client-Side Search:** Inefficient for large datasets
3. **No Caching Strategy:** Could leverage service workers
4. **Image Loading:** No lazy loading or optimization

### Recommended Optimizations

1. **Implement Pagination:**
   - Firestore `limit()` queries
   - Virtual scrolling for large lists

2. **Add Loading States:**
   - Skeleton screens
   - Progressive loading

3. **Image Optimization:**
   - Use `loading="lazy"` on images
   - Implement responsive images
   - Consider CDN with image transformations

4. **Code Splitting:**
   - React.lazy() for route-based splitting
   - Already supported by Vite

5. **Firestore Indexing:**
   - Create composite indexes for complex queries
   - Monitor query performance in Firebase Console

---

## Security Checklist

**Before Production Deployment:**

- [ ] Implement Firebase Authentication
- [ ] Protect admin routes with auth guards
- [ ] Remove hardcoded credentials from Login.jsx
- [ ] Move Firebase config to environment variables
- [ ] Implement Firestore Security Rules:
  ```javascript
  rules_version = '2';
  service cloud.firestore {
    match /databases/{database}/documents {
      // Public read access
      match /stories/{storyId} {
        allow read: if true;
        allow write: if request.auth != null && request.auth.token.admin == true;
      }

      match /storyCollections/{category} {
        allow read: if true;
        allow write: if request.auth != null && request.auth.token.admin == true;
      }

      match /categories/{document} {
        allow read: if true;
        allow write: if request.auth != null && request.auth.token.admin == true;
      }
    }
  }
  ```
- [ ] Sanitize HTML content (use DOMPurify)
- [ ] Add Content Security Policy headers
- [ ] Implement rate limiting for API calls
- [ ] Add input validation on all forms
- [ ] Enable Firebase App Check for abuse prevention
- [ ] Set up error logging (Sentry or similar)
- [ ] Review and update dependencies for vulnerabilities

---

## Useful Links

- **Project URL:** https://lovable.dev/projects/53b2c0f1-a311-438e-9cfe-ef5a849bf477
- **Firebase Console:** https://console.firebase.google.com/project/ifdatabase
- **shadcn/ui Docs:** https://ui.shadcn.com
- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **React Query Docs:** https://tanstack.com/query/latest/docs/react
- **TipTap Docs:** https://tiptap.dev
- **Vite Docs:** https://vitejs.dev

---

## Questions for Human Developers

When working on this project, clarify these points with the team:

1. **Authentication:** What authentication method should be used? (Email/password, Google OAuth, etc.)
2. **User Roles:** What role-based permissions are needed? (Admin, Editor, Viewer, etc.)
3. **Image Hosting:** Should we implement Firebase Storage, or continue with external URLs?
4. **Categories:** Are the current categories fixed, or should they be user-manageable?
5. **Story Approval:** Is there a review/approval workflow before stories go live?
6. **Analytics:** Should Impact page show real data or remain informational?
7. **Pagination:** What's the preferred pagination style? (Page numbers, infinite scroll, load more button)
8. **Search:** Should we implement server-side search (Firebase extension) or keep client-side?

---

## Version History

**Last Updated:** 2025-12-08
**Document Version:** 1.0.0
**Codebase Branch:** `claude/claude-md-mix1fxkbflhs9ndu-014Dgv1d99CKrQAcJQzntGhS`

---

**For AI Assistants:**

When working on this codebase:
1. Always read existing files before modifying
2. Follow TypeScript conventions for new files
3. Use the Firestore service layer - never bypass it
4. Test authentication-related changes carefully (it's currently broken)
5. Maintain the dual-indexing pattern for stories
6. Use shadcn/ui components for consistency
7. Write clean, readable code with proper error handling
8. Document any new patterns or conventions
9. Ask clarifying questions if requirements are ambiguous
10. Prioritize security - never compromise on auth/authorization
