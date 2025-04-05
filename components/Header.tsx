'use client';

import { MenuIcon } from 'lucide-react';
import { Link } from 'react-scroll';

interface NavLink {
  label: string;
  to: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', to: 'home' },
  { label: 'Features', to: 'features' },
  { label: 'Pricing', to: 'pricing' },
  { label: 'Newsletter', to: 'newsletter' },
  { label: 'Faq', to: 'faq' },
  { label: 'Contact', to: 'contact' },
];

const Header = () => {
  return (
    <div className="fixed w-full bg-transparent backdrop-blur z-50">
      <div className="app-container py-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-extrabold text-yellow">CodeBox</h2>
          <ul className="hidden md:flex items-center space-x-2">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer p-2 rounded-full hover:bg-gray-600/30 transition-colors"
                  activeClass="text-yellow"
                  spy={true}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="block md:hidden p-3 rounded-full hover:bg-yellow-300 cursor-pointer transition-opacity">
            <MenuIcon className="text-white h-8 w-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
