import { Anchor } from 'components/atoms/Anchor';
import { Button } from 'components/atoms/Button';
import { Card } from 'components/atoms/Card';
import { LabeledInput } from 'components/molecules/LabeledInput';

interface Account {
  email: string;
  password: string;
}

export interface SignInFormProps {
  account: Account;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  handleEnter: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}

export const SignInForm = ({
  account,
  handleInput,
  handleClick,
  handleEnter,
}: SignInFormProps) => {
  return (
    <div className="w-1/5 min-w-fit h-fit" onKeyDown={handleEnter}>
      <Card>
        <LabeledInput
          text={'이메일'}
          id={'email'}
          type={'email'}
          placeholder={'example@email.com'}
          name={'email'}
          value={account.email}
          onChange={handleInput}
        />
        <LabeledInput
          text={'비밀번호'}
          id={'password'}
          type={'password'}
          name={'password'}
          value={account.password}
          onChange={handleInput}
        />
        <Button text="로그인" onClick={handleClick} />
        <div className="mt-4">
          <Anchor to="/signin" text="회원가입" />
        </div>
      </Card>
    </div>
  );
};
