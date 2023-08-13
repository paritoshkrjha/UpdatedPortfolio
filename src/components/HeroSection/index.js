
import LeftHeroSection from "./LeftHeroSection";
import RigthHeroSection from "./RightHeroSection";

const HeroSection = () => {
    return (
      <div className=" flex flex-col justify-around items-center w-[80%] h-[80vh] lg:gap-10  py-4 lg:px-20 xl:px-36">
        <RigthHeroSection />
        <LeftHeroSection/>
      </div>
    )
}

export default HeroSection;

