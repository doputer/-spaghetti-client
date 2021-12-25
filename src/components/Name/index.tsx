interface NameStyles {
  margin?: string;
  fontSize?: string;
  fontWeight?: string;
}

interface NameProps {
  style?: NameStyles;
  children: React.ReactNode;
}

export const Name = ({ style, children }: NameProps) => {
  return <p style={style}>{children}</p>;
};
