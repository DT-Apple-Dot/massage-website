import React from "react";

const PricingList = ({ prices }) => {
  if (!prices || prices.length === 0) return null;

  return (
    <div className="space-y-3 mt-4">
      {prices.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center text-sm border-b border-gray-300 dark:border-zinc-800/80 pb-2 transition-colors"
        >
          <span className="text-gray-900 dark:text-white font-medium transition-colors">
            {item.duration}
          </span>
          <span className="text-blue-600 dark:text-[#4D77FF] font-bold tracking-wide transition-colors">
            {item.price}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
