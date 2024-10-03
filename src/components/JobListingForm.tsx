"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTransition } from "react";

import { JobListingType, jobListingSchema } from "@/app/server/jobListing.type";

import submitJobListing from "@/app/server/submitJobListing.server";

interface Props {
  children: React.ReactNode;
}

const JobListingForm = ({ children }: Props) => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<JobListingType>({
    resolver: zodResolver(jobListingSchema),
    defaultValues: {
      careerPageURL: "",
      experienceRequired: 0,
      hiringManager: "",
      jobTitle: "",
      recruiter: "",
      saraly: 0,
      websiteURL: "",
    },
  });

  const onSubmit = (data: JobListingType) => {
    startTransition(async () => {
      try {
        // console.log(data);
        const result = await submitJobListing(data);
      } catch (error) {
        // handle the error
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="jobTitle"
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Title</FormLabel>
              <FormControl>
                <Input placeholder="job title..." {...field} />
              </FormControl>
              <FormDescription>
                Enter your job title for your job here.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hiringManager"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hiring Manager</FormLabel>
              <FormControl>
                <Input placeholder="job title..." {...field} />
              </FormControl>
              <FormDescription>The manager for the job</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="experienceRequired"
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Experience Required</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(value) => field.onChange(Number(value))}
                  defaultValue={field.value.toString()}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Years Experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">0</SelectItem>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                The number of years required in the job posting
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {children}
        <Button isLoading={isPending} disabled={isPending} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default JobListingForm;
