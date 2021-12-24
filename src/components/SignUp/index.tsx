import './index.scss';

import { Button, Input } from 'antd';
import { Card } from 'components/common/Card';

import { EditOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';

interface SignUpProps {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  handleTo: () => void;
}

export const SignUp = ({ handleInput, handleClick, handleTo }: SignUpProps) => {
  return (
    <Card className="signup">
      <Input
        onInput={handleInput}
        prefix={<EditOutlined />}
        name="nickname"
        placeholder="닉네임"
        size="large"
      />
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
      <Input
        onInput={handleInput}
        prefix={<LockOutlined />}
        type="password"
        name="repassword"
        placeholder="비밀번호 확인"
        size="large"
      />
      <Button
        onClick={handleClick}
        type="primary"
        size="large"
        className="signup-button"
      >
        회원가입
      </Button>
      <Button
        onClick={handleTo}
        type="text"
        size="large"
        className="backward-button"
      >
        뒤로가기
      </Button>
    </Card>
  );
};
