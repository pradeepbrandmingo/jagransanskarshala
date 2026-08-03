// src/services/galleryService.js
// Gallery API service and data store.
// Can be easily swapped with direct Node.js/Express backend API endpoint calls.

export const galleryTabs = [
  {
    id: "all",
    title: {
      hi: "संस्कृति से संस्कार",
      en: "Sanskriti Se Sanskar",
    },
    subtitle: {
      hi: "(All Images)",
      en: "(All Images)",
    },
    year: "All",
  },
  {
    id: "2020",
    title: {
      hi: "Sanskrti Se Sanskar",
      en: "Sanskrti Se Sanskar",
    },
    subtitle: {
      hi: "(2020)",
      en: "(2020)",
    },
    year: "2020",
  },
  {
    id: "2021",
    title: {
      hi: "Desh Se Hum Aur",
      en: "Desh Se Hum Aur",
    },
    subtitle: {
      hi: "Humse Desh Banta Hai (2021)",
      en: "Humse Desh Banta Hai (2021)",
    },
    year: "2021",
  },
  {
    id: "2022",
    title: {
      hi: "Digital Sanskar",
      en: "Digital Sanskar",
    },
    subtitle: {
      hi: "(2022)",
      en: "(2022)",
    },
    year: "2022",
  },
  {
    id: "2023",
    title: {
      hi: "Urja Saksharta",
      en: "Urja Saksharta",
    },
    subtitle: {
      hi: "(2023)",
      en: "(2023)",
    },
    year: "2023",
  },
  {
    id: "2024",
    title: {
      hi: "Sanskarshala 2024",
      en: "Sanskarshala 2024",
    },
    subtitle: {
      hi: "",
      en: "",
    },
    year: "2024",
  },
  {
    id: "2025",
    title: {
      hi: "Sanskarshala 2025",
      en: "Sanskarshala 2025",
    },
    subtitle: {
      hi: "",
      en: "",
    },
    year: "2025",
    isLatest: true,
  },
];

// Currently keeping images ONLY for Sanskarshala 2025 as requested
export const initialGalleryData = [
  {
    id: "img-2025-1",
    title: "Sanskarshala 2025 Opening Ceremony",
    url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    year: "2025",
    tabId: "2025",
    createdAt: "2025-05-15T10:00:00Z",
  },
  {
    id: "img-2025-2",
    title: "Student Interactive Session",
    url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    year: "2025",
    tabId: "2025",
    createdAt: "2025-05-14T12:30:00Z",
  },
  {
    id: "img-2025-3",
    title: "Digital Consciousness Workshop",
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    year: "2025",
    tabId: "2025",
    createdAt: "2025-05-12T09:15:00Z",
  },
  {
    id: "img-2025-4",
    title: "School Students Q&A",
    url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    year: "2025",
    tabId: "2025",
    createdAt: "2025-05-10T14:20:00Z",
  },
  {
    id: "img-2025-5",
    title: "Plantation & Value Drive",
    url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    year: "2025",
    tabId: "2025",
    createdAt: "2025-05-08T11:00:00Z",
  },
  {
    id: "img-2025-6",
    title: "Group Photo with Mentors",
    url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    year: "2025",
    tabId: "2025",
    createdAt: "2025-05-05T16:45:00Z",
  },
  {
    id: "img-2025-7",
    title: "Adolescent Mindset Session",
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    year: "2025",
    tabId: "2025",
    createdAt: "2025-05-03T13:10:00Z",
  },
  {
    id: "img-2025-8",
    title: "Audience Interaction",
    url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    year: "2025",
    tabId: "2025",
    createdAt: "2025-05-01T15:30:00Z",
  },
];

export async function getGalleryImages(year = "All") {
  let filtered = [...initialGalleryData];
  if (year && year !== "All" && year !== "all") {
    filtered = filtered.filter((img) => img.year === year);
  }
  filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return Promise.resolve(filtered);
}
