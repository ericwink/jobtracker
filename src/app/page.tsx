import JobListingForm from "@/components/JobListingForm";
import DataDisplay from "@/components/DataDisplay";
import { Suspense } from "react";

const Home = () => {
  return (
    <div>
      <p>This is the main page</p>
      <JobListingForm>
        <p>this is the thing</p>
      </JobListingForm>
      <Suspense fallback={<div>THIS IS THE MANUAL SUSPENSE...</div>}>
        <DataDisplay />
      </Suspense>
    </div>
  );
};

export default Home;
