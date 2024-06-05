import WinterPostCard from "@/components/Home/WinterPostCard";
import Header from "@/pages/Header";
import Container from "@/utils/Container";

const HomeLayout = () => {
  return (
    <Container>
      <Header />
      <WinterPostCard />
    </Container>
  );
};

export default HomeLayout;
