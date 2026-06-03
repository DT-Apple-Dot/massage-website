"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import ThemeToggle from "./ThemeToggle";
const Navbar = ({ navLinks, locale, onLocaleChange }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleLinkClick = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="fixed mx-auto border border-gray-300 dark:border-[#33353F] top-0 left-0 right-0 z-10 bg-white dark:bg-[#121212] bg-opacity-100 transition-colors">
      <div className="flex container flex-wrap items-center justify-between mx-auto px-4 py-0">
        <Link href="/" className="inline-flex items-center bg-transparent">
          <Image
            src="/images/projects/logo.png"
            alt="Grand Massage Logo"
            width={200}
            height={64}
            className="h-16 sm:h-20 w-auto object-contain bg-transparent"
          />
        </Link>

        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={() => onLocaleChange("en")}
            className={`rounded-full border px-3 py-1 text-sm font-medium transition-colors ${
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
            className={`rounded-full border px-3 py-1 text-sm font-medium transition-colors ${
              locale === "zh"
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-700 border-slate-300 dark:bg-[#1F2937] dark:text-slate-200 dark:border-slate-600"
            }`}
          >
            中文
          </button>
          
        </div>

        <div className="flex items-center gap-4">
          {/* Mobile language buttons (visible only on small screens) */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => onLocaleChange("en")}
              aria-label="Switch to English"
              className={`rounded-full border px-3 py-1 text-sm font-medium transition-colors ${
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
              aria-label="Switch to Chinese"
              className={`rounded-full border px-3 py-1 text-sm font-medium transition-colors ${
                locale === "zh"
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white text-slate-700 border-slate-300 dark:bg-[#1F2937] dark:text-slate-200 dark:border-slate-600"
              }`}
            >
              中文
            </button>
          </div>

          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-400 dark:border-slate-200 text-slate-600 dark:text-slate-200 hover:text-gray-900 dark:hover:text-white hover:border-gray-900 dark:hover:border-white transition-colors"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-400 dark:border-slate-200 text-slate-600 dark:text-slate-200 hover:text-gray-900 dark:hover:text-white hover:border-gray-900 dark:hover:border-white transition-colors"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
      {navbarOpen && (
        <MenuOverlay
          links={navLinks}
          handleLinkClick={handleLinkClick}
          locale={locale}
          onLocaleChange={onLocaleChange}
        />
      )}
    </nav>
  );
};

export default Navbar;
