"use client";

import { useState, useRef, useEffect } from "react";
import { MapPinIcon } from "../icons";

interface LocationDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LocationDropdown: React.FC<LocationDropdownProps> = ({
  isOpen,
  onClose,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute top-full right-0 mt-2 w-72 sm:w-80 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl z-[9999] overflow-hidden"
    >
      {/* Arrow pointing up */}
      <div className="absolute -top-2 right-4 w-4 h-4 bg-zinc-900 border-l border-t border-zinc-700 rotate-45"></div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>

        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <svg
              className="w-5 h-5 text-purple-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a
              href="mailto:info@artisanlawllp.com"
              className="text-white text-sm font-medium hover:text-purple-400 transition-colors"
            >
              info@artisanlawllp.com
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <svg
              className="w-5 h-5 text-purple-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <a
              href="tel:+16478333487"
              className="text-white text-sm font-medium hover:text-purple-400 transition-colors"
            >
              647-833-3487
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <svg
              className="w-5 h-5 text-purple-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"
              />
            </svg>
            <span className="text-white text-sm font-medium">
              203-9280 Goreway Drive, Brampton, ON L6P4N1
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LocationButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white p-2 sm:p-3 lg:p-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <MapPinIcon />
      </button>

      <LocationDropdown
        isOpen={isDropdownOpen}
        onClose={() => setIsDropdownOpen(false)}
      />
    </div>
  );
};
