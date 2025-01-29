import images, { aboutImg } from "../assets";
import { aboutContact, personalIntrest } from "../constants";
import { motion } from "framer-motion";

export const sectionClass =
  "text-3xl font-grotesk font-extrabold text-left pl-5 border-l-[4px] border-cyan-400 bg-gray-800/30 p-2 rounded-2xl rounded-s-none w-fit";

const getContactLink = (link) =>
  link === "hichamissoual.one@gmail.com" ? `mailto:${link}` : link;

const About = () => {
  return (
    <div className="overflow-hidden md:pr-7 md:py-2 max-md:w-full">
      <div className="bg-color-secondary rounded-xl max-md:ml-0 p-2 mb-2 overflow-x-hidden md:h-[96vh] w-full overflow-y-auto">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center text-center mb-20 max-md:mb-10">
          <h4 className="h4 font-code flex items-center gap-2">
            <img src={images.blend} alt="Blend logo" width={25} />
            <span>Hello...</span>
          </h4>
          <h3 className="h3">
            I&apos;m{" "}
            <span className="text-cyan-400 font-bold animate-pulse">
              Hicham Issoual
            </span>
          </h3>
          <div className="flex justify-center max-lg:justify-start items-center gap-2 max-lg:flex-wrap">
            {aboutContact.map(
              (item) =>
                item.icon &&
                item.title && (
                  <a
                    key={item.id}
                    href={getContactLink(item.link)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mr-2 transition-all hover:text-cyan-400"
                  >
                    <div className="p-1 bg-color-primary rounded-full">
                      <img
                        src={item.icon}
                        alt={item.title}
                        width={30}
                        loading="lazy"
                      />
                    </div>
                    <span>{item.title}</span>
                  </a>
                )
            )}
          </div>
        </div>

        {/* About Section */}
        <div className="mb-10 max-md:mb-5">
          <h2 className={sectionClass}>
            <span className="text-cyan-400">A little bit</span> about me...
          </h2>
        </div>
        <div className="flex items-center gap-4 mb-20 max-md:mb-10 max-lg:flex-col">
          <motion.img
            src={aboutImg}
            alt="A picture of Hicham Issoual"
            width={400}
            className="max-lg:w-3/4"
            loading="lazy"
            transition={{ duration: 0.3 }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
          />
          <p>
            I’m a{" "}
            <span className="text-cyan-400 font-bold animate-pulse">
              front-end developer
            </span>{" "}
            specializing in{" "}
            <span className="text-cyan-400 font-bold animate-pulse">
              React.js
            </span>
            , with good experience in{" "}
            <span className="text-yellow-600 font-bold animate-pulse">
              JavaScript
            </span>
            , <span className="text-red-600 font-bold">HTML</span>,{" "}
            <span className="text-cyan-400 font-bold">CSS</span>, and{" "}
            <span className="text-teal-600 font-bold animate-pulse">
              Tailwind CSS
            </span>
            . I also have hands-on experience with{" "}
            <span className="text-indigo-600 font-bold animate-pulse">
              Redux Toolkit
            </span>{" "}
            for state management and{" "}
            <span className="text-pink-600 font-bold">Framer Motion</span> to
            create dynamic animations that enhance user experiences.
            <br />
            <br />
            In addition to front-end technologies, I’m familiar with working
            with{" "}
            <span className="text-green-600 font-bold animate-pulse">
              RESTful APIs
            </span>{" "}
            to integrate seamless data interactions between front-end and
            back-end systems.
            <br />
            <br />
            I build responsive, visually appealing web apps with a focus on
            functionality and polished design.
            <br />
            <br />
            I hold a high school diploma in Life and Earth Sciences, and
            I&apos;m continuously expanding my knowledge in web development.
            <br />
            <br />
            I’m excited to work with you and help bring your vision to life.
          </p>
        </div>

        {/* Personal Interests Section */}
        <div>
          <h2 className={sectionClass}>
            Personal <span className="text-cyan-400">interests</span>
          </h2>
          <div className="mt-6 ml-3 flex justify-between items-start gap-3 gap-y-7 flex-wrap">
            {personalIntrest.map(
              (item) =>
                item.icon &&
                item.title &&
                item.description && (
                  <motion.div
                    key={item.id}
                    className="flex items-center gap-3 w-[45%] max-md:w-full bg-color-primary shadow-md p-2 rounded-xl transition-all hover:bg-cyan-800"
                    whileHover={{
                      scale: 1.05,
                      rotateX: -10,
                      rotateY: 10,
                      boxShadow: "0 15px 25px rgba(0, 0, 0, 0.2)",
                    }}
                    whileTap={{
                      scale: 0.98,
                      rotateX: -5,
                      rotateY: 5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <div className="p-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full">
                      <div className="rounded-full bg-color-7 p-1">
                        <img
                          src={item.icon}
                          alt={item.title}
                          width={100}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div>
                      <h5 className="h6 font-extrabold font-code">
                        {item.title}
                      </h5>
                      <p className="body-2">{item.description}</p>
                    </div>
                  </motion.div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
