import backgroundImg from '../assets/background-Img.svg';
import heroDemo2 from '../assets/heroDemo2.mp4';
import playIcon from '../assets/playIcon.svg';
import tickMark from '../assets/tickMark.svg';
import Button from '../common/Button';

const HeroSection = () => {
  return (
    <div className="max-w-7xl h-full mx-auto lg:pt-[10rem] md:pt-[7rem] pt-[7rem] lg:p-0 p-6  ">
      <div
        className="w-full h-[65vh] bg-no-repeat bg-center bg-cover "
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col  justify-between lg:p-[5rem] p-[1.3rem]">
          {/* Left Hero */}
          <div className="flex flex-col gap-4 min-w-[50%]">
            <h1 className="text-3xl lg:text-6xl font-bold">
              Create and sell <br /> custom products
            </h1>
            <div className="mt-2 flex flex-col gap-1.5 lg:mb-[3rem] md:mb-[3rem] mb-[1rem]">
              <p className="flex items-center gap-2">
                <img
                  src={tickMark}
                  width={20}
                  alt="tick mark"
                  className="inline-block"
                />
                <span className="text-base">100% Free to use</span>
              </p>
              <p className="flex items-center gap-2">
                <img
                  src={tickMark}
                  width={20}
                  alt="tick mark"
                  className="inline-block"
                />
                <span className="text-base">900+ High Quality Products</span>
              </p>
              <p className="flex items-center gap-2">
                <img
                  src={tickMark}
                  width={20}
                  alt="tick mark"
                  className="inline-block"
                />
                <span className="text-base">Largest global print network</span>
              </p>
            </div>

            <div className=" flex lg:flex-row md:flex-row sm:flex-row gap-4 flex-col">
              <Button greenWhite btnStyles={'px-7 py-3 cursor-pointer'}>
             
                Start for free
              </Button>
              <Button btnStyles={'px-7 py-3 cursor-pointer'}>
                <div className=' flex justify-center items-center gap-1'>
                  <span>
                    <img src={playIcon} width={20} height={20} alt="playIcon" />
                  </span>{' '}
                  How it Works?
                </div>
              </Button>
            </div>

            <p className="text-green-600">
              Trusted by over 8M sellers around the world
            </p>
          </div>

          {/* Right Hero */}
          <div className=" lg:w-[500px] lg:h-[500px] overflow-hidden mt-10 md:mt-10 lg:mt-0">
            <video
              src={heroDemo2}
              muted
              autoPlay
              loop
              width={900}
              height={900}
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
