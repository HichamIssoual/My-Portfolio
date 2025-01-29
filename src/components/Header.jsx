import { Link, useLocation } from "react-router";
import { home, pages } from "../constants";
import { useState } from "react";
import images from "../assets";

const Header = () => {
  const { pathname } = useLocation();
  const [show, setShow] = useState(null);
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => setMenu((prev) => !prev);

  return (
    <header className="text-gray-900">
      {/* Mobile Menu Toggle */}
      <div className="max-md:container max-md:flex max-md:justify-end max-md:items-center max-md:mt-2">
        <div className="md:hidden fixed z-10 right-0 top-3">
          <img
            src={menu ? images.close : images.menu}
            alt="menu"
            width={35}
            className="p-1 bg-cyan-400 rounded-lg cursor-pointer transition duration-200"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`max-md:h-screen md:hidden z-10 flex flex-col justify-start items-start fixed max-[430px]:w-fit w-[200px] top-0 transition-all h-screen duration-200 ${
          menu ? "left-0" : "-left-[600px]"
        } bg-gray-800/75 backdrop-blur-md p-2`}
      >
        {pages.map((page) => (
          <Link
            key={page.id}
            to={page.link}
            className={`flex text-cyan-400 font-bold items-center gap-2 text-sm p-2 transition-all duration-200 hover:bg-cyan-400 hover:text-white w-full rounded-xl mt-2 ${
              pathname === `/${page.link}` ? "bg-cyan-400 text-white" : ""
            }`}
          >
            <img src={page.icon} alt={page.link} width={25} />
            <span>{page.title}</span>
          </Link>
        ))}
      </div>

      {/* Sidebar Menu */}
      <div className="sticky top-0 md:left-5 w-[180px] max-md:hidden py-4 flex flex-col gap-3 px-2 h-screen bg-color-secondary">
        <div className="flex flex-col items-center w-full">
          <div className="bg-color-primary p-2 rounded-3xl">
            <img
              src={home.img}
              alt="hicham issoual"
              className="rounded-3xl"
              width={100}
            />
          </div>
          <h6 className="h6 text-cyan-400 text-nowrap">💻 Hicham Issoual</h6>
          <span className="text-gray-200 text-sm">Front-end Developer</span>
        </div>

        {pages.map((item) => {
          const isActive = pathname === `/${item.link}`;
          const isHovered = show === item.id;

          return (
            <Link
              key={item.id}
              to={item.link}
              className={`flex items-center relative transition-all text-white hover:border-r-4 border-cyan-400 p-2 rounded-md ${
                isActive ? "bg-cyan-400" : isHovered ? "bg-slate-900/30" : ""
              }`}
              onMouseEnter={() => setShow(item.id)}
              onMouseLeave={() => setShow(null)}
            >
              <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full transition duration-300 text-cyan-400">
                <img src={item.icon} alt={item.title} />
              </div>
              <span
                className={`ml-5 ${
                  isHovered && !isActive ? "text-cyan-400" : ""
                }`}
              >
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
