"use server";
import { JobListingType, jobListingSchema } from "./jobListing.type";
import { simulateDelay } from "@/lib/simulateDelay";

const submitJobListing = async (data: JobListingType) => {
  try {
    // checking the user is auth'd
    // check for security role
    // check fails

    const correctSecurityRole = false;

    if (!correctSecurityRole) {
      return { error: "You are not authorized to submit a job listing" };
    }

    console.log(data);

    const result = jobListingSchema.safeParse(data);

    await simulateDelay();
    if (result.error) {
      console.log(result.error); // minor change
    }

    console.log("good job no errors");
  } catch (error: any) {
    console.log("Error in submitJobListing:", error);
    return { error: "Something went wrong! Please try again" };
  }
};

export default submitJobListing;
