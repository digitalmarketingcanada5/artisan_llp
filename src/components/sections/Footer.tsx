export const Footer = () => {
  const socialLinks = [
    { 
      href: "/", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-linkedin h-full w-full text-neutral-500 dark:text-neutral-300">
          <path d="M8 11v5"></path>
          <path d="M8 8v.01"></path>
          <path d="M12 16v-5"></path>
          <path d="M16 16v-3a2 2 0 1 0 -4 0"></path>
          <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
        </svg>
      ) 
    },
    { 
      href: "/", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-instagram h-full w-full text-neutral-500 dark:text-neutral-300">
          <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
          <path d="M16.5 7.5v.01"></path>
        </svg>
      ) 
    },
    { 
      href: "/", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-x h-full w-full text-neutral-500 dark:text-neutral-300">
          <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
        </svg>
      ) 
    },
  ];

  return (
    <footer className="py-10">
      <hr className="border-zinc-800" />
      <div className="flex justify-center items-center flex-col mt-8">
        <h1 className="text-2xl text-[#e5e5e5] mb-4">Visit our Socials</h1>
        <div className="flex gap-4 items-center">
          {socialLinks.map((link, i) => (
            <a key={i} href={link.href} target="_blank" rel="noopener noreferrer">
              <div className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative w-10 h-10 hover:bg-neutral-700 transition-colors">
                <div className="flex items-center justify-center w-5 h-5">
                  {link.icon}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};