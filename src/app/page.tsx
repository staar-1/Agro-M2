// src/app/page.tsx

import { PostsList } from '@/components/PostsList';

export default function HomePage() {
  return (
    <main>
      <h1 className="text-4xl font-bold text-center my-8">Posts do Blog</h1>
      <PostsList />
    </main>
  );
}