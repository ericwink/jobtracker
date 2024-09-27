"use server";
import { JobListingType, jobListingSchema } from "./jobListing.type";
import { simulateDelay } from "@/lib/simulateDelay";

const submitJobListing = async (data: JobListingType) => {
  // checking the user is auth'd
  // checking they have the right security roles
  console.log(data)

  const result = jobListingSchema.safeParse(data)

  if(result.error){
    console.log((result.error)) // minor change
  }
  
  console.log('good job no errors')

 await simulateDelay()
  
};

export default submitJobListing
