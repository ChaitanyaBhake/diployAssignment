import { gsap } from 'gsap';
import  { useEffect, useRef } from 'react';
import andMore from '../assets/productLogos/andMoreLogo.svg';
import bLogo from '../assets/productLogos/blogo.svg';
import duckLogo from '../assets/productLogos/duckLogo.svg';
import etsyLogo from '../assets/productLogos/etsyLogo.svg';
import printifyLogo from '../assets/productLogos/printifyLogo.svg';
import shopiFyLogo from '../assets/productLogos/shopifyLogo.svg';
import sqSpaceLogo from '../assets/productLogos/sqSpaceLogo.svg';
import wixLogo from '../assets/productLogos/wixLogo.svg';
import wooLogo from '../assets/productLogos/wooLogo.svg';
import storesImg from '../assets/stores-background.svg';
import talktoSales from '../assets/talk-to-sale.svg';
import Button from '../common/Button';

const ConnectYourStore = () => {
  const iconsRef = useRef(null);

  useEffect(() => {
    const icons = gsap.utils.toArray('.icon');
    gsap.set(icons, {
      scale: 0,
      x: '-150%',
      y: '50%',
      transformOrigin: 'center center',
    });

    const handleScroll = () => {
      const rect = iconsRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        gsap.to(icons, {
          scale: 1,
          x: '0%',
          y: '0%',
          duration: 1,
          stagger: 0.3,
          ease: 'power4.out',
        });

      
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // Hover animations with GSAP for each icon
    icons.forEach((icon) => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
          scale: 1.1, 
          duration: 0.3,
          ease: 'power1.out',
        });
      });

      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
          scale: 1, 
          duration: 0.3,
          ease: 'power1.out',
        });
      });
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      icons.forEach((icon) => {
        icon.removeEventListener('mouseenter', () => {});
        icon.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div className="w-full h-full mt-5">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 justify-center lg:items-center mb-5 lg:p-0 p-7">
        <h1 className="text-3xl font-semibold">Connect Your Store</h1>
        <p className="text-slate-500 lg:p-0">
          Printify easily integrates with major e-commerce platforms and
          marketplaces
        </p>

        <div className="relative mt-[4rem] h-[65vh]" ref={iconsRef}>
          <img
            src={storesImg}
            alt="storesImg"
            className="hidden lg:block md:hidden op"
          />

          {/* All Icons */}
          <div>
            <div className="icon lg:w-[6.5rem] lg:h-[6.5rem] w-[4rem] h-[4rem] rounded-xl shadow-2xl absolute lg:top-[7%] lg:left-[65%] top-[1%] left-[70%] bg-white cursor-pointer">
              <img src={sqSpaceLogo} alt="sqSpaceLogo" />
            </div>

            <div className="icon lg:w-[9.3rem] lg:h-[9.3rem] w-[4.3rem] h-[4.3rem] rounded-2xl shadow-2xl absolute lg:top-[20%] lg:left-[45%] top-[21%] left-[35%] bg-green-500 flex items-center justify-center lg:z-0 z-10 lg:p-0 p-5  cursor-pointer ">
              <img src={printifyLogo} alt="printifyLogo" />
            </div>

            <div className="icon lg:w-[6.5rem] lg:h-[6.5rem] w-[4rem] h-[4rem] rounded-2xl shadow-2xl absolute lg:top-[-4%] lg:right-[-5%] top-[25%] right-[5%] flex items-center justify-center bg-white cursor-pointer">
              <img src={wixLogo} alt="wixLogo" />
            </div>

            <div className="icon lg:w-[5rem] lg:h-[5rem] w-[4rem] h-[4rem] rounded-2xl shadow-2xl absolute lg:top-[25%] lg:right-[13%] top-[52%] right-[11%] lg:p-0 p-1 flex items-center justify-center bg-white cursor-pointer">
              <img src={wooLogo} alt="wooLogo" />
            </div>

            <div className="icon lg:w-[9.5rem] lg:h-[9.5rem] w-[5rem] h-[5rem] rounded-2xl shadow-2xl absolute lg:bottom-[32%] lg:right-[-5%] bottom-[10%] right-[30%] flex items-center justify-center bg-white lg:p-0 p-3 cursor-pointer">
              <img src={etsyLogo} alt="etsyLogo" />
            </div>

            <div className="icon lg:w-[8.5rem] lg:h-[8.5rem] w-[4rem] h-[4rem] rounded-2xl shadow-2xl absolute lg:bottom-[16%] lg:right-[35%] bottom-[20%] right-[70%] flex items-center justify-center bg-white lg:p-0 p-3 cursor-pointer">
              <img src={shopiFyLogo} alt="shopiFyLogo" />
            </div>

            <div className="icon lg:w-[5rem] lg:h-[5rem] w-[4.5rem] h-[4.5rem] lg:rounded-2xl rounded-full shadow-2xl absolute lg:bottom-[36%] bottom-[43%] lg:left-[38%] left-[35%] flex items-center justify-center bg-white z-20 p-2 cursor-pointer">
              <img src={andMore} alt="andMore" />
            </div>

            <div className="icon lg:w-[7rem] lg:h-[7rem] w-[4.5rem] h-[4.5rem] rounded-2xl shadow-2xl absolute bottom-[70%] lg:bottom-[46%] left-[6%] lg:left-[23%] flex items-center justify-center bg-white cursor-pointer">
              <img src={duckLogo} alt="duckLogo" />
            </div>

            <div className="icon absolute shadow-2xl bg-white lg:w-[5rem] lg:h-[5rem] w-[4rem] h-[4rem] rounded-2xl lg:top-[1%] lg:left-[30%] top-[-5%] left-[32%] flex items-center justify-center z-30 lg:p-0 p-5 cursor-pointer">
              <img src={bLogo} alt="bLogo" />
            </div>

            <div className="icon lg:w-[10rem] lg:h-[10rem] w-[4rem] h-[4rem] rounded-2xl shadow-2xl absolute lg:bottom-[25%] left-[-3%] lg:left-[2%] bottom-[50%] flex items-center justify-center lg:bg-white bg-white cursor-pointer">
              <p className="lg:text-4xl text-xl text-slate-500 font-semibold">
                API
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center">
        <img
          src={talktoSales}
          alt="talktoSales"
          className="rounded-2xl w-[80%] h-[8rem] bg-green-100"
          style={{ objectFit: 'cover', maxWidth: '1200px' }}
        />
        <div className="absolute inset-0 flex lg:flex-row flex-col items-center lg:justify-evenly justify-center text-white text-center">
          <p className="mb-4 lg:text-2xl text-start font-bold text-green-950">
            Are you a large business looking for
            <br /> custom solutions?
          </p>
          <Button btnStyles={'lg:px-4 lg:py-2 px-2 py-1 cursor-pointer'}>Talk to Sales</Button>
        </div>
      </div>
    </div>
  );
};

export default ConnectYourStore;
