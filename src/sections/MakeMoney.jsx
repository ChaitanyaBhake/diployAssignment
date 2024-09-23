import gsap from 'gsap';
import moneyPlant2 from '../assets/moneyPLant2.svg';
import Button from '../common/Button';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)

const MakeMoney = () => {

  useGSAP(() => {
   
    if (window.innerWidth > 768) {
 
      gsap.set('.profitDiv', { x: 200, opacity: 0 });

      gsap.to('.profitDiv', {
        duration: 2,
        x: 0, 
        opacity: 1,
        scrollTrigger: {
          trigger: '.profitDiv',
          start: 'bottom bottom',
          toggleActions: 'play none none none',
        },
      });
    }
  }, []);

  return (
    <div className="w-full h-full lg:mt-[4rem] lg:p-7 p-4 mt-5 ">
      <div className="max-w-7xl mx-auto flex lg:justify-start md:justify-center justify-center  relative">
        {/* Profit Div */}
        <div
          className="rounded-2xl lg:min-w-[56vw] min-w-[46vw] lg:h-[70vh] lg:p-[4rem] p-4 lg:justify-start md:justify-center md:items-center profitDiv"
          style={{ backgroundColor: '#203741' }}
        >
          <p className="lg:text-4xl text-2xl text-white font-bold lg:mt-5 mt-0">
            Make Money,Risk -<br />
            Free
          </p>

          <p className=" text-white mt-4">
            You pay for fulfillment only when you make a sale
          </p>

          <div
            className="flex flex-col lg:w-[50%] md:w-[100%]  rounded-2xl p-5 gap-9 mt-5 "
            style={{ backgroundColor: '#17262b' }}
          >
            <div className="flex justify-between text-white">
              <p className="text-white">You sell a t-shirt</p>
              <p>$ 30</p>
            </div>

            <div className="flex justify-between text-white ">
              <p className="text-white">You pay for its production</p>
              <p>$ 12</p>
            </div>

            <div className="border-[1px] border-gray-500 "></div>

            <div className="flex justify-between text-green-600 font-semibold ">
              <p>Your Profit</p>
              <p>$ 18</p>
            </div>
          </div>

          <div className="lg:w-[15%] md:w-[30%]">
            <Button greenWhite btnStyles={'mt-10  py-2 cursor-pointer'}>
              Start Selling
            </Button>
          </div>

          <div className="mt-3">
            <p className="text-gray-400 pb-5">
              100% Free to use · 900+ Products · Largest print network
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="hidden md:hidden lg:block  ">
          <div className='absolute top-[1%] right-0'>
            <img src={moneyPlant2} alt="moneyImg" className="w-[40rem] h-[40rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeMoney;
