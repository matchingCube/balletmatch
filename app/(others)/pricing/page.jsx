import dynamic from "next/dynamic";

import Pricing from "@/components/pages-menu/pricing";

export const metadata = {
  title: 'Pricing || BalletMatch - Job Board React NextJS Template',
  description:
    'BalletMatch - Job Board React NextJS Template',
  
}



const index = () => {
  return (
    <>
      
      <Pricing />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
