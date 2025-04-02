"use client"
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className="bg-transparent backdrop-blur">
      <div className="app-container py-6">
        <div className="flex justify-between items-center">
          <h2 className="text-5xl header-text">Thanos</h2>
          <ul className="other-text flex items-center space-x-4">
            <li>  
              <Link 
                to="home" 
                smooth={true} 
                duration={500} 
                className="hover:text-gray-300 text-xl cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="powers" 
                smooth={true} 
                duration={500} 
                className="hover:text-gray-300 text-xl cursor-pointer">
                Powers
              </Link>
            </li>
            <li>
              <Link 
                to="origin" 
                smooth={true} 
                duration={500} 
                className="hover:text-gray-300 text-xl cursor-pointer">
                Origin
              </Link>
            </li>
            <li>
              <Link 
                to="mission" 
                smooth={true} 
                duration={500} 
                className="hover:text-gray-300 text-xl cursor-pointer">
                Mission
              </Link>
            </li>
            <li>
              <Link 
                to="team" 
                smooth={true} 
                duration={500} 
                className="hover:text-gray-300 text-xl cursor-pointer">
                Team
              </Link>
            </li>
            <li>
              <Link 
                to="enemies" 
                smooth={true} 
                duration={500} 
                className="hover:text-gray-300 text-xl cursor-pointer">
                Enemies
              </Link>
            </li>
            <li>
              <Link 
                to="newsletter" 
                smooth={true} 
                duration={500} 
                className="hover:text-gray-300 text-xl cursor-pointer">
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
