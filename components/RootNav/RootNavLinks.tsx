"use client";
import { cn } from "@lib/utils";
import { usePathname } from "@node_modules/next/navigation";
import Link from "next/link";

interface RootNavLinkProps {
  href: string;
  label: string;
  children?: React.ReactNode;
}

const RootNavLink: React.FC<RootNavLinkProps> = ({ label, href, children }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        "flex text-lg md:text-sm lg:text-base text-center hover:cursor-pointer font-medium inter-font",
        "hover:text-cyanText/70 transition-all transform-gpu duration-150 delay-75",
        pathname === href ? "text-cyanText" : "text-inactiveSettingsLink"
      )}
    >
      {label}
      {children}
    </Link>
  );
};

export default RootNavLink;
