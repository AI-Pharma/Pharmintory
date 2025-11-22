import FeatureTile from "@components/FeatureTile";
import MeritTile from "@components/MeritTile";
import { featureTileInfo, meritTileInfo } from "@constants/prime";
import { cn } from "@lib/utils";
import Image from "next/image";

const Landing = () => {
  return (
    <main className="flex flex-col items-center inter-font gap-y-8 py-[30px] md:py-[48px] lg:py-[60px]">
      {/* Hero Section */}
      <section className="flex items-center justify-center flex-col gap-y-[1rem] md:gap-y-[2rem] px-4 md:px-[30px] w-full">
        <div className="flex flex-col md:w-lg lg:w-[39.6875rem] items-center gap-y-4 lg:gap-[1.4375rem]">
          <h1 className="text-center text-2xl font-semibold tracking-[-0.0271rem] text-cyanText urbanist-font capitalize">
            AI PHARMA
          </h1>
          <h2
            className={cn(
              "text-someBlackColor text-center urbanist-font font-bold tracking-[-0.0722rem]",
              "text-3xl md:text-5xl lg:text-[4rem] leading-10 md:leading-14 lg:leading-[4.625rem]"
            )}
          >
            The future of pharmaceutical data
          </h2>
          <p className="text-[#767676] text-center max-w-lg">
            Say goodbye to manual processes and hello to a more streamlined and
            efficient process with our software solution.
          </p>
          <button
            className={cn(
              "flex items-center gap-[.8594rem] rounded-lg px-[1.25rem] py-2 text-cyanText urbanist-font font-semibold tracking-[-0.0203rem]",
              "hover:cursor-pointer hover:bg-activeBtn/10 transition-colors duration-200"
            )}
          >
            Learn More
            <Image
              width={22}
              height={22}
              alt="learn more"
              src="/svgs/arrow-back.svg"
            />
          </button>
        </div>

        {/* Image container */}
        <div className="px-3 pt-3 md:px-6 md:pt-6 bg-black rounded-t-[12px] md:rounded-t-[42px]">
          <Image
            width={1200}
            height={600}
            quality={100}
            alt="dashboard image"
            src="/images/dashboard.png"
            className="w-[960px] h-auto"
          />
        </div>
      </section>

      <section className="flex flex-col pt-[30px] md:pt-[48px] lg:pt-[60px] px-4 md:px-[30px]">
        <div className="flex flex-col items-center gap-[1.4375rem] mb-[4.25rem]">
          <h3 className="text-center text-2xl font-semibold leading-[2.125rem] tracking-[-0.0271rem] text-cyanText urbanist-font capitalize">
            Long Headline Sample
          </h3>
          <h4
            className={cn(
              "text-someBlackColor text-center urbanist-font font-semibold tracking-[-0.0722rem] md:w-md lg:w-[48.875rem]",
              "text-3xl md:text-4xl lg:text-[3.2rem] leading-10 md:leading-14 lg:leading-[62px]"
            )}
          >
            Smart tools for smarter data management
          </h4>
        </div>

        <div className="grid md:grid-cols-3 gap-8 justify-center">
          {featureTileInfo.map((info, index) => (
            <FeatureTile
              key={index}
              icon={info.icon}
              text={info.text}
              href={info.href}
            />
          ))}
        </div>
      </section>

      <section className="mt-24 flex flex-col gap-y-48 pt-[30px] md:pt-[48px] lg:pt-[60px] px-4 md:px-[30px]">
        {meritTileInfo.map((info, index) => (
          <MeritTile
            key={index}
            image={info.image}
            title={info.title}
            even={(index + 1) % 2 === 0}
            foreground={info.foreground}
            description={info.description}
          />
        ))}
      </section>
    </main>
  );
};

export default Landing;
