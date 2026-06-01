import React from "react";

const BookingChannelGrid = ({ channels }) => {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {channels.map((channel) => {
        const IconComponent = channel.icon;
        return (
          <a
            key={channel.name}
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${channel.bg} flex min-h-[170px] flex-col items-center justify-center gap-4 rounded-3xl border border-gray-300 dark:border-white/10 px-6 py-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-300/20 dark:hover:shadow-slate-900/20`}
          >
            <IconComponent className={`${channel.color} text-4xl`} />
            <span className="text-base font-semibold text-gray-900 dark:text-white transition-colors">
              {channel.name}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default BookingChannelGrid;
