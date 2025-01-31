import dynamic from "next/dynamic";

import LogIn from "@/components/pages-menu/login";

export const metadata = {
  title: 'Login || BalletMatch - Job Board React NextJS Template',
  description:
    'BalletMatch - Job Board React NextJS Template',
  
}



const index = () => {
  return (
    <>
      
      <LogIn />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
