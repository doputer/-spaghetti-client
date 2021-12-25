import { message } from 'antd';
import { apiLogin } from 'apis/authApi';
import { SignIn } from 'components/organisms/SignIn';
import { useAsync } from 'hooks/useAsync';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setCookie } from 'utils/cookie';

export const SignInPage = () => {
  const navigate = useNavigate();

  const { data: tokens, error, execute: login } = useAsync(apiLogin);

  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  const handleTo = () => navigate('/signup');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setAccount({ ...account, [name]: value });
  };

  const handleClick = async () => {
    await login(account);
  };

  const handleEnter = async (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') await handleClick();
  };

  useEffect(() => {
    if (tokens) {
      const { access_token, refresh_token } = tokens;

      setCookie('access_token', access_token, {
        path: '/',
        secure: true,
        sameSite: 'none',
      });

      setCookie('refresh_token', refresh_token, {
        path: '/',
        secure: true,
        sameSite: 'none',
      });

      navigate('/lobby');
    }
  }, [tokens]);

  useEffect(() => {
    if (error) message.error(error, 0.5);
  }, [error]);

  return (
    <SignIn
      handleInput={handleInput}
      handleClick={handleClick}
      handleEnter={handleEnter}
      handleTo={handleTo}
    />
  );
};
