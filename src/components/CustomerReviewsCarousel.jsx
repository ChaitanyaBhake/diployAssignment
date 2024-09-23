import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useState } from 'react';
import rightArrow2 from '../assets/right-arrow2.svg';
import { customerReviews } from '../constants/data';

gsap.registerPlugin(ScrollTrigger);

const CustomerReviewsCarousel = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [screenSize, setScreenSize] = useState('large');

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setScreenSize('large');
      } else if (width >= 768) {
        setScreenSize('medium');
      } else {
        setScreenSize('small');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    gsap.set('.reviewCard', { y: 200, opacity: 0 });

    gsap.to('.reviewCard', {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: '.customerReviews',
        start: 'top bottom',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  const handlePrevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? customerReviews.length - 1 : prevIndex - 1
    );
  };

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === customerReviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const translateXValue =
    screenSize === 'large'
      ? `translateX(-${currentReviewIndex * 100}%)`
      : screenSize === 'medium'
      ? `translateX(-${currentReviewIndex * 200}%)`
      : `translateX(-${currentReviewIndex * 385}%)`;

  return (
    <div className="relative w-full mx-auto mt-5 p-5 customerReviews">
      {/* Slider container */}
      <div className="overflow-hidden relative w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out w-[30%] gap-10 mt-5"
          style={{ transform: translateXValue }}
        >
          {customerReviews.map(({ id, img, name, storeLink, star, review }) => (
            <div
              key={id}
              className="reviewCard w-full flex-shrink-0 flex flex-col items-start p-[2rem] bg-white rounded-2xl lg:min-w-[30rem] md:min-w-[30rem] min-w-[75vw] gap-[1rem]"
            >
              <div className="flex gap-7">
                {/* Image */}
                <div className="w-[4rem] h-[4rem]">
                  <img
                    src={img}
                    alt={name}
                    className="rounded-xl  object-cover "
                  />
                </div>

                {/* Name Rating Store Link */}
                <div className="flex flex-col gap-1">
                  <h1 className=" lg:text-2xl text-xl font-semibold">{name}</h1>
                  <p className="text-green-600 font-medium">{storeLink}</p>
                  <p>{star}</p>
                </div>
              </div>

              {/* Review */}
              <p className="lg:mt-4 w-[100%]">{review}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrevReview}
        className="absolute left-2 bottom-[2%] rotate-180 p-2 bg-transparent"
      >
        <img src={rightArrow2} alt="Previous" className="w-3 h-3" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNextReview}
        className="absolute right-2 bottom-[2%] p-2 bg-transparent"
      >
        <img src={rightArrow2} alt="Next" className="w-3 h-3" />
      </button>

      {/* Dot navigation */}
      <div className="flex justify-center lg:mt-[5rem] mt-[2rem]">
        {customerReviews.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 cursor-pointer transition-all duration-300 ${
              currentReviewIndex === index
                ? 'bg-green-600 w-2 h-2'
                : 'bg-gray-300'
            }`}
            onClick={() => {
              setCurrentReviewIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviewsCarousel;
