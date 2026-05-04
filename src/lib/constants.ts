export const BUSINESS = {
  name: 'MS Exterior Services',
  phone: '(865) 320-8891',
  phoneHref: 'tel:+18653208891',
  email: 'msexteriorservices2@gmail.com',
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
  // To show YOUR business pin instead of just Knoxville: go to maps.google.com, search your business, click Share → Embed a map, and replace this URL
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207241.61!2d-84.07682059999999!3d35.9526659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885c16f1c1d17fbf%3A0x81e2f7e6e9917fcb!2sKnoxville%2C%20TN!5e0!3m2!1sen!2sus!4v1714000000000!5m2!1sen!2sus',
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
    title: 'Window Cleaning',
    slug: 'window-cleaning',
    shortDesc: 'Streak-free, crystal-clear windows inside and out.',
    icon: 'Sparkles',
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
    text: 'Got a quote fast, they showed up on time, and my house looks brand new. The siding is spotless now and curb appeal is night and day. Highly recommend!',
    date: 'January 2025',
  },
  {
    name: 'Sarah K.',
    location: 'Powell',
    rating: 5,
    text: 'I was skeptical at first but Mo and his team exceeded every expectation. The windows are spotless and the whole house looks completely refreshed. Best service in Knoxville.',
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
