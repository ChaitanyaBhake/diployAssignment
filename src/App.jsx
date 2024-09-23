
import chatBotLogo from './assets/mobileLogo.svg';
import AboutUs from './sections/AboutUs';
import ConnectYourStore from './sections/ConnectYourStore';
import Footer from './sections/Footer';
import HeroSection from './sections/HeroSection';
import MakeMoney from './sections/MakeMoney';
import Navbar from './sections/Navbar';
import Products from './sections/Products';
import Testimonials from './sections/Testimonials';

function App() {
  return (
    <div className="w-full h-full mx-auto relative  ">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Products />
      <ConnectYourStore />
      <Testimonials />
      <MakeMoney />
      <Footer />

      <div className="chatBotLogo bottom-0 left-0 fixed p-8">
        <img
          src={chatBotLogo}
          alt="chatBotLogo"
          width={35}
          height={35}
          className=" rounded-full cursor-pointer"
          style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}
        />
      </div>
    </div>
  );
}

export default App;
