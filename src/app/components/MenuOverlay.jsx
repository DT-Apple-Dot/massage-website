import React from "react";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";

const MenuOverlay = ({ links, handleLinkClick, locale, onLocaleChange }) => {
  return (
    <ul className="flex flex-col py-4 items-center gap-4">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            href={link.path}
            title={link.title}
            onClick={handleLinkClick}
          />
        </li>
      ))}
      {/* Language buttons removed from overlay — mobile has buttons in NavBar */}
      <li className="border-t border-gray-300 dark:border-gray-600 pt-4">
        <ThemeToggle />
      </li>
    </ul>
  );
};

export default MenuOverlay;
