import { apiLogin } from 'apis/authApi';
import { SignInForm } from 'components/organisms/SignInForm';
import { Content } from 'components/templates/Content';
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

      navigate('/spaghetti');
    }
  }, [tokens]);

  useEffect(() => {
    if (error) alert(error);
  }, [error]);

  return (
    <Content>
      <SignInForm
        account={account}
        handleInput={handleInput}
        handleClick={handleClick}
        handleEnter={handleEnter}
      />
    </Content>
  );
};
