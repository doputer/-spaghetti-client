import { Button } from 'components/atoms/Button';
import { Card } from 'components/atoms/Card';
import { LabeledInput } from 'components/molecules/LabeledInput';
import { Dispatch, SetStateAction } from 'react';

interface Account {
  nickname: string;
  email: string;
  password: string;
}

export interface SignUpFormProps {
  account: Account;
  repassword: string;
  setRepassword: Dispatch<SetStateAction<string>>;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
}

export const SignUpForm = ({
  account,
  repassword,
  setRepassword,
  handleInput,
  handleClick,
}: SignUpFormProps) => {
  return (
    <div className="w-1/5 min-w-fit h-fit">
      <Card>
        <LabeledInput
          text={'닉네임'}
          id={'nickname'}
          type={'text'}
          placeholder={'나는 스파게티 코드가 싫어요'}
          name={'nickname'}
          value={account.nickname}
          onChange={handleInput}
        />
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
        <LabeledInput
          text={'비밀번호 확인'}
          id={'repassword'}
          type={'password'}
          value={repassword}
          onChange={e => setRepassword(e.target.value)}
        />
        <Button onClick={handleClick}>{'회원가입'}</Button>
      </Card>
    </div>
  );
};
