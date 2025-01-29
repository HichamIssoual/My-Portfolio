import { Cv } from "../assets";
import { home } from "../constants";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="h-screen w-full flex justify-between items-center max-lg:flex-wrap max-lg:justify-center max-md:justify-start container mx-auto dark:text-white">
      {/* Left Section */}
      <div>
        <h3 className="h3">
          Hi, There
          <motion.span
            className="inline-block ml-3 w-[44px]"
            style={{ transformOrigin: "left right" }}
            animate={{ rotate: [0, 15, -10, 15, -10, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.1,
              ease: "easeInOut",
            }}
          >
            👋🏻
          </motion.span>
        </h3>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
          I&apos;m
          <span className="text-3xl md:text-4xl font-extrabold text-cyan-400 ml-2 text-nowrap max-[345px]:text-2xl">
            {"HICHAM ISSOUAL".split(" ").map((item, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 2,
                  delay: (index + 1) / 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {item}{" "}
              </motion.span>
            ))}
          </span>
        </h1>

        <h1 className="text-2xl mt-7 mb-7 md:text-3xl font-medium text-gray-600 dark:text-gray-300">
          <div className="typing overflow-hidden">Front-End Developer</div>
        </h1>

        <motion.div whileTap={{ scale: 0.9 }}>
          <a
            href={Cv}
            download="hicham-issoual.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 font-extrabold py-5 bg-gradient-to-r from-cyan-400 to-cyan-500 text-white rounded-lg shadow-lg transition-all duration-200 hover:from-cyan-500 hover:to-cyan-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 dark:focus:ring-cyan-500 dark:hover:from-cyan-400 dark:hover:to-cyan-500"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Right Section */}
      <div className="relative overflow-hidden">
        <motion.div
          className="absolute ml-auto left-1/2 origin-center h-full"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {home.mainSkills.map((skill, index) => (
            <div
              key={index}
              className="absolute -ml-[1.6rem] left-1/2 origin-bottom h-1/2"
              style={{ rotate: `${index * 90}deg` }}
            >
              <div className="relative w-[70px] h-[70px] bg-color-7 flex justify-center items-center border rounded-full dark:bg-white">
                <img src={skill} alt="" width={50} className="rounded-full" />
              </div>
            </div>
          ))}
        </motion.div>

        <div className="m-5">
          <img
            src={home.img}
            alt="Profile"
            className="rounded-full max-w-full"
            width={400}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
