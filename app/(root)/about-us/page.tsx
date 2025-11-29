import Image from "@node_modules/next/image";
import { socialIcons } from "../features/page";
import { Button } from "@components/ui/button";
import { FaStar } from "@node_modules/react-icons/fa";
import About_Details from "@components/about-us/about-details";
import {
  about_us_details,
  choose_us_card_info,
  community_details,
} from "@constants/prime";
import Contact_Form from "@components/landing-page/contact-form";
import { cn } from "@lib/utils";
import Choose_Us_Card from "@components/about-us/choose-us-card";

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
          <h2 className="text-4xl md:text-5xl font-semibold leading-[72px] text-someBlackColor">
            About Us
          </h2>
          <p className="max-w-[700px] leading-relaxed">
            We’re a team of innovators, pharmacists, and developers dedicated to
            improving how medical information is collected and managed. Our
            platform simplifies data organisation for pharmaceutical
            professionals ensuring accuracy, consistency, and accessibility.
            With a secure infrastructure and intuitive design, we aim to make
            data management effortless, so you can focus on what matters most:
            better healthcare outcomes.
          </p>
          <div className="flex flex-col gap-y-8">
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
          <h2 className="text-4xl md:text-5xl font-semibold leading-[72px] text-someBlackColor">
            Our Community
          </h2>
          <p className="max-w-[700px] leading-relaxed">
            Connect wit other pharmacists, data specialists, and healthcare
            innovators sharing insights and best practices. Our community is
            where knowledge meets collaboration helping each other improve drug
            data accuracy and healthcare systems nationwide.
          </p>
          <div className="flex flex-col gap-y-8">
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

      {/* Why Choose Us */}
      <section className="flex flex-col gap-14 poppins-font">
        <div className="flex flex-col justify-center gap-y-5">
          <h2 className="text-center text-4xl md:text-5xl font-semibold leading-[72px] text-someBlackColor">
            Why Choose Us
          </h2>
          <p className="max-w-[602px] text-[#767676] text-center mx-auto leading-relaxed">
            With every feature we design, we aim to make pharmaceutical data
            management faster, smarter, and safer_for everyone. Our goal is to
            empower pharmacists with reliable, data-driven tools that improve
            accuracy, compliance, and collaboration.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {choose_us_card_info.map(({ description, href, icon_src, title }) => (
            <Choose_Us_Card
              key={title}
              description={description}
              href={href}
              icon_src={icon_src}
              title={title}
            />
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="flex justify-center items-center relative poppins-font">
        <h3 className="absolute font-semibold text-2xl sm:text-5xl flex justify-center items-center text-center">
          Meet the Team
        </h3>
        <Image
          src={"/images/about-us/team.png"}
          alt="Team"
          height={788}
          width={1288}
          quality={100}
          className="w-full h-auto max-h-[788px]"
        />
      </section>

      {/* Contact Us Section */}
      <section className="urbanist-font flex flex-col items-center gap-y-6 md:gap-y-12 gap-x-20 px-4 md:px-[30px]">
        <div className="flex flex-col items-center gap-[1.4375rem]">
          <h3
            className={cn(
              "text-someBlackColor text-center urbanist-font font-semibold tracking-[-0.0722rem] md:max-w-md lg:max-w-[720px]",
              "text-3xl md:text-4xl lg:text-[52px] leading-10 md:leading-12 lg:leading-16"
            )}
          >
            Let’s Build the Future of Pharma Data Together
          </h3>
          <p className="text-[#767676] text-center md:text-xl max-w-[700px] font-medium tracking-[0.36px] leading-relaxed">
            Our team is here to support you_whether you’re a pharmacist,
            developer, or a healthcare innovator. Reach out and we’ll get back
            to you as soon as possible.
          </p>
        </div>
        <Contact_Form />
        <p className="text-center urbanist-font text-sm font-medium">
          Got questions, suggestions, or partnership inquiries?
        </p>
      </section>
    </main>
  );
};

export default About_Us_Page;
