import React from "react";

const BookingChannelGrid = ({ channels }) => {
  return (
    <div className="mt-5 space-y-2">
      {channels.map((channel) => {
        const IconComponent = channel.icon;
        return (
          <a
            key={channel.name}
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${channel.bg} flex items-center justify-between gap-4 rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-3 text-sm text-gray-900 dark:text-white transition duration-200 hover:border-amber-500 dark:hover:border-amber-500 hover:shadow-sm`}
          >
            <div className="flex items-center gap-3">
              <IconComponent className={`${channel.color} text-xl`} />
              <span className="font-medium">{channel.name}</span>
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Book
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default BookingChannelGrid;
