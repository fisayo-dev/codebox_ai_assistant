'use client';
import { MenuIcon } from 'lucide-react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className="fixed w-full bg-transparent backdrop-blur">
      <div className="app-container py-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-extrabold">CodeBox</h2>
          <ul className="hidden md:flex items-center space-x-4">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-300"
                activeClass="text-blue-600"
                spy={true}
              >
                Home
              </Link>
            </li>
           
            <li>
              <Link
                to="features"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-300"
                activeClass="text-blue-600"
                spy={true}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="pricing"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-300"
                activeClass="text-blue-600"
                spy={true}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="newsletter"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-300"
                activeClass="text-blue-600"
                spy={true}
              >
                Newsletter
              </Link>
            </li>
            <li>
              <Link
                to="faq"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-300"
                activeClass="text-blue-600"
                spy={true}
              >
                Faq
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-300"
                activeClass="text-blue-600"
                spy={true}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className='block md:hidden p-3 rounded-full hover:bg-blue-500 cursor-pointer transition-opacity'>
            <MenuIcon className=" text-white h-8 w-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
