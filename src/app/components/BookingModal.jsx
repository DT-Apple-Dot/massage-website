import React from "react";
import { FaTimes } from "react-icons/fa";
import Modal from "./ui/Modal";
import BookingChannelGrid from "./ui/BookingChannelGrid";
import { bookingChannels } from "./bookingChannels";

const BookingModal = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">
            Book {title}
          </h2>
          <p className="mt-3 text-sm text-gray-700 dark:text-slate-400 transition-colors">
            Choose your preferred social channel below, then message us to
            reserve your session quickly and securely.
          </p>
        </div>
        <button
          onClick={onClose}
          className="rounded-full border border-gray-300 dark:border-slate-700 bg-gray-100 dark:bg-slate-900/80 p-3 text-gray-700 dark:text-slate-300 transition duration-200 hover:border-amber-500 dark:hover:border-amber-500 hover:text-gray-900 dark:hover:text-white"
          aria-label="Close booking modal"
        >
          <FaTimes />
        </button>
      </div>

      <BookingChannelGrid channels={bookingChannels} />

      <div className="mt-8 grid gap-4 md:grid-cols-[1fr_260px]">
        <div className="rounded-3xl border border-amber-500/20 bg-amber-50 dark:bg-amber-500/10 p-5 text-center text-sm text-gray-700 dark:text-slate-200 transition-colors">
          Fast replies. You&apos;ll receive a booking confirmation as soon as
          possible.
        </div>
        <div className="rounded-3xl border border-green-500/20 bg-green-50 dark:bg-green-500/10 p-5 text-center text-sm text-green-900 dark:text-green-100 transition-colors">
          Payment accepted: USDT is also acceptable.
        </div>
      </div>
    </Modal>
  );
};

export default BookingModal;
