import { CloudArrowDown} from "@phosphor-icons/react";

const AboutHero = () => {
  return (
    <div className="aboutHero lg:px-28 sm:px-10 px-5 lg:pt-40 pt-96 ">
        <div className="lg:w-2/4 w-full flex flex-col md:gap-8 gap-4">
            <h2 className="font-[600] xl:text-8xl lg:text-6xl text-4xl tracking-wide text-white">
              ABOUT <br className="lg:block hidden"/> COMPANY
            </h2>
            <p className="text-wrap font-[500] lg:text-xl md:text-base text-sm text-white">
              We don't just create projects, we create new opportunities. By building state-scale facilities, we are building the future. We care about the environment:
            </p>
            <button className="text-white bg-[#fab448] px-5 py-3 w-[200px] flex items-center justify-around">Download <CloudArrowDown size={32} /></button>
        </div>
    </div>
  )
}

export default AboutHero