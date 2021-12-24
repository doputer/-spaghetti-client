import './index.scss';

import { Button, Input } from 'antd';
import { Card } from 'components/common/Card';

import { LockOutlined, UserOutlined } from '@ant-design/icons';

interface SignInProps {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  handleEnter: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  handleTo: () => void;
}

export const SignIn = ({
  handleInput,
  handleClick,
  handleEnter,
  handleTo,
}: SignInProps) => {
  return (
    <Card className="signin" onKeyPress={handleEnter}>
      <Input
        onInput={handleInput}
        prefix={<UserOutlined />}
        name="email"
        placeholder="아이디"
        size="large"
      />
      <Input
        onInput={handleInput}
        prefix={<LockOutlined />}
        type="password"
        name="password"
        placeholder="비밀번호"
        size="large"
      />
      <Button
        onClick={handleClick}
        type="primary"
        size="large"
        className="signin-button"
      >
        로그인
      </Button>
      <Button
        onClick={handleTo}
        type="text"
        size="large"
        className="signup-button"
      >
        회원가입
      </Button>
    </Card>
  );
};
