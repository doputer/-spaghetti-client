import './index.scss';

interface CoverStyles {
  display?: 'flex';
  justifyContent?: 'center';
  alignItems?: 'center';
  backgroundColor?: '#F9F7F7';
}

interface CoverProps {
  style?: CoverStyles;
  animation?: boolean;
  children: React.ReactNode;
}

export const Cover = ({ style, animation, children }: CoverProps) => {
  return (
    <div
      className={`${animation ? 'cover-animation' : ''}`}
      style={{
        ...style,
        width: '100vw',
        height: '100vh',
      }}
    >
      {children}
    </div>
  );
};
