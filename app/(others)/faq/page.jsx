import dynamic from "next/dynamic";

import Faq from "@/components/pages-menu/faq";

export const metadata = {
  title: 'Faq || BalletMatch - Job Board React NextJS Template',
  description:
    'BalletMatch - Job Board React NextJS Template',
  
}



const index = () => {
  return (
    <>
      
      <Faq />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
