import type { CollectionEntry } from 'astro:content';

export function getPostUrl(post: CollectionEntry<'blog'>): string {
  return post.data.legacyUrl ?? `/blog/${post.slug}/`;
}
