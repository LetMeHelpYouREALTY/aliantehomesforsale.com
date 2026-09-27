import { alianteCommunityMap } from './community-map-config';

export const amenitiesPageFaqs = [
  {
    question: 'What grocery stores are near Aliante?',
    answer:
      "Smith's Food and Drug at 6855 N Aliante Pkwy sits in the Aliante Market Mall corridor inside ZIP 89084 — confirm drive time from the street you will buy.",
  },
  {
    question: 'How far is Aliante from the Las Vegas Strip?',
    answer:
      'From central Aliante (Nature Discovery Park area), the Strip is roughly 20–25 miles south depending on route and traffic — approximate drive time often runs 25–40 minutes; confirm on the day you tour.',
  },
  {
    question: 'Are there hospitals near Aliante?',
    answer:
      'Centennial Hills Hospital Medical Center at 6900 N Durango Dr serves northwest valley communities including Aliante — confirm drive time from your listing.',
  },
  {
    question: 'Where is the main park in Aliante?',
    answer:
      'Aliante Nature Discovery Park at 2627 Nature Park Dr is the City of North Las Vegas park in the center of the master plan, with a lake, splash pad, sports courts, and trails.',
  },
  {
    question: 'Is there golf in Aliante?',
    answer:
      'Aliante Golf Club at 3100 W Elkhorn Rd is the public 18-hole course serving Club Aliante fairway lots and surrounding Aliante villages.',
  },
  {
    question: 'How far is Aliante from Harry Reid International Airport?',
    answer:
      'Harry Reid International Airport is roughly 25–30 miles south of Aliante depending on route — approximate drive time often runs 30–45 minutes in typical traffic.',
  },
  {
    question: 'What schools serve Aliante addresses?',
    answer:
      'Attendance boundaries vary by street — CCSD campuses referenced for parts of Aliante include Brinley Middle School and Centennial High School; confirm the current map for your lot before you offer.',
  },
  {
    question: 'How do I verify drive times to Downtown Summerlin?',
    answer:
      'Downtown Summerlin is west of the Strip along the 215 — from Aliante, approximate drive time is often 25–35 minutes depending on traffic; use Google Maps the day you tour for a live estimate.',
  },
];

export type AmenityGuideSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export const amenityGuideSections: AmenityGuideSection[] = [
  {
    id: 'dining',
    title: 'Dining & entertainment',
    paragraphs: [
      'Aliante Casino + Hotel at 7300 Aliante Pkwy anchors dining and entertainment along Aliante Parkway — multiple restaurants, shows, and a spa without driving to the Strip.',
      'Centennial Hills and the Centennial corridor west of Aliante add chain restaurants and local spots — confirm which village you are buying so you know your default grocery-and-dinner loop.',
    ],
  },
  {
    id: 'parks',
    title: 'Parks & recreation',
    paragraphs: [
      `${alianteCommunityMap.center.label} at ${alianteCommunityMap.center.fullAddress} is the city park inside the master plan — lake, playgrounds, splash pad, and sports courts.`,
      'Floyd Lamb Park at Tule Springs (9200 Tule Springs Rd) and Craig Ranch Regional Park (628 W Craig Rd) add regional trails, fields, and event space within a short drive of most Aliante villages.',
    ],
  },
  {
    id: 'golf',
    title: 'Golf',
    paragraphs: [
      'Aliante Golf Club on West Elkhorn Road offers public play, clubhouse dining, and fairway lots in Club Aliante and nearby villages.',
      'Sun City Aliante 55+ includes its own recreation campus; confirm amenity access and guest rules with the association for the address you will tour.',
    ],
  },
  {
    id: 'healthcare',
    title: 'Healthcare & pharmacies',
    paragraphs: [
      'Centennial Hills Hospital Medical Center at 6900 N Durango Dr is the acute-care hospital most buyers reference for northwest Las Vegas.',
      "Smith's on Aliante Parkway includes a pharmacy counter — confirm hours for the location you will use day to day.",
    ],
  },
  {
    id: 'shopping',
    title: 'Shopping & services',
    paragraphs: [
      "Smith's Food and Drug at 6855 N Aliante Pkwy covers weekly groceries inside 89084.",
      'Centennial Hills and the 215 corridor west of Aliante add big-box stores, home improvement, and specialty retail — drive time depends on whether you are in Prominence, Paseos, or Tule Springs edge lots.',
    ],
  },
  {
    id: 'schools',
    title: 'Schools (confirm boundaries)',
    paragraphs: [
      'Aliante spans multiple Clark County School District attendance zones. Listing remarks are not a boundary guarantee.',
      'Campuses buyers often verify include J. Harold Brinley Middle School (2422 Maverick St) and Centennial High School (10200 Centennial Pkwy) — match the lot to the current CCSD map before you write an offer.',
    ],
  },
  {
    id: 'commute',
    title: 'Commute & regional access',
    paragraphs: [
      'Aliante Parkway and the 215 Beltway connect Aliante to Centennial Hills, Summerlin, and the Las Vegas Strip — approximate Strip drive time is often 25–40 minutes.',
      'Harry Reid International Airport is south of the valley; approximate drive time from Aliante is often 30–45 minutes depending on time of day.',
      'Downtown Summerlin and the Summerlin master plan sit west along the 215 — useful for medical specialists, dining, and employment centers outside North Las Vegas.',
    ],
  },
];
