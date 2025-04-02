const Header = () => {
  return (
    <div className="bg-transparent backdrop-blur-">
      <div className="app-container py-6">
        <div className="flex justify-between items-center">
          <h2 className="text-5xl header-text">Thanos</h2>
          <ul className="other-text flex items-center space-x-4">
            <li className="hover:text-gray-300 text-xl cursor-pointer">Home</li>
            <li className="hover:text-gray-300 text-xl cursor-pointer">
              Powers
            </li>
            <li className="hover:text-gray-300 text-xl cursor-pointer">
              Origin
            </li>
            <li className="hover:text-gray-300 text-xl cursor-pointer">
              Mission
            </li>
            <li className="hover:text-gray-300 text-xl cursor-pointer">Team</li>
            <li className="hover:text-gray-300 text-xl cursor-pointer">
              Enemies
            </li>
            <li className="hover:text-gray-300 text-xl cursor-pointer">
              Newsletter
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
