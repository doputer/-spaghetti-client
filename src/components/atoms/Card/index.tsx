export interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <div className="bg-white p-8 rounded shadow-md">{children}</div>;
};
