"use client";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import BookingModal from "./BookingModal";
import Button from "./ui/Button";

const HeroSection = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden lg:py-24 md:py-20 py-16">
        <div className="pointer-events-none absolute -left-36 top-10 h-72 w-72 rounded-full bg-amber-300/15 blur-3xl"></div>
        <div className="pointer-events-none absolute right-8 top-1/4 h-80 w-80 rounded-full bg-rose-400/15 blur-3xl"></div>
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-fuchsia-400/10 blur-3xl"></div>

        <div className="w-full px-4 sm:px-6 lg:px-8 md:mx-auto md:max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-[32px] border border-gray-300 dark:border-white/10 p-8 shadow-lg dark:shadow-[0_40px_120px_-40px_rgba(15,23,42,0.85)] dark:backdrop-blur-xl bg-white dark:bg-slate-900/50 transition-colors">
                <div className="mb-6 inline-flex rounded-full border border-gray-200 dark:border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-600 dark:text-slate-300 shadow-sm dark:shadow-slate-950/20 bg-gray-100 dark:bg-transparent transition-colors">
                  Premium Bangkok Outcall Massage
                </div>

                <h1 className="text-gray-900 dark:text-white text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-rose-500">
                    Bangkok
                  </span>
                  <TypeAnimation
                    sequence={[
                      "GRAND MASSAGE",
                      2000,
                      "BANGKOK OUTCALL MASSAGE",
                      2000,
                      "PREMIUM RELAXATION",
                      2000,
                    ]}
                    wrapper="span"
                    speed={40}
                    repeat={Infinity}
                    className="block text-gray-900 dark:text-white"
                  />
                </h1>

                <p className="mt-8 max-w-2xl text-gray-700 dark:text-slate-300 text-lg md:text-xl leading-8 transition-colors">
                  Experience ultimate relaxation with Grand Massage, the top
                  Bangkok massage and Bangkok outcall massage service. Our
                  professional therapists bring premium care directly to your
                  hotel, apartment, or home in Bangkok.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
                  <Button onClick={() => setShowBookingModal(true)}>
                    Book a Session
                  </Button>
                  <Button
                    onClick={() => {
                      document
                        .getElementById("projects")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                    variant="secondary"
                  >
                    View Services
                  </Button>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-slate-300 transition-colors">
                  <div className="rounded-3xl border border-gray-200 dark:border-white/10 p-5 shadow-sm dark:shadow-slate-950/20 bg-gray-50 dark:bg-white/5 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Fast booking
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-slate-400 transition-colors">
                      Reach us quickly through social chat and secure your
                      preferred slot.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-gray-200 dark:border-white/10 p-5 shadow-sm dark:shadow-slate-950/20 bg-gray-50 dark:bg-white/5 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Relax at home
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-slate-400 transition-colors">
                      Enjoy safe, premium massage therapy in the comfort of your
                      own location.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 md:col-span-1">
              <div className="rounded-[32px] border border-gray-300 dark:border-white/10 p-6 shadow-lg dark:shadow-[0_40px_120px_-40px_rgba(15,23,42,0.85)] dark:backdrop-blur-xl bg-white dark:bg-slate-900/50 transition-colors">
                <div className="rounded-[28px] bg-gradient-to-br from-amber-50 to-transparent dark:from-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.16),_transparent_38%)] dark:to-transparent p-8 transition-colors">
                  <p className="text-xs uppercase tracking-[0.32em] text-amber-600 dark:text-amber-300 transition-colors">
                    Why choose us
                  </p>
                  <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors">
                    A smoother booking experience
                  </h2>
                  <p className="mt-4 text-gray-700 dark:text-slate-400 leading-7 transition-colors">
                    Book with confidence using easy chat channels and get fast
                    replies from our professional massage team.
                  </p>

                  <ul className="mt-8 space-y-4 text-gray-700 dark:text-slate-300 transition-colors">
                    <li className="rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-5 shadow-sm dark:shadow-slate-950/20 transition-colors">
                      <span className="block text-lg font-semibold text-gray-900 dark:text-white transition-colors">
                        Flexible schedule
                      </span>
                      <span className="mt-2 block text-sm text-gray-600 dark:text-slate-400 transition-colors">
                        Choose the time that suits you and relax on your own
                        terms.
                      </span>
                    </li>
                    <li className="rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-5 shadow-sm dark:shadow-slate-950/20 transition-colors">
                      <span className="block text-lg font-semibold text-gray-900 dark:text-white transition-colors">
                        At-home comfort
                      </span>
                      <span className="mt-2 block text-sm text-gray-600 dark:text-slate-400 transition-colors">
                        Enjoy massage therapy in your hotel or apartment without
                        any hassle.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        title="a Session"
      />
    </>
  );
};

export default HeroSection;
