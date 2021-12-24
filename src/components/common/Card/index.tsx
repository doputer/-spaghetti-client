import './index.scss';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  onKeyPress?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}

export const Card = ({ className, children, onKeyPress }: CardProps) => {
  return (
    <div
      className={`card flex flex-column ${className}`}
      onKeyPress={onKeyPress}
    >
      {children}
    </div>
  );
};
