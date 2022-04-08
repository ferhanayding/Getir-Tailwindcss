import Campanigns from "./componenta/campanigns/Campanigns";
import Cards from "./componenta/cards/Cards";
import Categories from "./componenta/categories/Categories";
import Favorites from "./componenta/favorites/Favorites";
import Footer from "./componenta/footer/Footer";
import Header from "./componenta/header/Header";
import HeroSection from "./componenta/heroSection/HeroSection";
import MobileApp from "./componenta/mobileApp/MobileApp";
import { useWindowWidth } from "@react-hook/window-size";
function App() {
  const windowWidth = useWindowWidth();
  return (
    <>
      <Header />
      {windowWidth <= 1023 && <Campanigns />}
      <HeroSection />
      <div className=" xl:mx-[6rem] lg:mx-[4rem] md:mx-[2rem] sm:mx[0rem] 2xl:mx-[8rem]">
        <Categories />
        {windowWidth >= 1024 && <Campanigns />}
        <Favorites />
        <MobileApp />
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;
