export const clientSite = {
  name: "Shanzey Asghar",
  firstName: "Shanzey",
  lastName: "Asghar",
  location: "Lahore, Pakistan",
  availability: "Open for Freelance & Full-time",
  email: "shanzeyasgharr@gmail.com",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"),
  tagline: "Crafting visuals that sell",
  roles: [
    "Graphic Designer",
    "Artist",
    "Amazon Graphic Designer",
    "A+ Content Designer",
    "EBC & Listing Images",
  ] as const,
  connectHeading: "Work with me",
  connectSubheading: "Pick a channel — I usually reply within a day.",
} as const;

export const clientLinks = [
  {
    id: "behance",
    slug: "behance",
    label: "Behance",
    title: "View Portfolio",
    hint: "behance.net/shanza_asghar1",
    href: "https://www.behance.net/shanza_asghar1",
    external: true,
    brandColor: "#1769FF",
  },
  {
    id: "whatsapp",
    slug: "whatsapp",
    label: "WhatsApp",
    title: "Chat on WhatsApp",
    hint: "+92 321 6842027",
    href: "https://wa.me/923216842027",
    external: true,
    brandColor: "#25D366",
  },
  {
    id: "upwork",
    slug: "upwork",
    label: "Upwork",
    title: "Hire on Upwork",
    hint: "Professional profile",
    href: "https://www.upwork.com/",
    external: true,
    brandColor: "#14A800",
  },
  {
    id: "fiverr",
    slug: "fiverr",
    label: "Fiverr",
    title: "Order on Fiverr",
    hint: "Gigs & packages",
    href: "https://www.fiverr.com/",
    external: true,
    brandColor: "#1DBF73",
  },
  {
    id: "instagram",
    slug: "instagram",
    label: "Instagram",
    title: "Follow on Instagram",
    hint: "@instagram",
    href: "https://www.instagram.com/",
    external: true,
    brandColor: "#E4405F",
  },
  {
    id: "email",
    slug: "email",
    label: "Email",
    title: "Send an Email",
    hint: "shanzeyasgharr@gmail.com",
    href: `mailto:${clientSite.email}`,
    external: false,
    brandColor: "#D4FF00",
  },
] as const;

export type ClientLinkId = (typeof clientLinks)[number]["id"];
