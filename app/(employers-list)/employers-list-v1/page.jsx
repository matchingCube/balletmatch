import dynamic from "next/dynamic";
import EmployersList from "@/components/employers-listing-pages/employers-list-v1";

export const metadata = {
  title: "Employers List V1 || BalletMatch - Job Board React NextJS Template",
  description: "BalletMatch - Job Board React NextJS Template",
};

const index = () => {
  return (
    <>
      <EmployersList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
