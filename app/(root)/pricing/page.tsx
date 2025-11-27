import PriceCard from "@components/landing-page/price-card";
import { priceCardInfo, yearly_packages } from "@constants/prime";
import { cn } from "@lib/utils";
import Image from "@node_modules/next/image";
import Link from "@node_modules/next/link";

const Pricing_Page = () => {
  return (
    <main className="flex flex-col inter-font py-[48px] lg:py-[60px] px-4 md:px-[30px] gap-y-[72px] lg:gap-y-36">
      <section className="flex flex-col items-center gap-y-16 urbanist-font">
        <div className="flex justify-center items-center">
          <Image
            src={"/images/heroes/pricing-hero.png"}
            alt="Pricing Hero"
            width={1110}
            height={350}
            className=""
          />
        </div>
        <div className="text-center flex flex-col items-center gap-y-4">
          <h1 className="text-5xl md:text-6xl max-w-[1060px] font-bold leading-[3.5rem] md:leading-[4.5rem]">
            Choose the Right Plan for Your Organization
          </h1>
          <p className="text-[#767676] max-w-3xl text-lg">
            Whether you’re managing one pharmacy or a nationwide network,
            there’s a plan that fits. No hidden fees, no complicated contracts.
            Just clear pricing for powerful tools.
          </p>
          <Link
            href={"/pricing#pricing-plans"}
            className="flex items-center justify-center text-cyanText urbanist-font font-semibold leading-[1.625rem] tracking-[-0.0181rem] text-lg gap-[.4375rem] hover:cursor-pointer"
          >
            Get Started
            <Image
              width={24}
              height={24}
              alt="see more"
              src="/svgs/right.svg"
            />
          </Link>
        </div>
      </section>

      {/* Monthly Packages */}
      <section className="max-w-[1180px] mx-auto flex flex-col items-center gap-y-10">
        <h2 className="w-full text-start poppins-font font-medium text-5xl tracking-tight">
          Monthly Packages
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-y-12 gap-x-20">
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
        </div>
      </section>
      {/* Yearly Packages */}
      <section className="max-w-[1180px] mx-auto flex flex-col items-center gap-y-10">
        <h2 className="w-full text-start poppins-font font-medium text-5xl tracking-tight">
          Yearly Packages
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-y-12 gap-x-20">
          {yearly_packages.map(
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="urbanist-font flex flex-col md:flex-row items-center gap-y-6 md:gap-y-12 gap-x-20 mx-auto">
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
    </main>
  );
};

export default Pricing_Page;
