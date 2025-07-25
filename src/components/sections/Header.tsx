import { BriefcaseIcon, ManIcon, PhoneIcon, StarIcon } from '../icons';
import { LocationButton } from '../ui/LocationModal';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => (
  <div className="flex max-w-full fixed top-0 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] dark:bg-black/95 bg-white/[0.96] backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-2 sm:px-4 lg:px-6 py-2 sm:py-3 items-center justify-between space-x-2 sm:space-x-4 lg:space-x-8">
    <Link href="/" className="flex-shrink-0">
      <Image 
        src="/Logo3.png" 
        alt="Artisan Law Logo" 
        className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 hover:scale-105 transition-transform duration-200" 
        width={80} 
        height={80} 
      />
    </Link>
    
    <div className="flex items-center space-x-4 sm:space-x-8 lg:space-x-10 flex-1 justify-center">
      <a className="relative group flex items-center space-x-1 sm:space-x-2 text-neutral-600 dark:text-neutral-300 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300 font-medium" href="#services">
        <span className="block sm:hidden group-hover:scale-110 transition-transform duration-200"><BriefcaseIcon /></span>
        <span className="hidden sm:block text-xs sm:text-sm tracking-wide">Services</span>
        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></div>
      </a>
      
      <a className="relative group flex items-center space-x-1 sm:space-x-2 text-neutral-600 dark:text-neutral-300 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300 font-medium" href="#about">
        <span className="block sm:hidden group-hover:scale-110 transition-transform duration-200"><ManIcon /></span>
        <span className="hidden sm:block text-xs sm:text-sm tracking-wide">Our Team</span>
        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></div>
      </a>
      
      <a className="relative group flex items-center space-x-1 sm:space-x-2 text-neutral-600 dark:text-neutral-300 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300 font-medium" href="#testimonials">
        <span className="block sm:hidden group-hover:scale-110 transition-transform duration-200"><StarIcon /></span>
        <span className="hidden sm:block text-xs sm:text-sm tracking-wide">Reviews</span>
        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></div>
      </a>
      
      <a className="relative group flex items-center space-x-1 sm:space-x-2 text-neutral-600 dark:text-neutral-300 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300 font-medium" href="#touch">
        <span className="block sm:hidden group-hover:scale-110 transition-transform duration-200"><PhoneIcon /></span>
        <span className="hidden sm:block text-xs sm:text-sm tracking-wide">Contact</span>
        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></div>
      </a>
    </div>
    
    <div className="flex-shrink-0">
      <LocationButton />
    </div>
  </div>
);