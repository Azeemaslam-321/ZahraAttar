import { useEffect } from 'react';
import { storeAddress, storeCity, storePhoneDisplay, storePhoneDigits, storeState } from '../data/storeInfo';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  type?: 'website' | 'article';
  image?: string;
}

function updateMeta(selector: string, content: string) {
  const tag = document.head.querySelector(selector);
  if (tag) {
    tag.setAttribute('content', content);
  }
}

function ensureMeta(selector: string, attributeName: 'name' | 'property', attributeValue: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attributeName, attributeValue);
    document.head.appendChild(tag);
  }
  return tag;
}

function ensureCanonical() {
  let tag = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', 'canonical');
    document.head.appendChild(tag);
  }
  return tag;
}

export default function Seo({
  title,
  description,
  keywords = [],
  path = '/',
  type = 'website',
  image = '/images/hero-attar.jpg',
}: SeoProps) {
  useEffect(() => {
    const baseUrl = window.location.origin;
    const normalizedPath = path === '/' ? '/' : `/${path.replace(/^\/+/, '')}`;
    const canonicalUrl = `${baseUrl}${normalizedPath}`;
    const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

    document.title = title;
    updateMeta('meta[name="description"]', description);
    updateMeta('meta[name="keywords"]', keywords.join(', '));
    updateMeta('meta[property="og:title"]', title);
    updateMeta('meta[property="og:description"]', description);

    ensureMeta('meta[property="og:type"]', 'property', 'og:type').setAttribute('content', type);
    ensureMeta('meta[property="og:url"]', 'property', 'og:url').setAttribute('content', canonicalUrl);
    ensureMeta('meta[property="og:image"]', 'property', 'og:image').setAttribute('content', imageUrl);
    ensureMeta('meta[name="robots"]', 'name', 'robots').setAttribute('content', 'index, follow, max-image-preview:large');
    ensureMeta('meta[name="twitter:card"]', 'name', 'twitter:card').setAttribute('content', 'summary_large_image');
    ensureMeta('meta[name="twitter:title"]', 'name', 'twitter:title').setAttribute('content', title);
    ensureMeta('meta[name="twitter:description"]', 'name', 'twitter:description').setAttribute('content', description);
    ensureMeta('meta[name="twitter:image"]', 'name', 'twitter:image').setAttribute('content', imageUrl);

    ensureCanonical().setAttribute('href', canonicalUrl);

    const scriptId = 'zahra-ld-json';
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Store',
          name: 'Zahra Attars',
          description,
          image: imageUrl,
          telephone: storePhoneDisplay,
          url: canonicalUrl,
          address: {
            '@type': 'PostalAddress',
            streetAddress: storeAddress,
            addressLocality: storeCity,
            addressRegion: storeState,
            addressCountry: 'IN',
          },
          areaServed: ['Lucknow', 'Chowk', 'Aminabad', 'Kaiserbagh', 'Nakhas', 'Husainabad', 'Saadatganj', 'Aliganj', 'Hazratganj', 'Indira Nagar', 'Gomti Nagar'],
          sameAs: [`https://wa.me/${storePhoneDigits}`],
        },
        {
          '@type': 'WebSite',
          name: 'Zahra Attars',
          url: baseUrl,
          inLanguage: 'en-IN',
          potentialAction: {
            '@type': 'SearchAction',
            target: `${baseUrl}/collection?category={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        },
        {
          '@type': 'CollectionPage',
          name: title,
          url: canonicalUrl,
          description,
        },
      ],
    };

    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const activeScript = document.getElementById(scriptId);
      if (activeScript) {
        activeScript.remove();
      }
    };
  }, [description, image, keywords, path, title, type]);

  return null;
}
