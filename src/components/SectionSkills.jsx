import { motion } from "framer-motion";

const SectionSkills = ({ skills, sectionClasses, secName }) => {
  return (
    <>
      {/* Section Header */}
      <div className="mb-10 max-md:mb-8 mt-10">
        <h2 className={sectionClasses}>{secName}</h2>
      </div>

      {/* Skills Section */}
      <div className="flex flex-wrap items-start gap-9">
        {skills.map(({ id, icon, title, percent, yearsExp }) => (
          <div key={id} className="w-2/5 max-md:w-full flex items-center gap-2">
            {/* Icon */}
            <div className="bg-white rounded-full h-[50px] w-[50px] flex justify-center items-center overflow-hidden p-1">
              <img
                src={icon}
                alt={`${title} icon`}
                width={40}
                className={id === "3" ? "rounded-full" : ""}
                loading="lazy"
              />
            </div>

            {/* Skill Details */}
            <div className="flex-1">
              <h6 className="h6">{title}</h6>

              {/* Skill Progress Bar */}
              <div className="w-full bg-color-primary border border-slate-400">
                <motion.div
                  className="bg-cyan-400 h-3"
                  transition={{ duration: 1 }}
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${percent}%` }}
                />
              </div>

              {/* Years of Experience */}
              {yearsExp && (
                <p className="body-2 text-gray-300/50 font-grotesk font-bold">
                  {yearsExp}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionSkills;
