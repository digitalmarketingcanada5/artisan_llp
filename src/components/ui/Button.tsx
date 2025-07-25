interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => (
  <button 
    className={`bg-slate-900 relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-sm p-[1px] focus:outline-none ${className}`} 
    {...props}
  >
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-none px-7 text-sm font-medium text-neutral-200 backdrop-blur-3xl gap-2">
      {children}
    </span>
  </button>
);