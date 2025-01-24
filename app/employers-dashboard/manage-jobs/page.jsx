import dynamic from "next/dynamic";
import ManageJobs from "@/components/dashboard-pages/employers-dashboard/manage-jobs";

export const metadata = {
  title: "Manage Jobs || BalletMatch - Job Borad React NextJS Template",
  description: "BalletMatch - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <ManageJobs />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
