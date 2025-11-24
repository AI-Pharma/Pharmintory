import { cn } from "@lib/utils";
import Image from "next/image";

export interface PriceCardProps {
  headline: string;
  description: string;
  price: number;
  frequency: string;
  features: string[];
  lastCard?: boolean;
}

const PriceCard = ({
  headline,
  description,
  features,
  frequency,
  price,
  lastCard,
}: PriceCardProps) => {
  return (
    <>
      <div className="flex flex-col max-w-[255px] urbanist-font">
        <div className="flex flex-col gap-y-2">
          <h4 className="leading-8 font-semibold text-2xl capitalize">
            {headline}
          </h4>
          <p className="text-[#767676] leading-7 tracking-tight text-base capitalize">
            {description}
          </p>
        </div>
        <div
          className={cn(
            "mt-6 border-2 rounded-md border-cyanText leading-7 tracking-tight font-semibold",
            "flex items-center justify-center py-3 text-cyanText",
            "hover:bg-cyanText hover:text-white hover:cursor-pointer",
            "transition-all duration-150 delay-75"
          )}
        >
          Choose Plan
        </div>
        <div className="mt-10 flex flex-col gap-y-5">
          <h4 className="leading-16 items-baseline text flex gap-x-3">
            <span className="text-5xl font-semibold tracking-tighter">
              ${price}
            </span>
            <span className="font-medium text-xl leading-8 tracking-[0.36px]">
              /{frequency}
            </span>
          </h4>
          <div className="flex flex-col gap-y-2">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-x-1">
                <Image
                  alt="icon"
                  src={"/svgs/price-check.svg"}
                  width={1000}
                  height={1000}
                  className="w-5 h-5"
                />
                <span className="leading-6 inter-font text-[#767676]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {!lastCard && (
        <>
          <Image
            src={"/svgs/separator.svg"}
            alt="separator"
            height={1000}
            width={1000}
            quality={100}
            className="hidden lg:block w-auto h-[300px]"
          />
          <Image
            src={"/svgs/separator-horizontal.svg"}
            alt="separator"
            height={1000}
            width={1000}
            quality={100}
            className="block md:hidden w-[300px] h-auto"
          />
        </>
      )}
    </>
  );
};

export default PriceCard;
