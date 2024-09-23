import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useState } from 'react';
import mobileLogo from '../assets/mobileLogo.svg';
import pcLogo from '../assets/pc-logo.svg';
import Button from '../common/Button';
import NavItems from '../common/NavItems';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useGSAP(() => {
  
  gsap.set('.sidebarDiv', { x: -200, opacity: 0 });

  if (isOpen) {
  
    gsap.to('.overlay', { opacity: 1, duration: 0.2 });
  
    gsap.to('.sidebarDiv', { opacity: 1, x: 0, duration: 0.1, delay: 0.2 });
  }
}, [isOpen]);

  return (
    <header className="w-full shadow-lg fixed bg-white z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex lg:justify-between justify-between items-center py-4">
          <div className="flex lg:gap-5 md:gap-5 gap-3 lg:px-6 md:pl-6">
            {/* Hamburger */}
            <button onClick={handleMenu} className="lg:hidden w-[2rem] ml-5">
              <img src="/src/assets/icons8-hamburger-menu.svg" alt="hamburger" />
            </button>

            {/* Logo */}
            <a href="/">
              <img
                src={pcLogo}
                alt="pcLogo"
                className="lg:w-[8rem] md:w-[8rem] lg:h-[2.3rem] md:h-[2.3rem] w-[7rem] lg:block md:block hidden"
              />
              <img
                src={mobileLogo}
                alt="mobileLogo"
                className="lg:hidden md:hidden block w-[3rem]"
              />
            </a>
          </div>

          {/* Nav List Items */}
          <nav className="md:hidden hidden lg:block">
            <NavItems />
          </nav>

          <div className="flex gap-3 mr-3">
            <Button btnStyles={'px-4 py-1 cursor-pointer'}>Log in</Button>
            <Button btnStyles={'px-4 py-1 cursor-pointer'} greenWhite>
              Sign up
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50 overlay" style={{ opacity: 0 }}>
          </div>
          {/* Sidebar */}
          <div className="fixed inset-0 z-50 flex w-screen h-screen">
            <div className="absolute left-0 top-0 md:min-w-[50%] min-w-[68%] h-full bg-white sidebarDiv">
              <div className="flex justify-between items-center p-3 border-b-[1px] border-slate-200">
                <h1 className="mx-auto text-2xl">Menu</h1>
                <div onClick={handleMenu}>
                  <img
                    src="/src/assets/icons8-close.svg"
                    alt="close"
                    width={15}
                    height={15}
                  />
                </div>
              </div>

              <div className="mt-[0.2rem]"></div>

              <div className="p-10">
                <NavItems />
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
