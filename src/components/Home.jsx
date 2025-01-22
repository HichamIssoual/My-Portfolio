import { Cv } from '../assets';
import { home } from '../constants';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="container ml-auto h-screen w-full flex justify-end items-center">
      <div className="w-[95%] max-md:w-full flex justify-evenly items-center max-lg:flex-wrap max-lg:justify-center max-md:justify-start gap-5">
        <div className="w-1/2">
          <h3 className="h3">
            Hi, There
            <motion.span
              className="inline-block ml-3 w-[44px]"
              style={{ transformOrigin: 'left right' }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'reverse',
                repeatDelay: 0.1,
                ease: 'easeInOut',
              }}
              // initial={{ rotate: 0 }}
              animate={{ rotate: [0, 15, -10, 15, -10, 0] }}
            >
              👋🏻
            </motion.span>
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            I&apos;m
            <span className="text-3xl md:text-4xl  font-extrabold text-blue-600 ml-2 text-nowrap">
              {'HICHAM ISSOUAL'.split(' ').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 2,
                    delay: (index + 1) / 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                >
                  {item}{' '}
                </motion.span>
              ))}
            </span>
          </h1>
          <h1 className="text-2xl mt-7 mb-7 md:text-3xl font-medium text-gray-600 tracking-wide inline-block">
            <div className="typing overflow-hidden">Front-End Developer</div>
          </h1>
          <motion.div whileTap={{ scale: 0.9 }}>
            <a
              href={Cv}
              download="hicham-issoual.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-lg transition-all duration-200 hover:from-blue-600 hover:to-blue-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              Download CV
            </a>
          </motion.div>
        </div>
        <div className="relative max-md:m-auto">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
            className="absolute ml-auto left-1/2 origin-center h-full"
          >
            {home.mainSkills.map((skill, index) => (
              <div
                key={index}
                className={`absolute -ml-[1.6rem] left-1/2 origin-bottom h-1/2`}
                style={{
                  rotate: `${index * 90}deg`,
                }}
              >
                <div
                  className={`relative w-[70px] h-[70px] bg-color-7 flex justify-center items-center border rounded-full`}
                >
                  <img src={skill} alt="" width={50} className="rounded-full" />
                </div>
              </div>
            ))}
          </motion.div>
          <div className="m-5">
            <img src={home.img} alt="" className="rounded-full max-w-full" width={400} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
