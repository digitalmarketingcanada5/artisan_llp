import { BriefcaseIcon, ManIcon, PhoneIcon, StarIcon } from "../icons";
import { LocationButton } from "../ui/LocationModal";
import Image from "next/image";
import Link from "next/link";

export const Header = () => (
  <div className="flex max-w-full fixed top-0 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] dark:bg-black/95 bg-white/[0.96] backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-2 sm:px-4 lg:px-6 py-0 sm:py-0 lg:py-0 items-center justify-between space-x-1 sm:space-x-2 lg:space-x-4">
    <Link href="/" className="flex-shrink-0">
      <Image
        src="/ArtisanLaw.png"
        alt="Artisan Law LLP - Crafting Legal Solutions with Care"
        className="h-18 w-auto sm:h-22 lg:h-32 xl:h-36 hover:scale-105 transition-transform duration-200 object-contain"
        width={280}
        height={140}
        priority
      />
    </Link>

    <div className="flex items-center space-x-4 sm:space-x-8 lg:space-x-10 flex-1 justify-center">
      <a
        className="relative group flex items-center space-x-1 sm:space-x-2 text-neutral-800 dark:text-neutral-300 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300 font-medium"
        href="#services"
      >
        <span className="block sm:hidden group-hover:scale-110 transition-transform duration-200">
          <BriefcaseIcon />
        </span>
        <span className="hidden sm:block text-xs sm:text-sm tracking-wide">
          Services
        </span>
        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></div>
      </a>

      <a
        className="relative group flex items-center space-x-1 sm:space-x-2 text-neutral-800 dark:text-neutral-300 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300 font-medium"
        href="#about"
      >
        <span className="block sm:hidden group-hover:scale-110 transition-transform duration-200">
          <ManIcon />
        </span>
        <span className="hidden sm:block text-xs sm:text-sm tracking-wide">
          Our Team
        </span>
        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></div>
      </a>

      {/* <a
        className="relative group flex items-center space-x-1 sm:space-x-2 text-neutral-800 dark:text-neutral-300 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300 font-medium"
        href="#testimonials"
      >
        <span className="block sm:hidden group-hover:scale-110 transition-transform duration-200">
          <StarIcon />
        </span>
        <span className="hidden sm:block text-xs sm:text-sm tracking-wide">
          Reviews
        </span>
        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></div>
      </a> */}

      <a
        className="relative group flex items-center space-x-1 sm:space-x-2 text-neutral-800 dark:text-neutral-300 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300 font-medium"
        href="#touch"
      >
        <span className="block sm:hidden group-hover:scale-110 transition-transform duration-200">
          <PhoneIcon />
        </span>
        <span className="hidden sm:block text-xs sm:text-sm tracking-wide">
          Contact
        </span>
        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></div>
      </a>
    </div>

    <div className="flex-shrink-0">
      <LocationButton />
    </div>
  </div>
);
