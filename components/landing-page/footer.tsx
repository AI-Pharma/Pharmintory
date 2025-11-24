import Link from "@node_modules/next/link";
import { FaFacebookF } from "@node_modules/react-icons/fa";
import { FaGoogle, FaLinkedinIn } from "@node_modules/react-icons/fa6";
import { GoArrowRight } from "@node_modules/react-icons/go";
import { TbBrandTwitterFilled } from "@node_modules/react-icons/tb";
import Image from "next/image";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 px-4 md:px-8 py-8 border-t border-[#D2D2D2] urbanist-font">
      <div className="flex justify-center md:justify-start items-center lg:items-baseline -order-3 md:order-0">
        <div className="flex gap-x-[0.375rem] items-center">
          <Image
            width={37}
            height={35}
            alt="company_logo"
            src="/svgs/sidebar/mortar.svg"
          />
          <h1 className="text-xl text-black font-semibold inter-font">
            AI PHARMACY
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-10 md:col-span-2 lg:col-span-1 md:order-3 lg:order-0">
        <div className="flex items-center lg:mt-3 gap-x-4">
          <FaFacebookF size={24} />
          <TbBrandTwitterFilled size={24} />
          <FaLinkedinIn size={24} />
          <FaGoogle size={24} />
        </div>
        <div className="flex flex-col items-center gap-y-4 text-[#767676] text-sm">
          <nav className="flex items-center justify-around flex-wrap gap-y-4 gap-x-7">
            <Link
              href={"/privacy-policy"}
              className="hover:text-[#1a1a1a] transition-all transform-gpu duration-150 delay-75"
            >
              Privacy Policy
            </Link>
            <Link
              href={"/terms-and-condition"}
              className="hover:text-[#1a1a1a] transition-all transform-gpu duration-150 delay-75"
            >
              Terms & Condition
            </Link>
            <Link
              href={"/legal"}
              className="hover:text-[#1a1a1a] transition-all transform-gpu duration-150 delay-75"
            >
              Legal
            </Link>
            <Link
              href={"/help"}
              className="hover:text-[#1a1a1a] transition-all transform-gpu duration-150 delay-75"
            >
              Help
            </Link>
          </nav>
          <p>&copy; {year} All rights reserved</p>
        </div>
      </div>
      <form className="flex justify-center md:justify-end items-start -order-1 md:order-0">
        <div className="flex items-center gap-1 border border-[#D2D2D2] rounded-md px-3 py-2">
          <input
            type="text"
            placeholder="Subscribe"
            className="border-none outline-none text-base"
          />
          <button type="submit" className="border-none outline-0">
            <GoArrowRight size={18} color="#1A1A1A" />
          </button>
        </div>
      </form>
    </footer>
  );
};

export default Footer;
