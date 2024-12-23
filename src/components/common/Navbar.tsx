import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { PATH } from "../../const";
import { NavButton } from "./NavButton";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close the mobile menu after clicking
  };

  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-2xl font-bold text-blue-600 w-16 h-16">
              <img src={Logo} alt="logo" className="w-full h-full" />
            </Link>
            <label className="text-gray-500 font-bold text-lg">
              BlockBlackHole
            </label>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavButton
              onClick={() => {
                pathname !== PATH.HOME && navigate(PATH.HOME);
                scrollToSection("home");
              }}
            >
              Home
            </NavButton>
            {pathname === PATH.HOME && (
              <>
                <NavButton onClick={() => scrollToSection("services")}>
                  Services
                </NavButton>
                <NavButton onClick={() => scrollToSection("team")}>
                  Team
                </NavButton>
                <NavButton onClick={() => scrollToSection("contact")}>
                  Contact
                </NavButton>
              </>
            )}
            <NavButton onClick={() => navigate(PATH.CAREER)}>Career</NavButton>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection("home")}
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
