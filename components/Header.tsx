'use client';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className="fixed w-full bg-transparent backdrop-blur">
      <div className="app-container py-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Codebox</h2>
          <ul className="other-text flex items-center space-x-4">
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
                to="product"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-300"
                activeClass="text-blue-600"
                spy={true}
              >
                Product
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
