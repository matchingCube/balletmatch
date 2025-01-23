import Wrapper from "@/layout/Wrapper";
import Home from "@/components/home-12";

export const metadata = {
  title: "Home || BalletMatch",
  description: "BalletMatch",
};

export default function page() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}
