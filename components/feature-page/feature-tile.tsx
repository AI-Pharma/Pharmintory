import Image from "@node_modules/next/image";

export interface More_Feature_Tile_Props {
  image: string;
  title: string;
  description: string;
}

const More_Feature_Tile = ({
  image,
  description,
  title,
}: More_Feature_Tile_Props) => {
  return (
    <div className="flex flex-col gap-y-12 urbanist-font">
      <Image
        src={image}
        alt="demo"
        width={1000}
        height={1000}
        quality={100}
        className="h-auto w-full"
      />
      <div className="flex flex-col gap-y-4">
        <h4 className="text-2xl font-semibold">{title}</h4>
        <p className="text-sm text-[#767676]">{description}</p>
      </div>
    </div>
  );
};

export default More_Feature_Tile;
