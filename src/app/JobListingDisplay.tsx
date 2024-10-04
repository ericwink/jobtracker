import { getData } from "./server/getData.server";

const JobListingDisplay = async () => {
  const data = await getData();
  return <div>{JSON.stringify(data)}</div>;
};

export default JobListingDisplay;
