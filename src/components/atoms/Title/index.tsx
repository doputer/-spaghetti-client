interface TitleStyles {
  margin?: string;
  fontSize?: string;
  fontWeight?: string;
}

interface TitleProps {
  style?: TitleStyles;
  children: React.ReactNode;
}

export const Title = ({ style, children }: TitleProps) => {
  return <p style={style}>{children}</p>;
};
