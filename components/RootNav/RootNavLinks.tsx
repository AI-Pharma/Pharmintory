import { usePathname } from "@node_modules/next/navigation";
import Link from "next/link";

interface RootNavLinkProps {
  href: string;
  label: string;
}

const RootNavLink: React.FC<RootNavLinkProps> = ({ label, href }) => {
  const pathname = usePathname();
  return (
    <Link href={href} className="flex text-center hover:cursor-pointer">
      <p
        className={`font-medium inter-font ${
          pathname === href ? "text-cyanText" : "text-inactiveSettingsLink"
        }`}
      >
        {label}
      </p>
    </Link>
  );
};

export default RootNavLink;
