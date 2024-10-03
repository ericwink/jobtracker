import {z} from 'zod'

export const jobListingSchema = z.object({
    websiteURL: z.string(),
    careerPageURL: z.string(),
    jobTitle: z
      .string()
      .trim()
      .min(2, { message: "Job Title must have a minimum of two characters" }),
    experienceRequired: z.number(),
    saraly: z.number(),
    hiringManager: z.string(),
    recruiter: z.string(),
    //   expirationDate eventually
  });
  
export type JobListingType = z.infer<typeof jobListingSchema>;