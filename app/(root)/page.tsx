import FeatureTile from "@components/FeatureTile";
import ContactForm from "@components/landing-page/contact-form";
import PriceCard from "@components/landing-page/price-card";
import TestimonialCard from "@components/landing-page/testimonial-card";
import MeritTile from "@components/MeritTile";
import {
  featureTileInfo,
  meritTileInfo,
  priceCardInfo,
  Testimonials,
} from "@constants/prime";
import { cn } from "@lib/utils";
import Link from "@node_modules/next/link";
import Image from "next/image";

const Landing = () => {
  return (
    <main className="flex flex-col items-center inter-font gap-y-[72px] lg:gap-y-36 py-[48px] lg:py-[60px]">
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

      <section className="flex flex-col px-4 md:px-[30px] gap-y-9">
        <div className="flex flex-col items-center gap-[1.4375rem]">
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
          {featureTileInfo.map(({ href, icon, text }, index) => (
            <FeatureTile key={index} icon={icon} text={text} href={href} />
          ))}
        </div>
      </section>

      <section className="my-16 flex flex-col gap-y-48 px-4 md:px-[30px]">
        {meritTileInfo.map((info, index) => (
          <MeritTile
            key={index}
            image={info.image}
            title={info.title}
            even={(index + 1) % 2 === 0}
            description={info.description}
          />
        ))}
      </section>

      <section className="flex flex-col md:flex-row items-center gap-y-12 gap-x-20 px-4 md:px-[30px]">
        {priceCardInfo.map(
          ({ description, features, frequency, headline, price }, idx) => (
            <PriceCard
              description={description}
              features={features}
              frequency={frequency}
              headline={headline}
              price={price}
              key={headline}
              lastCard={idx === priceCardInfo.length - 1}
            />
          )
        )}
      </section>

      <section className="urbanist-font flex flex-col md:flex-row items-center gap-y-6 md:gap-y-12 gap-x-20 px-4 md:px-[30px]">
        <div className="flex flex-col items-center gap-[1.4375rem]">
          <h3
            className={cn(
              "text-someBlackColor text-center urbanist-font font-semibold tracking-[-0.0722rem] md:max-w-md lg:max-w-[720px]",
              "text-3xl md:text-4xl lg:text-[52px] leading-10 md:leading-12 lg:leading-16"
            )}
          >
            Start Building Smarter Pharmaceutical Data Today
          </h3>
          <p className="text-[#767676] text-center md:text-xl max-w-[720px] font-medium tracking-[0.36px] leading-relaxed">
            Collaborate, contribute, and make healthcare information more
            organised and accessible. Whether you’re a pharmacist or data admin,
            your journey starts here.
          </p>
          <div className="flex items-center gap-x-4">
            <Link
              href={"/"}
              className={cn(
                "py-3.5 px-7 text-white bg-cyanText rounded-md font-semibold md:text-lg border border-cyanText",
                "hover:bg-cyanText/80 hover:cursor-pointer",
                "transition-all transform-gpu duration-150 delay-75"
              )}
            >
              Get Started
            </Link>
            <Link
              href={"/"}
              className={cn(
                "py-3.5 px-7 bg-white text-cyanText rounded-md font-semibold md:text-lg border-2 border-cyanText",
                "hover:bg-cyanText hover:text-white hover:cursor-pointer",
                "transition-all transform-gpu duration-150 delay-75"
              )}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="urbanist-font flex flex-col items-center gap-y-6 md:gap-y-12 gap-x-20 px-4 md:px-[30px]">
        <h3
          className={cn(
            "text-someBlackColor text-center urbanist-font font-semibold tracking-[-0.0722rem] md:max-w-md lg:max-w-[720px]",
            "text-3xl md:text-4xl lg:text-[52px] leading-10 md:leading-12 lg:leading-16"
          )}
        >
          Testimonials
        </h3>
        <div className="flex justify-around items-center flex-wrap gap-y-12 gap-x-8">
          {Testimonials.map(({ name, rating, testimonial, avatarSrc }) => (
            <TestimonialCard
              key={name}
              name={name}
              rating={rating}
              testimonial={testimonial}
              avatarSrc={avatarSrc}
            />
          ))}
        </div>
      </section>

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
        <ContactForm />
        <p className="text-center urbanist-font text-sm font-medium">
          Got questions, suggestions, or partnership inquiries?
        </p>
      </section>
    </main>
  );
};

export default Landing;
