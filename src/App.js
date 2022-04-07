import Campanigns from "./componenta/campanigns/Campanigns";
import Cards from "./componenta/cards/Cards";
import Categories from "./componenta/categories/Categories";
import Favorites from "./componenta/favorites/Favorites";
import Footer from "./componenta/footer/Footer";
import Header from "./componenta/header/Header";
import HeroSection from "./componenta/heroSection/HeroSection";
import MobileApp from "./componenta/mobileApp/MobileApp";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Categories />
      <Campanigns />
      <Favorites />
      <MobileApp />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
