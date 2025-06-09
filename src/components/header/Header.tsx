import { useState } from "react";
import { Link } from "@mui/material";
import logoWhite from "../../assets/img/vg2f-logo-white.png";
import appColors from "../../types/appColors";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="flex justify-between items-center px-8 lg:px-40 py-2 fixed top-0 w-full z-50"
      style={{ backgroundColor: appColors.BACKGROUND_HEADER_COLOR }}
    >
      <img src={logoWhite} alt="logo" className="w-16" />
      <nav className="hidden md:flex flex-row gap-4">
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#games">Games</NavLink>
        <NavLink href="#deals">Deals</NavLink>
      </nav>
      <button
        className="md:hidden p-2 rounded-md text-white focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div
        className={`
        fixed top-16 left-0 right-0 bg-gray-900 md:hidden flex flex-col items-center 
        overflow-hidden transition-all duration-300 ease-in-out
        ${isMenuOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0"}
        shadow-lg
      `}
      >
        <MobileNavLink href="#home" onClick={toggleMenu}>
          Home
        </MobileNavLink>
        <MobileNavLink href="#games" onClick={toggleMenu}>
          Games
        </MobileNavLink>
        <MobileNavLink href="#deals" onClick={toggleMenu}>
          Deals
        </MobileNavLink>
      </div>
    </header>
  );
}

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="px-4 py-2 rounded-full transition duration-300"
    sx={{
      textDecoration: "none",
      color: appColors.WHITE,
      "&:hover": {
        backgroundColor: appColors.WHITE,
        color: appColors.DARK_TEXT_COLOR,
      },
    }}
  >
    {children}
  </Link>
);

const MobileNavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link
    href={href}
    className="w-full text-center py-3 px-4 text-white hover:bg-gray-800 transition duration-300"
    sx={{
      textDecoration: "none",
    }}
    onClick={onClick}
  >
    {children}
  </Link>
);
