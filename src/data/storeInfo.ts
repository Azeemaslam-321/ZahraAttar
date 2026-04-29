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
  'alcohol free attar Lucknow',
  'oud attar Lucknow',
  'musk attar Lucknow',
  'rose attar Lucknow',
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
];
export const lucknowAudienceLine =
  'Alcohol-free attars for Eid, Jumma, nikah gifting, daily wear, and fragrance lovers across Lucknow.';

export function createWhatsAppLink(message: string) {
  return `https://wa.me/${storePhoneDigits}?text=${encodeURIComponent(message)}`;
}
