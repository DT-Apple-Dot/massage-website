import React from "react";

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-[32px] border border-gray-300 dark:border-white/10 bg-white dark:bg-slate-950/95 p-8 shadow-2xl shadow-slate-950/40 transition-colors">
        {children}
      </div>
    </div>
  );
};

export default Modal;
