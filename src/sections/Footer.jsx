import pcLogo from '../assets/pc-logo.svg';
import facbookIcon from '../assets/socialmediaLogos/facebook-icon.svg';
import instagramIcon from '../assets/socialmediaLogos/instagram-icon.svg';
import linkedinLogo from '../assets/socialmediaLogos/linkedin-icon.svg';
import redditLogo from '../assets/socialmediaLogos/reddit-icon.svg';
import tiktokLogo from '../assets/socialmediaLogos/tiktok-icon.svg';
import xLogo from '../assets/socialmediaLogos/x-logo.svg';
import youtubeLogo from '../assets/socialmediaLogos/youtube-icon.svg';
import { footerData } from '../constants/data';

const Footer = () => {
  return (
    <div className="w-full h-full">
      <div className="max-w-7xl mx-auto mt-24">
        <div className="flex lg:flex-row md:flex-row flex-col gap-7 justify-between w-[90%] mb-[4rem] lg:p-0 p-5">
          <div>
            <img src={pcLogo} alt="" width={135} height={50} />
          </div>
          <div className="flex justify-evenly lg:gap-5 md:gap-5 gap-2 ">
            <img src={facbookIcon} alt="facbookIcon" width={32} height={32}  className='cursor-pointer'/>
            <img src={instagramIcon} alt="instagramIcon" width={32} height={32} className='cursor-pointer'/>
            <img src={linkedinLogo} alt="linkedinLogo" width={32} height={32} className='cursor-pointer'/>
            <img src={xLogo} alt="xLogo" width={32} height={32} className='cursor-pointer'/>
            <img src={youtubeLogo} alt="youtubeLogo" width={32} height={32} className='cursor-pointer'/>
            <img src={tiktokLogo} alt="tiktokLogo" width={32} height={32} className='cursor-pointer'/>
            <img src={redditLogo} alt="redditLogo" width={32} height={32} className='cursor-pointer'/>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 lg:mt-[5rem]">
          {footerData.map((section, index) => (
            <div key={index}>
              <div className="font-bold mb-4">{section.category}</div>
              <ul className="flex flex-col space-y-2">
                {section.links.map((link, idx) => (
                  <li
                    key={idx}
                    className="text-gray-600 hover:text-green-500 cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-10 gap-6 lg:p-8 p-10 " style={{backgroundColor:"#f7f7f7"}}>
        <div className='flex flex-row flex-wrap text-gray-500 gap-5 text-[13px] justify-center text-center'>
          <p>Intellectual Property Policy</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Security</p>
        </div>
        <div className='text-[14px]'>
          <p>© 2024 Chaitanya ❤️, Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
