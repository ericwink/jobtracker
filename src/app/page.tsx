import JobListingForm from "@/components/JobListingForm";
import DataDisplay from "@/components/DataDisplay";
import { Suspense } from "react";
import JobListingDisplay from "./JobListingDisplay";

const Home = async () => {
  return (
    <div>
      <p>This is the main page</p>
      <JobListingForm />
      <Suspense fallback={<div>THIS IS THE MANUAL SUSPENSE...</div>}>
        <DataDisplay />
      </Suspense>
      <Suspense fallback={<div>Loading the job listings...</div>}>
        <JobListingDisplay />
      </Suspense>
    </div>
  );
};

export default Home;
