import { Input, InputProps } from 'components/atoms/Input';
import { Label, LabelProps } from 'components/atoms/Label';

export interface LabeledInputProps extends InputProps, LabelProps {}

export const LabeledInput = ({
  text,
  id,
  type,
  placeholder,
  name,
  value,
  onChange,
}: LabeledInputProps) => {
  return (
    <div className="mb-6">
      <Label id={id} text={text} />
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
