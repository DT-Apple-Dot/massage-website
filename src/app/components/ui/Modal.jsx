import React from "react";

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 p-3 backdrop-blur-sm">
      <div className="mx-auto mt-10 mb-10 flex min-h-[calc(100vh-2rem)] items-start justify-center">
        <div className="w-full max-w-md rounded-[26px] border border-gray-300 dark:border-white/10 bg-white dark:bg-slate-950/95 p-4 sm:p-5 shadow-2xl shadow-slate-950/40 transition-colors max-h-[calc(100vh-2.5rem)] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
