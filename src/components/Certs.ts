import cert1Src from "../img/cert-1.png";
import cert2Src from "../img/cert-2.png";
import cert3Src from "../img/cert-3.png";

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
    title: "Python Certified: Associate Data Analyst with Python",
    image: cert2Src.src,
    url: "https://www.credly.com/badges/d8a70381-6213-4752-a16a-d93fe141e728",
    tags: ["Data Analysis", "Python", "Pandas", "SQL"]
  },
  {
    id: 2,
    title: "Coursera: Google Business Intelligence",
    image: cert1Src.src,
    url: "https://www.credly.com/badges/df2933f5-516c-4e35-936e-45ecc7862875",
    tags: ["Data Analytics", "Tableau", "Power BI", "SQL"]
  },
  {
    id: 3,
    title: "CSSC Certified: Lean Six Sigma Green Belt",
    image: cert3Src.src,
    url: "https://badgr.com/public/assertions/B42VPRpaQV6Vz6WuYFB6ug",
    tags: ["Structured problem-solving", "Process Improvement", "Change Management"]
  }
];
