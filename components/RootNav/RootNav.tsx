"use client";

import Image from "next/image";
import RootNavLink from "./RootNavLinks";
import Link from "@node_modules/next/link";
import { HiBars2 } from "@node_modules/react-icons/hi2";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@components/ui/sheet";
import { CgClose } from "@node_modules/react-icons/cg";

const RootNav = () => {
  const linkSet = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
  ];
  return (
    <header className="rootNav">
      <div className="flex gap-x-[0.375rem] items-center">
        <Image
          width={37}
          height={35}
          alt="company_logo"
          src="/svgs/sidebar/mortar.svg"
        />
        <h1 className="text-xl text-black font-semibold">AI PHARMACY</h1>
      </div>

      <nav className="hidden md:flex gap-[1.875rem]">
        {linkSet.map(({ href, label }) => (
          <RootNavLink key={href} label={label} href={href} />
        ))}
      </nav>

      <div className="hidden md:flex gap-[.9375rem]">
        <Link href="/login" className="loginButton urbanist-font">
          Sign In
        </Link>
        <Link href="/signup" className="signUpButton urbanist-font">
          Sign Up
        </Link>
      </div>
      {/* For mobile screens only */}
      <Sheet>
        <SheetTrigger className="flex md:hidden">
          <HiBars2 size={28} />
        </SheetTrigger>
        <SheetContent className="md:hidden" side="left">
          <SheetHeader>
            <SheetTitle className="flex items-center justify-between">
              <Image
                width={37}
                height={35}
                alt="company_logo"
                src="/svgs/sidebar/mortar.svg"
              />
              <SheetClose>
                <CgClose size={28} />
              </SheetClose>
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col p-4 gap-6">
            {linkSet.map(({ href, label }) => (
              <RootNavLink key={href} label={""} href={href}>
                <SheetClose>{label}</SheetClose>
              </RootNavLink>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default RootNav;
