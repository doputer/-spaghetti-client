import { Anchor } from 'components/atoms/Anchor';
import { Button } from 'components/atoms/Button';
import { Card } from 'components/atoms/Card';
import { LabeledInput } from 'components/molecules/LabeledInput';

export const LoginForm = () => {
  return (
    <form className="w-1/5 min-w-fit h-fit">
      <Card>
        <>
          <LabeledInput
            text={'이메일'}
            id={'email'}
            type={'email'}
            placeholder={'example@email.com'}
          />
          <LabeledInput text={'비밀번호'} id={'password'} type={'password'} />
          <Button text="로그인" />
          <div className="mt-4">
            <Anchor to="/signin" text="회원가입" />
          </div>
        </>
      </Card>
    </form>
  );
};
