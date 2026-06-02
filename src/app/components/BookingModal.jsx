import React from "react";
import { FaTimes } from "react-icons/fa";
import Modal from "./ui/Modal";
import BookingButtons from "./BookingButtons";
import { bookingChannels } from "./bookingChannels";

const BookingModal = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors">
            Book {title}
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-slate-400 transition-colors">
            Tap one of the channels below to start your booking instantly.
          </p>
        </div>
        <button
          onClick={onClose}
          className="rounded-full border border-gray-300 dark:border-slate-700 bg-gray-100 dark:bg-slate-900/80 p-2 text-gray-700 dark:text-slate-300 transition duration-200 hover:border-amber-500 dark:hover:border-amber-500 hover:text-gray-900 dark:hover:text-white"
          aria-label="Close booking modal"
        >
          <FaTimes />
        </button>
      </div>

      <BookingButtons />

      <div className="mt-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/80 px-4 py-3 text-center text-sm text-slate-600 dark:text-slate-300 transition-colors">
        Quick booking via LINE, WhatsApp, or WeChat. USDT accepted.
      </div>
    </Modal>
  );
};

export default BookingModal;
