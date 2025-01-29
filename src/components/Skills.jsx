import images from "../assets";
import { frontEnd_Skills, ToolsSkills } from "../constants";
import { sectionClass } from "./About";
import SectionSkills from "./SectionSkills";

const Skills = () => {
  return (
    <div className="overflow-hidden md:pr-7 md:py-2 max-md:w-full">
      <div className="bg-color-secondary rounded-xl max-md:ml-0 p-2 mb-2 overflow-x-hidden md:h-[96vh] w-full overflow-y-auto">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center text-center mb-10 max-md:mb-10">
          <h4 className="h4 font-code flex items-center gap-2">
            <img src={images.blend} alt="Blend Icon" width={25} />
            <span>Explore</span>
          </h4>
          <h3 className="h3">
            My{" "}
            <span className="text-cyan-400 font-bold animate-pulse">
              Skill Set
            </span>
          </h3>
        </div>

        {/* Front-End Skills */}
        <SectionSkills
          skills={frontEnd_Skills}
          sectionClasses={sectionClass}
          secName="Front-End"
        />

        {/* Tools Skills */}
        <SectionSkills
          skills={ToolsSkills}
          sectionClasses={sectionClass}
          secName="Tools"
        />
      </div>
    </div>
  );
};

export default Skills;
