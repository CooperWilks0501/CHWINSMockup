export const businessInfo = {
  name: "CHW Insurance Group",
  tagline: "Home • Auto • Business",
  phone: "803.345.7671",
  phoneHref: "tel:+18033457671",
  addressLine1: "203 Amicks Ferry Road Suite 100",
  addressLine2: "Chapin, SC 29036",
  email: "info@chwinsurancegroup.com",
  yearFounded: 2007,
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Personal Insurance", href: "/personal-insurance" },
  { label: "Commercial", href: "/commercial" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export const aboutCopy = [
  "Our team has served the insurance needs of South Carolina since 2007. We are an independent insurance agency offering quotes and service for all lines of insurance coverage. At CHW Insurance Group, we make insurance easy.",
  "We are your one-stop shop for all your insurance needs. From personal insurance coverage to business insurance, we do it all. We help provide you coverage options that meet your needs and budget. With our broad range of carriers, our team is ready to work with you to customize a package specific to your individual needs.",
  "With a variety of offerings to choose from, we're sure you'll be happy working with us. If you are searching for a new insurance agency located in South Carolina, give us a call today. We would be glad to sit down and look at your current policy and see if we can help save you money.",
];

export type ServiceItem = {
  key: string;
  title: string;
  description: string;
};

export const personalInsurance: ServiceItem[] = [
  {
    key: "auto",
    title: "Auto Insurance",
    description:
      "Get quality auto insurance that meets your coverage needs and your budget. Let us save you time by finding the best policy for you. Our experienced team will find you the savings you need without sacrificing coverage. For low-cost car insurance from knowledgeable agents, call us or request a quote today.",
  },
  {
    key: "home",
    title: "Homeowners Insurance",
    description:
      "We provide complete home insurance coverage to ensure your valuable house is protected, should the unexpected happen. We will look for discounts to save you as much money as possible. Whether you have a condominium, house or rental property, depend on our professional agents to find you the perfect coverage you deserve.",
  },
  {
    key: "renters",
    title: "Renters Insurance",
    description:
      "We provide complete home insurance coverage to ensure your rental property is protected, should the unexpected happen. We will look for discounts to save you as much money as possible. You can depend on our professional agents to find you the perfect coverage you deserve.",
  },
  {
    key: "life",
    title: "Life Insurance",
    description:
      "Our team of licensed life insurance agents is dedicated to finding you dependable life insurance that you and your family can afford. We offer individual and group insurance packages including term and whole life insurance. Get great rates without compromising on coverage.",
  },
  {
    key: "flood",
    title: "Flood Insurance",
    description:
      "Since floods can happen anywhere, at any time, we can help you protect your home or business. Flood insurance policies provide coverage for the structure of the home or business and contents lost in a flood. These policies are available whether you rent or own your home.",
  },
  {
    key: "umbrella",
    title: "Umbrella Insurance",
    description:
      "Umbrella insurance is extra liability insurance. It is designed to help protect you from major claims and lawsuits and as a result, it helps protect your assets and your future. It provides additional liability coverage above the limits of your homeowners, auto, and boat insurance policies.",
  },
  {
    key: "boat",
    title: "Boat Insurance",
    description:
      "On your boat, you're the captain of your own destiny. Adequate coverage is essential to protect yourself, your boat and your fellow sailors. We can help you determine the right coverage for your specific situation.",
  },
  {
    key: "health",
    title: "Health Insurance",
    description:
      "Health insurance today can be very confusing, but we are here to help you face it and provide answers to your questions. We can help you with group health plan quotes, as well as private health plan quotes and a range of coverage options to meet your needs.",
  },
];

export const commercialCopy = [
  "CHW Insurance Group provides a wide variety of commercial insurance options for businesses small and large. From workers compensation to commercial automobile insurance, we offer several customized, affordable policies specifically to fit your needs.",
  "We specialize in searching high and low for the commercial insurance solutions you are entitled to. We'll customize an insurance program to help protect the business you've built. We get to know you and your business, matching your needs with an insurance program.",
  "Call us today for a free quote.",
];

export const commercialOfferings: ServiceItem[] = [
  {
    key: "general-liability",
    title: "General Liability",
    description:
      "Protects your business from claims of bodily injury, property damage, and personal injury that can arise from your operations.",
  },
  {
    key: "workers-comp",
    title: "Workers Compensation",
    description:
      "Required coverage that helps pay for medical care and lost wages if an employee is injured on the job.",
  },
  {
    key: "commercial-auto",
    title: "Commercial Auto",
    description:
      "Coverage for vehicles owned and operated by your business, from a single van to a full fleet.",
  },
  {
    key: "property",
    title: "Commercial Property",
    description:
      "Protects the building you own or lease and the equipment, inventory, and furnishings inside.",
  },
  {
    key: "bop",
    title: "Business Owners Policy",
    description:
      "A bundled policy that combines general liability and property coverage at a typically lower cost than buying them separately.",
  },
  {
    key: "professional",
    title: "Professional Liability",
    description:
      "Also known as Errors & Omissions, this protects service-based businesses from claims of negligence or mistakes in professional work.",
  },
];

export type Testimonial = {
  name: string;
  source: string;
  yearsAgo: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Jill Atkins",
    source: "Google Review",
    yearsAgo: "4 years ago",
    quote:
      "Brenda is a gem! She goes above and beyond to help me with my policies. She has a wonderful personality and is always so friendly and caring. I work in the insurance industry myself in software and I just can't say enough how impressed I am with the excellent customer service Brenda provides!",
  },
  {
    name: "Brandy Lee",
    source: "Google Review",
    yearsAgo: "7 years ago",
    quote:
      "Wonderful customer service from the family of CHW. Always respond quickly to any random request I've had for my business and personal insurances.",
  },
  {
    name: "Greg Wallace",
    source: "Google Review",
    yearsAgo: "6 years ago",
    quote:
      "My wife and I are extremely satisfied with the professional service and competitive rates provided for our auto's, they showed integrity in recommending we stay with our current home owners policy provider.",
  },
];
