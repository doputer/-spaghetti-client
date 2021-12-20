export interface LabelProps {
  id?: string;
  text?: string;
}

export const Label = ({ id, text }: LabelProps) => {
  return (
    <label
      htmlFor={id}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      {text}
    </label>
  );
};
