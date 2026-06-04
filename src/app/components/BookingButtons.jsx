"use client";

import { useState } from "react";
import { bookingChannels } from "./bookingChannels";
import WeChatQRCodeModal from "./WeChatQRCodeModal";

export default function BookingButtons() {
  const [showWeChatQR, setShowWeChatQR] = useState(false);

  const handleChannelClick = async (e, channel) => {
    if (channel.name === "WeChat") {
      e.preventDefault();
      setShowWeChatQR(true);
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
        <WeChatQRCodeModal
          isOpen={showWeChatQR}
          onClose={() => setShowWeChatQR(false)}
        />
      )}
    </>
  );
}
