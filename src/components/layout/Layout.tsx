import { ReactNode } from "react";
import { Navbar } from "../common/Navbar";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>{children}</main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="relative container mx-auto px-4 flex justify-between items-center">
          <p className="absolute flex w-full h-full justify-center items-center">
            © 2024 BlockBlackHole.com. All rights reserved.
          </p>
          <div className="">
            <p className="flex items-center gap-2">
              <AiOutlineMail />
              <a href="mailto:cyward@blackblockhole.com" className="underline">
                cyward@blackblockhole.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <AiOutlinePhone />
              <span>+1 (209) 286-7543</span>
            </p>
          </div>
          {/* <div className="flex justify-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 transform hover:scale-110"
            >
              <FaFacebook className="text-white hover:text-gray-400" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 transform hover:scale-110"
            >
              <FaTwitter className="text-white hover:text-gray-400" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 transform hover:scale-110"
            >
              <FaLinkedin className="text-white hover:text-gray-400" />
            </a>
          </div> */}
        </div>
      </footer>
    </div>
  );
};
