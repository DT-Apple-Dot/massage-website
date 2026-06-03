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
      <li className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={() => onLocaleChange("en")}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
            locale === "en"
              ? "bg-slate-900 text-white border-slate-900"
              : "bg-white text-slate-700 border-slate-300 dark:bg-[#1F2937] dark:text-slate-200 dark:border-slate-600"
          }`}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => onLocaleChange("zh")}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
            locale === "zh"
              ? "bg-slate-900 text-white border-slate-900"
              : "bg-white text-slate-700 border-slate-300 dark:bg-[#1F2937] dark:text-slate-200 dark:border-slate-600"
          }`}
        >
          中文
        </button>
      </li>
      <li className="border-t border-gray-300 dark:border-gray-600 pt-4">
        <ThemeToggle />
      </li>
    </ul>
  );
};

export default MenuOverlay;
