import dynamic from "next/dynamic";
import DashboadHome from "@/components/dashboard-pages/candidates-dashboard/dashboard";

export const metadata = {
  title: "Candidates Dashboard || BalletMatch - Job Borad React NextJS Template",
  description: "BalletMatch - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <DashboadHome />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
