"use server";
import { JobListingType, jobListingSchema } from "./jobListing.type";
import { simulateDelay } from "@/lib/simulateDelay";
import { revalidatePath } from "next/cache";
import { fakeData } from "./fakeData";

const submitJobListing = async (data: JobListingType) => {
  try {
    // checking the user is auth'd
    // check for security role
    const correctSecurityRole = true;

    if (!correctSecurityRole) {
      return { error: "You are not authorized to submit a job listing" };
    }

    const result = jobListingSchema.safeParse(data);
    console.log(result);
    if (result.error) {
      return { error: result.error.issues };
    }

    await simulateDelay();
    fakeData.push(result.data);
    console.log(fakeData);
  } catch (error: any) {
    console.log("Error in submitJobListing:", error);
    return { error: "Something went wrong! Please try again" };
  }

  revalidatePath("/");
};

export default submitJobListing;
