import clothesBottom from '../assets/clothesBottom.svg';
import clothesMobile from '../assets/clothesMobile.png';
import rightArrow from '../assets/right-arrow.svg';

const ProductsMobileView = () => {
    return (
      <div className="lg:hidden md:max-w-[40%] max-w-[50%] min-w-[22rem] h-[20%] mx-auto relative flex flex-col justify-center items-center gap-5 rounded-2xl lg:p-0 md:p-0 p-5 flex-shrink-0 ">
        <div className="relative flex flex-col rounded-2xl w-[100%]">
          <div className="relative">
            <img
              src={clothesMobile}
              alt="clothes"
              className="bg-green-600 w-full h-[240px] object-cover rounded-2xl"
            />
            <img
              src={clothesBottom}
              alt="clothesBottom"
              className="absolute bottom-[-1%] left-[30%] rounded-xl"
            />
  
            {/* Plus Icon CAP */}
            <div className="absolute left-[20%] bottom-[30%] flex lg:justify-center items-center hover:scale-[110%]">
              {/* Outer Circle */}
              <div className="w-[2rem] h-[2rem] bg-green-300 flex justify-center items-center rounded-full">
                {/* Inner Circle */}
                <div className="w-[1rem] h-[1rem] p-2 bg-green-500 flex justify-center items-center rounded-full">
                  <p className="text-white font-bold:text-xl ">+</p>
                </div>
              </div>
            </div>
  
            {/* Plus Icon CAP */}
            <div className="absolute left-[54%] bottom-[30%] flex lg:justify-center items-center hover:scale-[110%]">
              {/* Outer Circle */}
              <div className="w-[2rem] h-[2rem] bg-green-300 flex justify-center items-center rounded-full">
                {/* Inner Circle */}
                <div className="w-[1rem] h-[1rem] p-2 bg-green-500 flex justify-center items-center rounded-full">
                  <p className="text-white font-bold:text-xl ">+</p>
                </div>
              </div>
            </div>
  
            {/* Plus Icon Mobile*/}
            <div className="absolute top-[14%] left-[38%] flex lg:justify-center items-center hover:scale-[110%]">
              {/* Outer Circle */}
              <div className="w-[2rem] h-[2rem] bg-green-300 flex justify-center items-center rounded-full">
                {/* Inner Circle */}
                <div className="w-[1rem] h-[1rem] p-2 bg-green-500 flex justify-center items-center rounded-full">
                  <p className="text-white font-bold:text-xl ">+</p>
                </div>
              </div>
            </div>
  
            {/* Plus Icon CUP*/}
            <div className="absolute top-[6%] left-[1%] flex lg:justify-center items-center hover:scale-[110%]">
              {/* Outer Circle */}
              <div className="w-[2rem] h-[2rem] bg-green-300 flex justify-center items-center rounded-full">
                {/* Inner Circle */}
                <div className="w-[1rem] h-[1rem] p-2 bg-green-500 flex justify-center items-center rounded-full">
                  <p className="text-white font-bold:text-xl ">+</p>
                </div>
              </div>
            </div>
  
            {/* Plus Icon Hoodie*/}
            <div className="absolute bottom-[-2%] left-[7%] flex lg:justify-center items-center hover:scale-[110%]">
              {/* Outer Circle */}
              <div className="w-[2rem] h-[2rem] bg-green-300 flex justify-center items-center rounded-full">
                {/* Inner Circle */}
                <div className="w-[1rem] h-[1rem] p-2 bg-green-500 flex justify-center items-center rounded-full">
                  <p className="text-white font-bold:text-xl ">+</p>
                </div>
              </div>
            </div>
  
            {/* Plus Icon WINTER HAT*/}
            <div className="absolute top-[1%] right-[20%] flex lg:justify-center items-center hover:scale-[110%]">
              {/* Outer Circle */}
              <div className="w-[2rem] h-[2rem] bg-green-300 flex justify-center items-center rounded-full">
                {/* Inner Circle */}
                <div className="w-[1rem] h-[1rem] p-2 bg-green-500 flex justify-center items-center rounded-full">
                  <p className="text-white font-bold:text-xl ">+</p>
                </div>
              </div>
            </div>
          </div>
  
          <div className="bg-white flex flex-col gap-5 justify-center items-start p-5 rounded-2xl">
            <p className="text-3xl font-semibold mt-5">
              Easily add your design to a wide range of products
            </p>
            <p className="text-slate-800">
              With our free design tools, you can easily add your custom designs
              to t-shirts, mugs, phone cases, and hundreds of other products.
            </p>
  
            {/* All Products */}
            <p className="flex flex-row items-center mb-6">
              <a className="text-green-600" href="">
                All products{' '}
              </a>
              <img src={rightArrow} alt="rightArrow" className="ml-[0.5rem]" />
            </p>
          </div>
        </div>
      </div>
    );
  };

export default ProductsMobileView