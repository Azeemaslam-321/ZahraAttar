import CollectionGallery from '../components/CollectionGallery';
import Seo from '../components/Seo';
import { lucknowSeoKeywords } from '../data/storeInfo';

export default function CollectionPage() {
  return (
    <>
      <Seo
        title="Attar Collection in Lucknow | Oud, Musk, Rose & More"
        description="Browse Zahra Attars collection for Lucknow with oud, musk, rose, sandalwood, gift hampers, and easy product-first shopping for daily wear, Jumma, Eid, and gifting."
        keywords={lucknowSeoKeywords}
        path="/collection"
      />

      <CollectionGallery
        accentLabel="Lucknow Collection"
        title="Original attars, gift hampers, and everyday favourites"
        description="Explore Zahra Attars with real product variety including oud, rose, musk, sandalwood, and curated gift hampers. This collection is arranged for easy browsing so customers in Lucknow can quickly find daily wear, festive gifting, and signature fragrances."
      />
    </>
  );
}
