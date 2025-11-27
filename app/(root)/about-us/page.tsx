import Image from "@node_modules/next/image";
import { socialIcons } from "../features/page";
import { Button } from "@components/ui/button";
import { FaStar } from "@node_modules/react-icons/fa";
import About_Details from "@components/about-us/about-details";
import { about_us_details, community_details } from "@constants/prime";

const About_Us_Page = () => {
  return (
    <main className="flex flex-col inter-font py-[48px] lg:py-[60px] px-4 md:px-[30px] gap-y-[72px] lg:gap-y-36">
      <section className="grid grid-cols-1 lg:grid-cols-11 gap-10 poppins-font">
        <div className="lg:col-span-5 flex flex-col justify-between gap-y-6 lg:gap-y-10 xl:gap-y-40">
          <div className="flex flex-col gap-y-6">
            {/* Tiny Button */}
            <div className="flex items-center p-2.5 gap-2.5 rounded-full bg-cyanText w-fit urbanist-font">
              <FaStar size={12} color="#ffffff" />
              <span className="uppercase text-xs font-semibold text-white">
                Digital Promotion
              </span>
            </div>

            {/* Hero Headline */}

            <h2 className="text-4xl sm:text-[56px] font-bold leading-12 sm:leading-[72px] text-someBlackColor">
              Redifining Pharmaceutical Data Management
            </h2>

            {/* Hero Description */}

            <p className="text-xl font-medium max-w-[468px] leading-normal text-[#767676]">
              We’re a team passionate about merging technology and healthcare to
              simplify how pharmaceutical information is stored and shared.
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
        <div className="lg:col-span-6 flex justify-center lg:justify-end items-center">
          <Image
            alt="Hero Image"
            src={"/images/heroes/features-hero.png"}
            height={1000}
            width={1000}
            quality={100}
            className="w-full lg:w-auto h-full lg:max-h-[600px] xl:max-h-[800px]"
          />
        </div>
      </section>

      {/* About Us */}
      <section className="grid lg:grid-cols-11 gap-14 poppins-font">
        <div className="lg:col-span-6 flex flex-col justify-center gap-y-5">
          <h2 className="text-5xl font-semibold leading-[72px] text-someBlackColor">
            About Us
          </h2>
          <p className="max-w-[700px] leading-relaxed">
            We’re a team of innovators, pharmacists, and developers dedicated to
            improving how medical information is collected and managed. Our
            platform simplifies data organisation for pharmaceutical
            professionals_ensuring accuracy, consistency, and accessibility.
            With a secure infrastructure and intuitive design, we aim to make
            data management effortless, so you can focus on what matters most:
            better healthcare outcomes.
          </p>
          <div className="flex flex-col gap-y-4">
            {about_us_details.map(({ description, imageSrc, title }) => (
              <About_Details
                key={title}
                title={title}
                imageSrc={imageSrc}
                description={description}
                width={118}
              />
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <Image
            alt="About Us"
            src={"/images/about-us/about-us.png"}
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

      <section className="flex items-center justify-center poppins-font">
        <Image
          src={"/images/about-us/demo.png"}
          alt="Nice Picture"
          quality={100}
          width={1000}
          height={1000}
          className="w-full h-auto"
        />
      </section>

      {/* Our Community Section */}

      <section className="grid lg:grid-cols-11 gap-14 poppins-font">
        <div className="lg:col-span-6 flex flex-col justify-center gap-y-5 order-0 lg:order-2">
          <h2 className="text-5xl font-semibold leading-[72px] text-someBlackColor">
            Our Community
          </h2>
          <p className="max-w-[700px] leading-relaxed">
            Connect wit other pharmacists, data specialists, and healthcare
            innovators sharing insights and best practices. Our community is
            where knowledge meets collaboration_helping each other improve drug
            data accuracy and healthcare systems nationwide.
          </p>
          <div className="flex flex-col gap-y-4">
            {community_details.map(({ description, imageSrc, title }) => (
              <About_Details
                key={title}
                title={title}
                imageSrc={imageSrc}
                description={description}
                width={160}
              />
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <Image
            alt="About Us"
            src={"/images/about-us/community.png"}
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>
    </main>
  );
};

export default About_Us_Page;
