export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  onClick: () => void;
}

export const Button = ({ type, children, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={() => onClick()}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {children}
    </button>
  );
};
