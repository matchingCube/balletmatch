import dynamic from "next/dynamic";
import PostJob from "@/components/dashboard-pages/employers-dashboard/post-jobs";

export const metadata = {
  title: "Post Jobs || BalletMatch - Job Borad React NextJS Template",
  description: "BalletMatch - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <PostJob />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
