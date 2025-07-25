interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className = '', children }) => (
  <div className={`bg-zinc-900 border border-zinc-800 rounded-2xl p-6 ${className}`}>
    {children}
  </div>
);