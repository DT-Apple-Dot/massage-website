import Link from "next/link";

const NavLink = ({ href, title, onClick }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-gray-600 dark:text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-gray-900 dark:hover:text-white transition-colors"
      onClick={onClick}
    >
      {title}
    </Link>
  );
};

export default NavLink;
