import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { getData } from "./server/getData.server";

const JobListingDisplay = async () => {
  const data = await getData();
  console.log(data);
  return (
    <>
      {data.map((e) => (
        <Card className="mb-3" key={e.jobTitle}>
          <CardHeader>
            <CardTitle>{e.jobTitle}</CardTitle>
            {/* <CardDescription>Bogus description</CardDescription> */}
          </CardHeader>
          <CardContent>
            <p>Hiring Manager: {e.hiringManager}</p>
            <p>Experience Required: {e.experienceRequired}</p>
          </CardContent>
          {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
        </Card>
      ))}
    </>
  );
};

export default JobListingDisplay;
