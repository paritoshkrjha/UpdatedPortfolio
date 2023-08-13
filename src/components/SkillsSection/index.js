import MarqueeCards from "./MarqueeCards";
import SectionTitle from "../SectionTitle";
import SkillsCards from "./SkillCards";
const Skills = () => {
    return (
      <div id="skills" className=" w-full overflow-hidden-web flex justify-center my-20">
        <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
          <div className="w-full">
            <SectionTitle title="SKILLS" subtitle="WHAT I DO?" />
          </div>
          <div className="xl:border-l-2 xl:border-r-2 xl:border-primary-400 h-full my-20">
            <div className="relative">
              <div className="absolute top-[45px] w-full h-[1px] bg-white"></div>
              <MarqueeCards direction="left">
                <SkillsCards />
              </MarqueeCards>
            </div>
            <div className="relative">
              <div className="absolute top-[45px] w-full h-[1px] bg-white"></div>
              <MarqueeCards direction="right">
                <SkillsCards />
              </MarqueeCards>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Skills;
  