export const storePhoneDigits = '918112780010';
export const storePhoneDisplay = '+91 81127 80010';
export const storeArea = 'Aliganj';
export const storeCity = 'Lucknow';
export const storeState = 'Uttar Pradesh';
export const storeAddress = `${storeArea}, ${storeCity}, ${storeState}, India`;
export const coreLucknowAreas = [
  'Chowk',
  'Aminabad',
  'Kaiserbagh',
  'Nakhas',
  'Husainabad',
  'Saadatganj',
  'Aliganj',
  'Hazratganj',
  'Indira Nagar',
  'Gomti Nagar',
];
export const lucknowSeoKeywords = [
  'attar shop in Lucknow',
  'best attar in Lucknow',
  'online attar shop Lucknow',
  'attar delivery Lucknow',
  'alcohol free attar Lucknow',
  'oud attar Lucknow',
  'musk attar Lucknow',
  'rose attar Lucknow',
  'sandalwood attar Lucknow',
  'luxury attar Lucknow',
  'Arabic attar Lucknow',
  'attar gift hamper Lucknow',
  'Eid attar Lucknow',
  'Jumma attar Lucknow',
  'nikah gift attar Lucknow',
  'attar in Chowk Lucknow',
  'attar in Aminabad Lucknow',
  'attar in Kaiserbagh Lucknow',
  'attar in Nakhas Lucknow',
  'attar in Husainabad Lucknow',
  'attar in Saadatganj Lucknow',
  'attar in Aliganj Lucknow',
  'attar in Hazratganj Lucknow',
  'attar in Gomti Nagar Lucknow',
  'attar in Indira Nagar Lucknow',
];
export const lucknowAudienceLine =
  'Alcohol-free attars selected for Eid gifting, Jumma wear, nikah moments, daily use, and fragrance lovers across old Lucknow and new Lucknow.';

export const brandStoryLine =
  'Zahra Attars brings together classic oud depth, clean white musk, floral rose softness, and gifting-friendly blends in a format that feels elegant, local, and easy to order.';

export function createWhatsAppLink(message: string) {
  return `https://wa.me/${storePhoneDigits}?text=${encodeURIComponent(message)}`;
}
