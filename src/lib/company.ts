/** Verified company contact details; shared by visible content and structured data. */
export const COMPANY = {
  name: "Zikhra Tours & Travels",
  email: "zikhraofficial@gmail.com",
  phone: "+919886579923",
  phoneLabel: "9886579923",
  locality: "RT Nagar, Bangalore",
  streetAddress: "Shop No 1, 1st Floor, 10/1, 10th Cross, LR Bande C L Ramaiah Layout, RT Nagar, Post",
  city: "Bengaluru",
  region: "Karnataka",
  postalCode: "560032",
  address: "Shop No 1, 1st Floor, 10/1, 10th Cross, LR Bande C L Ramaiah Layout, RT Nagar, Post, Bengaluru, Karnataka 560032",
};
export const OFFICE_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address)}`;
