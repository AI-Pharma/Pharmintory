import Image from "@node_modules/next/image";

export interface About_Details_Props {
  title: string;
  imageSrc: string;
  description: string;
  width?: number;
}

const About_Details = ({
  description,
  imageSrc,
  title,
  width,
}: About_Details_Props) => {
  return (
    <div className="grid grid-cols-12 gap-y-3 sm:flex sm:leading-loose">
      <Image
        src={imageSrc}
        alt="icon"
        width={50}
        height={50}
        quality={100}
        className="h-6 w-6"
      />
      <span
        className={`col-span-11 sm:ml-4 font-semibold`}
        style={{ minWidth: width }}
      >
        {title}
      </span>
      <div className="col-span-full flex gap-x-1">
        <span className="hidden sm:flex">:</span>
        <p className="leading-normal sm:leading-loose">{description}</p>
      </div>
    </div>
  );
};

export default About_Details;
