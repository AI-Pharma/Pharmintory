import Image from "@node_modules/next/image";

const Choose_Us_Icons = ({ src }: { src: string }) => {
  return (
    <Image
      alt="Icon"
      src={src}
      width={50}
      height={50}
      quality={100}
      className="h-6 w-6"
    />
  );
};

export default Choose_Us_Icons;
