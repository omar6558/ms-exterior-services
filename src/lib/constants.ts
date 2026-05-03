export const BUSINESS = {
  name: 'MS Exterior Services',
  phone: '(865) 320-8891',
  phoneHref: 'tel:+18653208891',
  email: 'info@msexteriorservices.com', // SWAP: your real email
  ownerName: 'Mo',
  address: 'Knoxville, TN',
  serviceArea: [
    'Knoxville',
    'Maryville',
    'Oak Ridge',
    'Farragut',
    'Powell',
    'Seymour',
    'Lenoir City',
    'Alcoa',
    'Hardin Valley',
  ],
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? '', // SWAP: add to .env.local + Vercel env vars
  googleMapsEmbedUrl: '', // SWAP: generate at maps.google.com → Share → Embed a map
  siteUrl: 'https://msexteriorservices.com', // SWAP: your real domain
};

export const SERVICES = [
  {
    title: 'Pressure Washing',
    slug: 'pressure-washing',
    shortDesc: 'Blast away years of grime from driveways, patios, and sidewalks.',
    icon: 'Droplets',
  },
  {
    title: 'Soft Washing',
    slug: 'soft-washing',
    shortDesc: "Low-pressure cleaning that's safe for siding, roofs, and painted surfaces.",
    icon: 'Wind',
  },
  {
    title: 'Gutter Cleaning',
    slug: 'gutter-cleaning',
    shortDesc: 'Clear clogs and protect your home from water damage.',
    icon: 'ArrowDownFromLine',
  },
  {
    title: 'Window Cleaning',
    slug: 'window-cleaning',
    shortDesc: 'Streak-free, crystal-clear windows inside and out.',
    icon: 'Sparkles',
  },
  {
    title: 'Roof Cleaning',
    slug: 'roof-cleaning',
    shortDesc: 'Remove black streaks, moss, and algae without voiding your warranty.',
    icon: 'Home',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Jennifer M.',
    location: 'West Knoxville',
    rating: 5,
    text: 'MS Exterior completely transformed our driveway and siding. They were on time, professional, and the results were unbelievable. I will absolutely use them again.',
    date: 'March 2025',
  },
  {
    name: 'David R.',
    location: 'Farragut',
    rating: 5,
    text: 'Got a quote fast, they showed up on time, and my house looks brand new. The roof cleaning alone made a huge difference. Highly recommend!',
    date: 'January 2025',
  },
  {
    name: 'Sarah K.',
    location: 'Powell',
    rating: 5,
    text: 'I was skeptical at first but Mo and his team exceeded every expectation. The windows are spotless and the gutters flow perfectly. Best service in Knoxville.',
    date: 'February 2025',
  },
  {
    name: 'Mike T.',
    location: 'Oak Ridge',
    rating: 5,
    text: 'Super professional, showed up on time, and left no mess behind. My deck and concrete patio look better than they did when we first moved in. 10/10.',
    date: 'April 2025',
  },
];
