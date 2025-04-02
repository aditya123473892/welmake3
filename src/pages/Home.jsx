import ProductShowcase from "../Components/Addsection";
import AutoPlayCarousel from "../Components/AutoPlayCarousel";
import Footer from "../Components/Footer";
import HeroSection from "../Components/Herosection";
import WhyWelMakeSection from "../Components/Midsection";
import WelMakeNavbar from "../Components/Navbar";
import TestimonialCarousel from "../Components/TestimonialCarousel";


export default function App() {
  return (
    <div className="">

      <WelMakeNavbar></WelMakeNavbar>
      <HeroSection></HeroSection>
      <AutoPlayCarousel/>
      <WhyWelMakeSection></WhyWelMakeSection>
      <ProductShowcase></ProductShowcase>
      <TestimonialCarousel/>
      <Footer/>
        

     
    </div>
  );
}
