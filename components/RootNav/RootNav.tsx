"use client";

import Image from "next/image";
import RootNavLink from "./RootNavLinks";
import Link from "@node_modules/next/link";

const RootNav = () => {
  const linkSet = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
  ];
  return (
    <nav className="rootNav">
      <div className="flex gap-x-[0.375rem] items-center">
        <Image
          width={37}
          height={35}
          alt="company_logo"
          src="/svgs/sidebar/mortar.svg"
        />
        <h1 className="text-xl text-black font-normal">AI PHARMACY</h1>
      </div>

      <div className="flex gap-[1.875rem]">
        {linkSet.map(({ href, label }) => (
          <RootNavLink key={href} label={label} href={href} />
        ))}
      </div>

      <div className="flex gap-[.9375rem]">
        <Link href="/login" className="loginButton urbanist-font">
          Sign In
        </Link>
        <Link href="/signup" className="signUpButton urbanist-font">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default RootNav;
