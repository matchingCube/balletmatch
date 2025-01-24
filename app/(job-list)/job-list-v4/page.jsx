import dynamic from "next/dynamic";
import JobList from "@/components/job-listing-pages/job-list-v4";

export const metadata = {
  title: "Job List V4 || BalletMatch - Job Borad React NextJS Template",
  description: "BalletMatch - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <JobList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
