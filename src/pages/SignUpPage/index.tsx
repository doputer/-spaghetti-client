import { message } from 'antd';
import { apiCreateUser } from 'apis/userApi';
import { Cover } from 'components/common/Cover';
import { SignUp } from 'components/SignUp';
import { useAsync } from 'hooks/useAsync';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignUpPage = () => {
  const navigate = useNavigate();

  const { error, execute: createUser } = useAsync(apiCreateUser);

  const [account, setAccount] = useState({
    nickname: '',
    email: '',
    password: '',
  });
  const [repassword, setRepassword] = useState('');

  const handleTo = () => navigate('/');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (name === 'repassword') setRepassword(value);
    else setAccount({ ...account, [name]: value });
  };

  const handleClick = async () => {
    if (account.password !== repassword) {
      alert('비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    const result = await createUser(account);

    if (result) {
      alert('회원가입 되었습니다.');
      navigate('/');
    }
  };

  useEffect(() => {
    if (error) message.error(error, 0.5);
  }, [error]);

  return (
    <Cover
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      animation={true}
    >
      <SignUp
        handleInput={handleInput}
        handleClick={handleClick}
        handleTo={handleTo}
      />
    </Cover>
  );
};
