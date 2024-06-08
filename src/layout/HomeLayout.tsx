import WinterPostCard from "@/components/Home/WinterPostCard";
import Header from "@/components/Home/Header";
import Container from "@/utils/Container";
import TestimonialCarousel from "@/components/Home/Testimonial";
import Gallery from "@/components/Home/Gallery";
import AboutUs from "@/components/Home/AboutUs";
import ColdWeatherSafety from "@/components/Home/SafetyTips";
import SuccessStories from "@/components/Home/SuccessStories";
import Footer from "@/components/Footer";

const HomeLayout = () => {
  return (
    <div>
      <Container>
        <Header />
        <WinterPostCard />
        <TestimonialCarousel />
        <Gallery />
        <AboutUs />
        <ColdWeatherSafety />
        <SuccessStories />
      </Container>
      <Footer />
    </div>
  );
};

export default HomeLayout;
