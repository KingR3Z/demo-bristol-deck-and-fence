export const client = {
  // Business Details
  name: "Bristol Deck and Fence",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Bristol.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07974 711493",
  email: "",
  website: "",

  // Location
  address: "Bristol",
  city: "Bristol",
  county: "",
  postcode: "",
  basedIn: "Bristol",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5.0",
  reviewCount: "7",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Jason Pearce", rating: 5, text: "John was friendly, explained the job well, did everything on time and was well-priced. Very happy with the outcome. I just need to coat it and get some decor the space now!", date: "4 months ago", badge: "Local Guide" },
    { name: "Oliver Montgomery", rating: 5, text: "John did a cracking job on our rear deck and fence that needed to be replaced. Provided solid suggestions / improvements over what we originally asked for and came in on the original cost / timeframe he laid out from the start with full transparency along the way. Although not the cheapest around you definitely get what you pay for and Johns attention to detail was excellent. Considering nothing is square in our garden in any direction, everything in the construction is tight and consistent. Would fully recommend.", date: "Edited 4 months ago" },
    { name: "Robin Marlin", rating: 5, text: "Hi John and his team were amazing. The job was finished really well and they delivered everything they said. Would highly recommend. Great business.", date: "4 months ago" },
    { name: "James Wilson", rating: 5, text: "John recently installed some decking for us. The whole experience was completely hassle free - turned up exactly when he said he would, provided us a very competitive price and did a superb job installing it  - All in the timelines he quoted us. Highly recommend.", date: "6 months ago" },
    { name: "Chris Pelentrides", rating: 5, text: "John and Jenny have done a wonderful job for me which exceeded my expectations. Both are incredibly hard working and diligent.  The price they originally quoted for the work was reasonable and very competitive. This is a trustworthy firm who I have no hesitation in recommending.", date: "6 months ago" },
    { name: "Shirley Seronni", rating: 5, text: "We needed an emergency repair, and even on a Sunday, John was able to assist us. His service was exceptional, and beyond that, he is a trustworthy, reliable, and highly professional individual. Thank you, John!", date: "9 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Bristol Deck and Fence | Landscaper in Bristol",
    description: "Professional landscaper in Bristol. 5.0-star rated on Google. Call for a free quote.",
  },
};
