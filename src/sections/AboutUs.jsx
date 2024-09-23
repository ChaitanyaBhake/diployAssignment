import { aboutUs } from '../constants/data';

const AboutUs = () => {
  return (
    <div className="max-w-7xl h-full mx-auto lg:mt-[9.8rem] md:mt-[5rem] mt-[15rem]">
      <div className="flex flex-col lg:flex-row md:flex-row lg:justify-start  justify-center lg:ml-[5rem]">
        {aboutUs.map(({ id, imageUrl, title, desc }) => (
          <div
            key={id}
            className="lg:w-[35%] w-full lg:text-start text-center mx-auto mb-10 lg:mb-0 flex flex-col justify-center lg:justify-start lg:items-start items-center "
          >
            <img src={imageUrl} alt={title} width={120} height={120} className='lg:mx-0 mx-auto' />
            <p className="text-2xl font-bold mt-4 text-start">{title}</p>
            <p className="mt-3 w-[75%]">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
