import './index.scss';

export interface CardStyles {
  backgroundColor?: 'transparent';
  gap?: string;
  padding?: string;
  overflow?: string;
}

interface CardProps {
  className?: string;
  children: React.ReactNode;
  style?: CardStyles;
  onKeyPress?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}

export const Card = ({ className, children, style, onKeyPress }: CardProps) => {
  return (
    <div
      className={`card flex flex-column flex-center ${className}`}
      onKeyPress={onKeyPress}
      style={style}
    >
      {children}
    </div>
  );
};
