import { cn } from "@lib/utils";
import Image from "next/image";

export interface MeritTileProps {
  image: string;
  title: string;
  even?: boolean;
  description: string;
}

const MeritTile: React.FC<MeritTileProps> = ({
  image,
  title,
  description,
  even,
}) => {
  return (
    <div className="grid md:grid-cols-12 gap-y-24 gap-x-12">
      <div
        className={cn(
          "md:col-span-7 flex flex-col flex-1 items-center justify-center",
          even && "md:order-1"
        )}
      >
        <div className="relative flex items-center justify-center">
          <div
            className={cn(
              "z-10 absolute h-[360px] sm:h-[560px] md:h-[380px] lg:h-[490px] w-[70%] rounded-3xl",
              even ? "bg-[#E8FAFE]" : "bg-[#C3D5FF]"
            )}
          ></div>
          <div className="z-20 flex items-center justify-center px-4 py-4 bg-black rounded-[20px]">
            <Image
              width={1000}
              src={image}
              height={1000}
              quality={100}
              alt="image of the application"
              className="max-h-[360px] w-auto"
            />
          </div>
        </div>
      </div>
      <div
        className={cn(
          "md:col-span-5 flex flex-col justify-center gap-y-4 max-w-lg"
        )}
      >
        <h3 className="text-[#111827] text-4xl md:text-3xl lg:text-4xl text-start font-bold leading-[3rem] md:leading-[2rem] lg:leading-[3rem]">
          {title}
        </h3>
        <p className="inter-font text-sm lg:text-base leading-[1.4rem] lg:leading-[1.6313rem] text-[#626262]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MeritTile;
