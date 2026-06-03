"use client";
import React from "react";

const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full px-4 sm:px-6 lg:px-8 py-4 md:container md:mx-auto md:px-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
