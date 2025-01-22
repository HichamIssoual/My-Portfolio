import { Link, useLocation } from 'react-router';
import { pages } from '../constants';
import { useState } from 'react';
import images from '../assets';
const Header = () => {
  const { pathname } = useLocation();
  const [show, setShow] = useState(null);
  const [menu, setMenu] = useState(false);
  return (
    <header className="text-gray-900">
      <div className="max-md:container max-md:flex max-md:justify-end max-md:items-center max-md:mt-2">
        <div className="md:hidden fixed top-3">
          <img
            src={menu == true ? images.close : images.menu}
            alt="menu"
            width={35}
            className="p-1 bg-blue-600 rounded-lg cursor-pointer transition duration-200"
            onClick={() => {
              setMenu(!menu);
            }}
          />
        </div>
      </div>
      <div
        className={`z-50 md:hidden flex flex-col justify-center items-start fixed max-[430px]:w-fit w-[200px] top-0 transition-all h-screen duration-200 ${
          menu == true ? 'left-0' : '-left-[600px]'
        } bg-color-7 p-2`}
      >
        {pages.map((page) => (
          <Link
            key={page.id}
            to={page.link}
            className={`flex items-center gap-2 text-sm p-2 transition-all duration-200 hover:bg-blue-600 hover:text-white w-full rounded-xl mt-2 ${
              pathname == `/${page.link}` && 'bg-blue-600 text-white'
            }`}
          >
            <img src={page.icon} alt={page.link} width={25} />
            <span>{page.title}</span>
          </Link>
        ))}
      </div>
      <div className="py-4 fixed md:top-1/2 md:left-5 md:-translate-y-1/2">
        <div className="max-md:hidden py-4 flex flex-col gap-3 rounded-3xl w-fit px-2 mx-auto">
          {pages.map((item) => {
            const isActive = pathname === `/${item.link}`;
            const isHovered = show === item.id;

            const containerClass = `flex items-center relative rounded-t-full rounded-b-full transition-all duration-400 ${
              isHovered || isActive ? 'w-[135px] bg-blue-600' : 'w-[50px]'
            }`;

            const iconClass = `w-[50px] h-[50px] flex justify-center items-center rounded-full transition duration-300 ${
              isHovered || isActive ? 'bg-blue-600' : 'bg-color-7'
            }`;

            const titleClass = `absolute left-15 transition duration-100 text-white ${
              isHovered || isActive ? 'opacity-100' : 'opacity-0'
            }`;

            return (
              <Link
                key={item.id}
                to={item.link}
                className={containerClass}
                onMouseEnter={() => setShow(item.id)}
                onMouseLeave={() => setShow(null)}
              >
                <div className={iconClass}>
                  <img src={item.icon} width={25} />
                </div>
                <span className={titleClass}>{item.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
