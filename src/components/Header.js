import Logo from "./Logo";
import User from "./User";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-gray-800 pl-[80px] pr-[80px] pt-5 pb-5 text-white">
      <Logo />
      <User />
    </div>
  );
};

export default Header;
