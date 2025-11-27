import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { FaStar } from "@node_modules/react-icons/fa";

export interface Testimonial_Card_Props {
  avatarSrc?: string;
  name: string;
  testimonial: string;
  rating: number;
}

const Testimonial_Card = ({
  name,
  rating,
  testimonial,
  avatarSrc,
}: Testimonial_Card_Props) => {
  return (
    <div className="bg-[#E4F8FF] flex flex-col items-center px-8 py-11 rounded-md gap-y-4 urbanist-font">
      <Avatar className="h-14 w-14">
        <AvatarImage src={avatarSrc} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className="text-[#767676]">{name}</p>
      <p className="max-w-[332px] text-center text-xl leading-normal font-medium text-[#1a1a1a]">
        {testimonial}
      </p>
      <div className="flex items-center justify-center gap-x-2.5">
        {Array(rating)
          .fill(null)
          .map((_, index) => (
            <FaStar key={index} size={24} />
          ))}
      </div>
    </div>
  );
};

export default Testimonial_Card;
