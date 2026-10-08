export type CostCity = "bangalore" | "all";
export type CostHomeType = "all" | "2bhk" | "3bhk";

export type CostPackage = {
  name: string;
  price: string;
  desc: string;
  includes: string[];
};

export type RoomCost = {
  room: string;
  essential: string;
  premium: string;
  signature: string;
};

export type CostGuideConfig = {
  city: CostCity;
  homeType: CostHomeType;
  canonicalPath: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  locationLabel: string;
  heroNote: string;
  packages: CostPackage[];
  roomCosts: RoomCost[];
  faqs: { q: string; a: string }[];
};


const packages: CostPackage[] = [
  {
    "name": "Umrah Packages",
    "price": "Request a current quote",
    "desc": "Plan your Umrah around your dates, budget, and pace. Compare accommodation, transport, and practical support before choosing the itinerary that suits you.",
    "includes": [
      "Makkah and Madinah itinerary planning",
      "Hotel and room-sharing options",
      "Flight options from your departure city",
      "Airport and intercity transfer options",
      "Pre-departure document checklist",
      "Written inclusions and exclusions"
    ]
  },
  {
    "name": "Family Umrah",
    "price": "Request a current quote",
    "desc": "Plan a family Umrah with room arrangements, manageable transfers, and a pace suited to children and older relatives. Tell us about your group so the practical details can be discussed early.",
    "includes": [
      "Family room enquiries",
      "Child and infant travel requirements",
      "Arrangement-sharing preferences",
      "Transfer planning for the group",
      "Walking-distance discussion",
      "Mobility needs reviewed before booking"
    ]
  },
  {
    "name": "Private Umrah",
    "price": "Request a current quote",
    "desc": "Discuss a private itinerary for your household or small group, with flexible travel dates and preferred accommodation. Each requested service is checked for availability before confirmation.",
    "includes": [
      "Flexible date enquiries",
      "Private transfer options",
      "Hotel preference discussion",
      "Arrangement configuration planning",
      "Tailored itinerary requests",
      "Clear service-by-service quotation"
    ]
  }
];
const faqs = [
  {
    "q": "How do I request an Umrah package?",
    "a": "Share your departure city, preferred dates, number of travellers, room-sharing preference, and budget. We will help you compare a suitable itinerary and written quotation."
  },
  {
    "q": "Are flights, meals, and transfers included?",
    "a": "Inclusions vary by itinerary. Check the named hotels, flight details, meal plan, transfers, taxes, and exclusions in your written quotation before making a payment."
  },
  {
    "q": "Can I enquire about Hajj?",
    "a": "Yes. Ask about the current season and the authorised booking route. Hajj arrangements depend on official eligibility, quota, permits, and approvals; an enquiry does not confirm a place."
  },
  {
    "q": "Is a visa or departure guaranteed?",
    "a": "No. Visa decisions and travel permissions rest with the relevant authorities. Book only after reviewing the applicable requirements and the terms of your itinerary."
  }
];
export function getCostGuideConfig(city: CostCity, homeType: CostHomeType, canonicalPath: string): CostGuideConfig {
 const label = homeType === '2bhk' ? 'Umrah' : homeType === '3bhk' ? 'Family Umrah' : 'Umrah & Travel';
 return {city,homeType,canonicalPath,title:label+' Package Guide | Zikhra Tours & Travels',description:'Compare travel arrangements, inclusions, and quotation factors for your journey from Bangalore.',h1:label+' Package Guide',intro:'Compare accommodation, travel dates, room sharing, and transport before choosing your journey. Request a personalised written quotation for current availability.',locationLabel:'Bangalore',heroNote:"Prices and inclusions depend on travel dates, airline availability, hotel selection, room sharing, and applicable approvals. Your written quotation confirms what is included.",packages,roomCosts:[
 {room:'Flights',essential:'On request',premium:'On request',signature:'On request'},
 {room:'Accommodation',essential:'Shared room options',premium:'Preferred hotel options',signature:'Private room options'},
 {room:'Ground transport',essential:'Shared transfer enquiry',premium:'Transfer options',signature:'Private transfer enquiry'},
 {room:'Meals',essential:'Confirm meal plan',premium:'Confirm meal plan',signature:'Confirm meal plan'},
 {room:'Ziyarat',essential:'On request',premium:'On request',signature:'On request'},
 {room:'Visa assistance',essential:'Confirm scope and fees',premium:'Confirm scope and fees',signature:'Confirm scope and fees'}],faqs};
}
