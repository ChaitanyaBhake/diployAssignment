import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import CustomerReviewsCarousel from '../components/CustomerReviewsCarousel';
import rotatedTraingle2 from "../assets/rotatedTraingle2.svg"

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  useGSAP(() => {

    gsap.set('.headText', { x: -100, opacity: 0 });

    gsap.to('.headText', {
      duration: 2,
      x: 0, 
      opacity: 1,
      scrollTrigger: {
        trigger: '.headText',
        start: 'top bottom',
        toggleActions: 'restart none none reverse',
      },
    });
  }, []);

  return (
    <>
      <div className="w-full h-full bg-gray-100 mt-[8rem] p-7 ">
        <div className="max-w-7xl mx-auto ">
          <div className="w-full lg:pt-[8rem] flex lg:flex-row flex-col lg:gap-[10rem] gap-10">
            <p className="lg:text-4xl text-3xl font-semibold">
              Trusted by over 8M <br /> sellers around the <br /> world
            </p>
            <p className="text-gray-800 lg:w-[30%] lg:mt-4 headText">
              Whether you are just getting started or run an enterprise-level
              e-commerce business, we do everything we can to ensure a positive
              merchant experience.
            </p>
          </div>

          <CustomerReviewsCarousel />
        </div>
      </div>

      <div className="flex justify-center items-center lg:mb-[4rem]">
        <img
          src={rotatedTraingle2}
          alt="rotatedTraingle2"
          className="w-[10rem]  md:w-80  lg:w-[17rem]  "
        />
      </div>
    </>
  );
};

export default Testimonials;
