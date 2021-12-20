import { Input, InputProps } from 'components/atoms/Input';
import { Label, LabelProps } from 'components/atoms/Label';

export interface LabeledInputProps extends InputProps, LabelProps {}

export const LabeledInput = ({
  text,
  id,
  type,
  placeholder,
}: LabeledInputProps) => {
  return (
    <div className="mb-6">
      <Label id={id} text={text} />
      <Input type={type} placeholder={placeholder} />
    </div>
  );
};
