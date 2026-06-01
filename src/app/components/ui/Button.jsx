import React from "react";

const VARIANTS = {
  primary:
    "bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-lg shadow-amber-500/20 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-rose-500/30",
  secondary:
    "border border-gray-300 dark:border-slate-700 bg-gray-100 dark:bg-slate-900/80 text-gray-900 dark:text-slate-100 hover:border-amber-500 dark:hover:border-amber-500 hover:bg-gray-200 dark:hover:bg-slate-900 hover:text-gray-900 dark:hover:text-white hover:-translate-y-0.5 transition-colors",
  ghost:
    "text-gray-700 dark:text-[#ADB7BE] hover:text-gray-900 dark:hover:text-white transition-colors",
};

const SIZES = {
  md: "px-8 py-4 text-sm",
  sm: "px-6 py-3 text-sm",
};

const Button = ({
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  children,
  as = "button",
  href,
  ...props
}) => {
  const classes = [
    "inline-flex items-center justify-center rounded-full font-semibold transition duration-300 focus:outline-none",
    VARIANTS[variant] || VARIANTS.primary,
    SIZES[size] || SIZES.md,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (as === "a") {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
