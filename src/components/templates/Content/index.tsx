export interface Content {
  children: React.ReactNode;
}

export const Content = ({ children }: Content) => {
  return (
    <div className="min-h-full flex justify-center items-center">
      {children}
    </div>
  );
};
