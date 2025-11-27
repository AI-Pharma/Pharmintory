import { Button } from "@components/ui/button";
import Image from "@node_modules/next/image";
import { FaStar } from "@node_modules/react-icons/fa";

const socialIcons: string[] = [
  "/svgs/social-icons/google.svg",
  "/svgs/social-icons/linkedin.svg",
  "/svgs/social-icons/facebook.svg",
];

const FeaturesPage = () => {
  return (
    <main className="flex flex-col inter-font py-[30px] md:py-[48px] lg:py-[60px] px-4 md:px-[30px] gap-y-8 md:gap-y-12 lg:gap-y-[60px]">
      <section className="grid grid-cols-11 gap-x-10 poppins-font">
        <div className="col-span-5 flex flex-col justify-between">
          <div className="flex flex-col gap-y-6">
            {/* Tiny Button */}
            <div className="flex items-center p-2.5 gap-2.5 rounded-full bg-cyanText w-fit urbanist-font">
              <FaStar size={12} color="#ffffff" />
              <span className="uppercase text-xs font-semibold text-white">
                Digital Promotion
              </span>
            </div>

            {/* Hero Headline */}

            <h2 className="text-[58px] font-bold leading-[72px] text-someBlackColor">
              Designed for Pharmacists, Built for Precision.
            </h2>

            {/* Hero Description */}

            <p className="text-xl font-medium max-w-[468px] text-[#767676]">
              Nowadays, it isn’t uncommon to see lenders rapidly adopting a
              digital lending strategy to streamline the lending process
            </p>

            {/* Hero Call to action button */}
            <Button className="w-fit flex items-center gap-2.5 h-14">
              <span className="text-lg">Explore More</span>
              <Image
                src={"/svgs/social-icons/arrow.svg"}
                alt="icon"
                width={1000}
                height={1000}
                quality={100}
                className="w-auto h-6"
              />
            </Button>
          </div>
          {/* Social Icons */}
          <div className="flex items-center gap-x-4">
            {socialIcons.map((icon) => (
              <Image
                key={icon}
                src={icon}
                alt="icon"
                width={1000}
                height={1000}
                quality={100}
                className="w-auto h-12"
              />
            ))}
          </div>
        </div>
        <div className="col-span-6">
          <Image
            alt="Hero Image"
            src={"/images/heroes/features-hero.png"}
            height={1000}
            width={1000}
            quality={100}
            className="w-auto h-auto max-h-[815px]"
          />
        </div>
      </section>
    </main>
  );
};

export default FeaturesPage;
