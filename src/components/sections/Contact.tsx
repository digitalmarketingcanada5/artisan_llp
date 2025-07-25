import { MailIcon, ContactPhoneIcon } from '../icons';

export const Contact = () => (
  <div id="touch" className="h-auto pt-20 pb-2 w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
    <h1 className="md:text-2xl text-7xl lg:text-8xl font-bold ml-5 text-center text-neutral-100 relative z-20">
      Contact Us
    </h1>
    <div className="w-[60rem] bg-transparent relative my-8">
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-black-300 to-transparent h-[2px] blur-sm"></div>
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-black-200 to-transparent h-px "></div>
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-black to-transparent h-[5px] blur-sm"></div>
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-neutral-500 to-transparent h-px "></div>
    </div>
    <div className="flex flex-col text-center">
      <a 
        href="mailto:info@artisanlawllp.com" 
        className="text-white font-light text-2xl flex items-center justify-center hover:text-purple-400 transition-colors"
      >
        <MailIcon /> info@artisanlawllp.com
      </a>
      <a 
        href="tel:+12899461600" 
        className="text-white font-light text-2xl flex items-center justify-center hover:text-purple-400 transition-colors"
      >
        <ContactPhoneIcon /> 289-946-1600
      </a>
    </div>
  </div>
);