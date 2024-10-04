import "server-only";

import { simulateDelay } from "@/lib/simulateDelay";
import { JobListingType } from "./jobListing.type";
const fakeData: JobListingType[] = [
  {
    jobTitle: "Job Title One",
    hiringManager: "Hiring Manager One",
    experienceRequired: 3,
  },
  {
    jobTitle: "Job Title Two",
    hiringManager: "Hiring Manager Two",
    experienceRequired: 3,
  },
  {
    jobTitle: "Job Title Three",
    hiringManager: "Hiring Manager Three",
    experienceRequired: 3,
  },
];

export const getData = async () => {
  await simulateDelay(1600);
  return fakeData;
};
