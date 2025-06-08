import { useState } from "react";
import { Link } from "@mui/material";
import logoWhite from "../../assets/img/vg2f-logo-white.png";
import appColors from "../../types/appColors";
import { Menu, X } from "lucide-react"; // Importamos iconos de hamburguesa y cerrar

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="flex justify-between items-center px-8 lg:px-32 py-2 fixed top-0 w-full z-50"
      style={{ backgroundColor: appColors.BACKGROUND_HEADER_COLOR }}
    >
      <img src={logoWhite} alt="logo" className="w-16" />

      {/* Menú para desktop (visible en md y arriba) */}
      <nav className="hidden md:flex flex-row gap-4">
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#games">Games</NavLink>
        <NavLink href="#deals">Deals</NavLink>
      </nav>

      {/* Botón hamburguesa (visible solo en mobile) */}
      <button
        className="md:hidden p-2 rounded-md text-white focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menú móvil (aparece cuando está abierto) */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-900 md:hidden flex flex-col items-center py-4 space-y-4 shadow-lg">
          <MobileNavLink href="#home" onClick={toggleMenu}>Home</MobileNavLink>
          <MobileNavLink href="#games" onClick={toggleMenu}>Games</MobileNavLink>
          <MobileNavLink href="#deals" onClick={toggleMenu}>Deals</MobileNavLink>
        </div>
      )}
    </header>
  );
}

// Componente reutilizable para los links de desktop
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
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

// Componente reutilizable para los links mobile
const MobileNavLink = ({ href, children, onClick }: { 
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