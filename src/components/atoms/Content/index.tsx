interface ContentStyles {
  margin?: string;
  fontSize?: string;
  fontWeight?: string;
}

interface ContentProps {
  style?: ContentStyles;
  children: React.ReactNode;
}

export const Content = ({ style, children }: ContentProps) => {
  return <p style={style}>{children}</p>;
};
