// src/services/latestUpdates.js
// Mock data and API service for Latest Updates.
// Can be replaced with your Node.js backend API fetch in the future.

export const latestUpdatesData = [
  {
    id: 1,
    titleEn: "Parents Orientation Session on Sunday at 10 AM.",
    titleHi: "रविवार सुबह 10 बजे अभिभावक अभिविन्यास सत्र।",
    link: "#",
  },
  {
    id: 2,
    titleEn: "Admissions for Value Education Program are now open.",
    titleHi: "मूल्य शिक्षा कार्यक्रम के लिए प्रवेश अब खुले हैं।",
    link: "#",
  },
  {
    id: 3,
    titleEn: "New Story Added: The Power of Honesty.",
    titleHi: "नई कहानी जोड़ी गई: ईमानदारी की शक्ति।",
    link: "#",
  },
  {
    id: 4,
    titleEn: "Digital Awareness Workshop starts from Monday.",
    titleHi: "सोमवार से डिजिटल जागरूकता कार्यशाला शुरू हो रही है।",
    link: "#",
  },
];

export async function getLatestUpdates() {
  // Simulated backend API response
  return Promise.resolve(latestUpdatesData);
}
