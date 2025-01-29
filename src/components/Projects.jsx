import { useState } from "react";
import images from "../assets";
import { categorieProjects, projects, services } from "../constants";
import { sectionClass } from "./About";
import { AnimatePresence, motion } from "framer-motion";
function Projects() {
  const [show, setShow] = useState("All");
  console.log(show);

  return (
    <div className="overflow-hidden md:pr-7 md:py-2 max-md:w-full">
      <div className="bg-color-secondary rounded-xl max-md:ml-0 p-2 mb-2 overflow-x-hidden md:h-[96vh] w-full overflow-y-auto">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center text-center mb-20 max-md:mb-10">
          <h4 className="h4 font-code flex items-center gap-2">
            <img src={images.blend} alt="Blend logo" width={25} />
            <span>Take a look at</span>
          </h4>
          <h3 className="h3">
            My{" "}
            <span className="text-cyan-400 font-bold animate-pulse">
              Portfolio
            </span>
          </h3>
        </div>
        <div className="mb-10 max-md:mb-5">
          <h2 className={sectionClass}>
            My <span className="text-cyan-400">Services</span>
          </h2>
        </div>
        <div className="flex justify-between items-start flex-wrap gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-color-primary rounded-xl p-3 max-sm:w-full w-[49%] max-md:w-full flex flex-col justify-center items-center"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="bg-cyan-400 p-2 rounded-xl max-w-full"
              />
              <h5 className="h5 my-4 font-code font-bold">{service.title}</h5>
              <p className="body-2">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mb-10 mt-5 max-md:mb-5">
          <h2 className={sectionClass}>
            My <span className="text-cyan-400">Projects</span>
          </h2>
        </div>
        <div className="flex justify-center flex-col items-center">
          <div className="p-3 max-sm:p-1 bg-color-primary flex items-center gap-x-3 gap-y-2 max-sm:gap-2 rounded-xl border border-color-secondary">
            {categorieProjects.map((cate, index) => (
              <span
                key={index}
                className={`hover:bg-cyan-400 rounded-xl pl-2 max-sm:pl-1 text-nowrap transition-all duration-300 pr-11 max-sm:pr-4 py-2 cursor-pointer ${
                  show == cate && "bg-cyan-400"
                }`}
                onClick={() => {
                  setShow(cate);
                }}
              >
                {cate}
              </span>
            ))}
          </div>
          <div className="flex justify-between gap-2 gap-y-14 flex-wrap mt-20 relative">
            <AnimatePresence mode="wait">
              {projects
                .filter((item) => show === "All" || item.categorie === show)
                .map((item) => (
                  <motion.div
                    key={item.id}
                    className="w-[49%] max-md:w-full bg-color-primary p-3 relative rounded-xl hover:bg-gray-900 transition-all duration-200"
                    transition={{ duration: 0.4 }}
                    initial={{ scale: 0.6 }}
                    animate={{ scale: 1 }}
                  >
                    <div className="flex flex-col justify-between gap-5">
                      <h6 className="h5 font-bold font-code text-cyan-400">
                        {item.title}
                      </h6>
                      <div className="flex justify-start items-center gap-3">
                        {item.techs.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-2 bg-gray-800 rounded-lg font-grotesk text-sm font-bold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="body-2 line-clamp-3">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="p-2 bg-color-7 w-fit rounded-full">
                          <a href={item.githubRepo}>
                            <img src={images.github} alt="github" />
                          </a>
                        </div>
                        <div className="p-2 bg-color-7 w-fit rounded-full">
                          <a href={item.link}>
                            <img
                              src={images.link}
                              alt="link"
                              className="bg-white"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <img
                      src={item.img}
                      alt=""
                      className="absolute -top-12 bg-color-primary p-5 rounded-full shadow-xl right-0"
                      width={100}
                    />
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
