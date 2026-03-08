export interface Cert {
  id: number;
  title: string;
  image: string;
  url: string;
  tags: string[];
}

export const certs: Cert[] = [
  {
    id: 1,
    title: "Coursera: Google Business Intelligence",
    image: "/img/portfolio/cert-1.jpg",
    url: "https://www.credly.com/badges/df2933f5-516c-4e35-936e-45ecc7862875",
    tags: ["Data Analytics", "Tableau", "SQL"]
  },
  {
    id: 2,
    title: "Python Certified: Associate Data Analyst with Python",
    image: "/img/portfolio/cert-2.jpg",
    url: "https://www.credly.com/badges/d8a70381-6213-4752-a16a-d93fe141e728",
    tags: ["Data Analysis", "Pandas", "SQL"]
  },
  {
    id: 3,
    title: "CSSC Certified: Lean Six Sigma Green Belt",
    image: "/img/portfolio/cert-3.jpg",
    url: "https://badgr.com/public/assertions/B42VPRpaQV6Vz6WuYFB6ug",
    tags: ["Process Improvement", "Operational Efficiency", "Change Management"]
  }
];
