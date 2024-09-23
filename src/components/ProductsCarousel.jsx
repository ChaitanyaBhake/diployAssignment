import { useState } from 'react';
import { products } from '../constants/data';
import rightArrow2 from "../assets/right-arrow2.svg"

const ProductsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="lg:hidden w-full mx-auto mt-5 relative bg-gray-100">
      {/* Slider container */}
      <div className="overflow-hidden relative w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map(({ id, image, title, desc, subText }) => (
            <div
              key={id}
              className="flex-shrink-0 w-full flex flex-col items-center p-5"
              style={{ width: '100%' }}
            >
              <img
                src={image}
                alt={title}
                width={180}
                height={180}
                className="mb-4"
              />
              <p className="text-xl text-green-600 font-semibold">{title}</p>
              <p className="font-semibold text-2xl">{desc}</p>
              <p className="text-slate-600 text-center">{subText}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-2  bottom-[2%] rotate-180  p-2 bg-transparent"
      >
        <img src={rightArrow2} alt="Previous" className="w-3 h-3" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-2  bottom-[2%]  p-2 bg-transparent"
      >
        <img src={rightArrow2} alt="Next" className="w-3 h-3" />
      </button>

      {/* Dot navigation */}
      <div className="flex justify-center mt-[1rem] pb-5">
        {products.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 cursor-pointer transition-all duration-300 ${
              currentIndex === index ? 'bg-green-600 w-2 h-2' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};


export default ProductsCarousel;
