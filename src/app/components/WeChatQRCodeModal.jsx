"use client";

import Image from "next/image";
import Modal from "./ui/Modal";
import { downloadFile } from "../lib/downloadFile";

const WeChatQRCodeModal = ({
  isOpen,
  onClose,
  imageSrc = "/images/wechat.jpg",
  filename = "wechat-qr.jpg",
}) => {
  if (!isOpen) return null;

  const handleSave = async () => {
    try {
      await downloadFile(imageSrc, filename);
    } catch {
      alert("Unable to save the QR code. Please try again.");
    }
  };

  return (
    <Modal isOpen={isOpen}>
      <div className="flex flex-col gap-4 items-center text-center">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          WeChat QR Code
        </h3>
        <div className="relative w-64 h-64">
          <Image
            src={imageSrc}
            alt="WeChat QR Code"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="flex w-full gap-3">
          <button
            type="button"
            onClick={handleSave}
            className="flex-1 rounded-full bg-green-600 px-5 py-2 text-white hover:bg-green-700 transition"
          >
            Save QR
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-full bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default WeChatQRCodeModal;
