import dynamic from "next/dynamic";
import Messages from "@/components/dashboard-pages/employers-dashboard/messages";

export const metadata = {
  title: "Messages || BalletMatch - Job Board React NextJS Template",
  description: "BalletMatch - Job Board React NextJS Template",
};

const index = () => {
  return (
    <>
      <Messages />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
