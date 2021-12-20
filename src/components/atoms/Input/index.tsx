export interface InputProps {
  id?: string;
  type: 'text' | 'email' | 'password';
  name?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  id,
  type,
  name,
  placeholder,
  value,
  onChange,
}: InputProps) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  );
};
