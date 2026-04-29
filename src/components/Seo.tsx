import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string[];
}

function updateMeta(selector: string, content: string) {
  const tag = document.head.querySelector(selector);
  if (tag) {
    tag.setAttribute('content', content);
  }
}

export default function Seo({ title, description, keywords = [] }: SeoProps) {
  useEffect(() => {
    document.title = title;
    updateMeta('meta[name="description"]', description);
    updateMeta('meta[name="keywords"]', keywords.join(', '));
    updateMeta('meta[property="og:title"]', title);
    updateMeta('meta[property="og:description"]', description);
  }, [description, keywords, title]);

  return null;
}
