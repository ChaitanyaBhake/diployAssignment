import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import clothes from '../assets/clothes.png';
import clothesBottom from '../assets/clothesBottom.svg';
import heroDemo2 from '../assets/demo2.mp4';
import rightArrow from '../assets/right-arrow.svg';
import rotatedTraingle2 from '../assets/rotatedTraingle2.svg';
import rotatedTraingle from '../assets/rotatedTriangle.svg';
import ProductsCarousel from '../components/ProductsCarousel';
import { products } from '../constants/data';
import ProductsMobileView from '../components/ProductsMobileView';

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const desktopViewRef = useRef(null);
  const headTextRef = useRef(null);
  const subTextRef = useRef(null);
  const allProductsRef = useRef(null);
  const productsDesktopView = useRef(null);
  const demoVideo2Ref = useRef(null);

  useEffect(() => {
    const desktopViewAnim = gsap.fromTo(
      desktopViewRef.current,
      { x: -300, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power2.out', paused: true }
    );

    const demoVideo2Anim = gsap.fromTo(
      demoVideo2Ref.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        paused: true,
        delay: 1,
      }
    );

    const headTextAnim = gsap.fromTo(
      headTextRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        paused: true,
        delay: 0.5,
      }
    );

    const subTextAnim = gsap.fromTo(
      subTextRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        paused: true,
        delay: 0.7,
      }
    );

    const allProductsAnim = gsap.fromTo(
      allProductsRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        paused: true,
        delay: 0.9,
      }
    );

    const productsDesktopViewAnim = gsap.fromTo(
      productsDesktopView.current.children,
      { y: -150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        paused: true,
        delay: 0.3,
        stagger: 0.4,
      }
    );

    const desktopTrigger = ScrollTrigger.create({
      trigger: desktopViewRef.current,
      start: 'top 40%',
      onEnter: () => {
        desktopViewAnim.play();
        headTextAnim.play();
        subTextAnim.play();
        allProductsAnim.play();
        demoVideo2Anim.play();
      },
    });

    const productsTrigger = ScrollTrigger.create({
      trigger: productsDesktopView.current,
      start: 'top 80%',
      onEnter: () => {
        productsDesktopViewAnim.play();
      },
    });

    return () => {
      desktopTrigger.kill();
      productsTrigger.kill();
    };
  }, []);

  return (
    <>
      <div className="relative w-full h-full mx-auto mt-[5rem] pt-[3rem] lg:pt-[8rem] lg:pl-10 lg:pr-10 lg:pb-[6rem] bg-gray-100 ">
        <img
          src={rotatedTraingle}
          width={600}
          height={600}
          alt="rotatedTraingle"
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        {/* Desktop View */}
        <div className=" hidden lg:max-w-7xl lg:mx-auto relative lg:flex lg:justify-between lg:gap-5">
          {/* Clothes Image Div */}
          <div className="relative lg:block hidden w-[40%] z-10">
            {/* Plus Icon CUP */}
            <div className="absolute lg:left-[7%] lg:top-[23%] lg:flex lg:justify-center lg:items-center lg:hover:scale-[110%]">
              {/* Outer Circle */}
              <div className="lg:w-[2rem] lg:h-[2rem] bg-green-300 lg:flex lg:justify-center lg:items-center rounded-full">
                {/* Inner Circle */}
                <div className="lg:w-[1rem] lg:h-[1rem] lg:p-2 bg-green-500  lg:flex lg:justify-center lg:items-center rounded-full">
                  <p className="lg:text-white font-bold lg:text-xl ">+</p>
                </div>
              </div>
            </div>

            {/* Plus Icon CAP */}
            <div className="absolute lg:left-[28%] lg:top-[59%] lg:flex lg:justify-center lg:items-center lg:hover:scale-[110%]">
              {/* Outer Circle */}
              <div className="lg:w-[2rem] lg:h-[2rem] bg-green-300 lg:flex lg:justify-center lg:items-center rounded-full">
                {/* Inner Circle */}
                <div className="lg:w-[1rem] lg:h-[1rem] lg:p-2 bg-green-500  lg:flex lg:justify-center lg:items-center rounded-full">
                  <p className="lg:text-white font-bold lg:text-xl ">+</p>
                </div>
              </div>
            </div>

            {/* Plus Icon MOBILE */}
            <div className="absolute lg:left-[48%] lg:top-[28%] lg:flex lg:justify-center lg:items-center lg:hover:scale-[110%]">
              {/* Outer Circle */}
              <div className="lg:w-[2rem] lg:h-[2rem] bg-green-300 lg:flex lg:justify-center lg:items-center rounded-full">
                {/* Inner Circle */}
                <div className="lg:w-[1rem] lg:h-[1rem] lg:p-2 bg-green-500  lg:flex lg:justify-center lg:items-center rounded-full">
                  <p className="lg:text-white font-bold lg:text-xl ">+</p>
                </div>
              </div>
            </div>

            {/* Plus Icon WINTER CAP */}
            <div className="absolute lg:right-[14%] lg:top-[14%] lg:flex lg:justify-center lg:items-center lg:hover:scale-[110%]">
              {/* Outer Circle */}
              <div className="lg:w-[2rem] lg:h-[2rem] bg-green-300 lg:flex lg:justify-center lg:items-center rounded-full">
                {/* Inner Circle */}
                <div className="lg:w-[1rem] lg:h-[1rem] lg:p-2 bg-green-500  lg:flex lg:justify-center lg:items-center rounded-full">
                  <p className="lg:text-white font-bold lg:text-xl ">+</p>
                </div>
              </div>
            </div>

            <img
              src={clothesBottom}
              alt="clothesBottom"
              className="lg:absolute lg:bottom-0 lg:left-0 lg:block hidden "
            />

            {/* Plus Icon JACKET */}
            <div className="absolute lg:left-[7%] lg:top-[83%] lg:flex lg:justify-center lg:items-center lg:hover:scale-[110%] ">
              {/* Outer Circle */}
              <div className="lg:w-[2rem] lg:h-[2rem] bg-green-300 lg:flex lg:justify-center lg:items-center rounded-full">
                {/* Inner Circle */}
                <div className="lg:w-[1rem] lg:h-[1rem] lg:p-2 bg-green-500  lg:flex lg:justify-center lg:items-center rounded-full">
                  <p className="lg:text-white font-bold lg:text-xl ">+</p>
                </div>
              </div>
            </div>

            {/* Plus Icon NAPKIN */}
            <div className="absolute lg:left-[42%] lg:top-[83%] lg:flex lg:justify-center lg:items-center lg:hover:scale-[110%]">
              {/* Outer Circle */}
              <div className="lg:w-[2rem] lg:h-[2rem] bg-green-300 lg:flex lg:justify-center lg:items-center rounded-full">
                {/* Inner Circle */}
                <div className="lg:w-[1rem] lg:h-[1rem] lg:p-2 bg-green-500  lg:flex lg:justify-center lg:items-center rounded-full">
                  <p className="lg:text-white font-bold lg:text-xl ">+</p>
                </div>
              </div>
            </div>

            {/* Demo Video2 */}
            <div
              className="absolute lg:w-[10rem] lg:h-[10rem] lg:bottom-[8rem] lg:right-0 rounded-3xl"
              ref={demoVideo2Ref}
            >
              <video
                src={heroDemo2}
                autoPlay
                muted
                loop
                className="rounded-2xl"
              ></video>
            </div>

            <img
              src={clothes}
              className="rounded-xl bg-green-700"
              alt="clothes"
              width={450}
              height={450}
            />
          </div>

          {/* Desktop Product View */}
          <div
            ref={desktopViewRef}
            className="bg-white absolute w-[100%] h-[75%] rounded-xl top-[10rem] bottom-0 right-0 flex"
          >
            <div className="w-[50%]"></div>
            <div className="flex flex-col gap-10 p-[7rem] items-start justify-start w-[50%]">
              {/* Head text */}
              <h1
                ref={headTextRef}
                className="lg:text-3xl md:text-3xl font-bold"
              >
                Easily add your design to a wide range of products
              </h1>

              {/* Sub text */}
              <p
                ref={subTextRef}
                className="lg:block hidden text-slate-500 lg:text-[1rem] md:text-[13px]"
              >
                With our free design tools, you can easily add your custom
                designs to t-shirts, mugs, phone cases, and hundreds of other
                products.
              </p>

              {/* All Products */}
              <p ref={allProductsRef} className="flex flex-row items-center">
                <a className="text-green-600" href="">
                  All products{' '}
                </a>
                <img src={rightArrow} alt="rightArrow" className="ml-[0.5rem]" />
              </p>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <ProductsMobileView />

        {/* Products Desktop View */}
        <div
          ref={productsDesktopView}
          className=" hidden lg:flex max-w-7xl mx-auto mt-[7rem] gap-6"
        >
          {products.map(({ id, image, title, desc, subText }) => (
            <div key={id} className="flex lg:ml-[7rem] ">
              <div className="flex flex-col">
                <img src={image} alt="products" width={180} height={180} />
                <p className="text-xl text-green-600 font-semibold">{title}</p>
                <p className="font-semibold text-2xl">{desc}</p>
                <p className="text-slate-600">{subText}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Products Mobile View Carousel */}
        <ProductsCarousel />
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

export default Products;
