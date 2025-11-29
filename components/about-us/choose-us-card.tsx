import Link from "@node_modules/next/link";
import Choose_Us_Icons from "./choose-us-icon";

export interface Choose_Us_CardProps {
  title: string;
  description: string;
  icon_src: string;
  href: string;
}

const Choose_Us_Card = ({
  description,
  icon_src,
  href,
  title,
}: Choose_Us_CardProps) => {
  return (
    <div className="flex flex-col gap-y-6 p-8 bg-cyanText/20 rounded-md shadow-xl">
      <div className="flex justify-between items-center">
        <h5 className="text-2xl font-bold text-cyanText">{title}</h5>
        <div className="">
          <Choose_Us_Icons src={icon_src} />
        </div>
      </div>
      <p className="max-w-[298px] text-[#767676] leading-normal">
        {description}
      </p>
      <Link href={href} className="text-cyanText font-bold text-sm">
        Learn More
      </Link>
    </div>
  );
};

export default Choose_Us_Card;
