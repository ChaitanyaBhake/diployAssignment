import { useState } from 'react';
import { navLinks } from '../constants/data';

const NavItems = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  let timer; 

  const handleMouseEnter = (id) => {
    clearTimeout(timer);
    setActiveDropdown(id); 
  };

  const handleMouseLeave = () => {
    
    timer = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); 
  };

  return (
    <ul className="flex flex-col gap-4 lg:flex-row md:gap-6 relative z-20" style={{ color: '#353a47' }}>
      {navLinks.map(({ id, name, href, dropdown }) => (
        <li key={id} className="relative">
          {dropdown ? (
            <div
              onMouseEnter={() => handleMouseEnter(id)}
              onMouseLeave={handleMouseLeave} 
              className="relative"
            >
              {/* Dropdown Button */}
              <button className="hover:text-green-500 lg:block flex gap-3 lg:text-[1rem] text-[1.2rem]">
                {name}
                <span className="ml-1">{activeDropdown === id ? '▲' : '▼'}</span>
              </button>

              {/* Dropdown Menu */}
              {activeDropdown === id && (
                <ul className="absolute p-3 bg-white lg:mt-5 mt-1 w-max lg:shadow-md rounded-md space-y-2 z-10">
                  {dropdown.map((subItem) => (
                    <li key={subItem.id}>
                      <a className="hover:text-green-500" href={subItem.href}>
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <a href={href} className="hover:text-green-500 lg:text-[1rem] text-[1.2rem]">
              {name}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
