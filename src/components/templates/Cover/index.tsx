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
      className={`cover ${animation ? 'cover-animation' : ''}`}
      style={style}
    >
      {children}
    </div>
  );
};
