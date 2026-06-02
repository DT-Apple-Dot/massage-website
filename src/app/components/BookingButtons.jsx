"use client";

import { useState } from "react";
import { bookingChannels } from "./bookingChannels";
import Image from "next/image";

export default function BookingButtons() {
  const [showWeChatQR, setShowWeChatQR] = useState(false);

  const handleChannelClick = async (e, channel) => {
    // Special handling for WeChat: show QR code image in alert
    if (channel.name === "WeChat") {
      e.preventDefault();
      setShowWeChatQR(true);
    }
  };

  const handleSaveQR = async () => {
    try {
      const response = await fetch("/images/wechat.jpg");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "wechat-qr.jpg";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Failed to download QR code", error);
      alert("Unable to download. Please try again.");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-3 max-w-sm p-4">
        {bookingChannels.map((channel) => {
          const Icon = channel.icon;
          return (
            <a
              key={channel.name}
              href={channel.url}
              target={channel.name !== "WeChat" ? "_blank" : undefined}
              rel="noopener noreferrer"
              onClick={(e) => handleChannelClick(e, channel)}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 cursor-pointer ${channel.bg}`}
            >
              <Icon className={`text-2xl ${channel.color}`} />
              <div className="flex-1 text-left">
                <p className="font-semibold text-gray-800 dark:text-gray-200">
                  {channel.name}
                </p>
                <p className="text-xs text-gray-500">
                  {channel.name === "WeChat"
                    ? "Scan QR code"
                    : `Book via ${channel.name}`}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      {/* WeChat QR Alert */}
      {showWeChatQR && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-md shadow-lg p-6 max-w-xs w-full mx-4 text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Scan WeChat QR Code
            </h3>
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="/images/wechat.jpg"
                alt="WeChat QR Code"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
              Point your camera at this QR code to add as WeChat friend
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleSaveQR}
                className="flex-1 bg-green-500 text-white py-2 rounded font-medium hover:bg-green-600 transition"
              >
                Save QR
              </button>
              <button
                onClick={() => setShowWeChatQR(false)}
                className="flex-1 bg-blue-500 text-white py-2 rounded font-medium hover:bg-blue-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
