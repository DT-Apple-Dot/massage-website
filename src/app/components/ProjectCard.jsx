import React, { useState } from "react";
import BookingModal from "./BookingModal";
import Button from "./ui/Button";
import PricingList from "./ui/PricingList";

const ProjectCard = ({ imgUrl, title, description, prices = [] }) => {
  const [showBookingModal, setShowBookingModal] = useState(false);

  return (
    <>
      <div className="bg-gray-50 dark:bg-[#181818] rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-xl hover:shadow-amber-500/20 dark:hover:shadow-amber-500/20 transition-shadow duration-300 border border-gray-200 dark:border-gray-800">
        <div
          className="h-48 sm:h-56 md:h-80 lg:h-96 rounded-t-xl relative group"
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        ></div>

        <div className="text-gray-900 dark:text-white px-6 pt-6 pb-8 flex-grow flex flex-col justify-between transition-colors">
          <div className="mb-6">
            <h5 className="text-xl md:text-2xl font-semibold mb-3">{title}</h5>
            <p className="text-gray-700 dark:text-[#ADB7BE] text-sm md:text-base leading-relaxed transition-colors">
              {description}
            </p>
          </div>

          <PricingList prices={prices} />

          <Button
            onClick={() => setShowBookingModal(true)}
            className="mt-8 w-full"
          >
            Book Now
          </Button>
        </div>
      </div>

      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        title={title}
      />
    </>
  );
};

export default ProjectCard;
