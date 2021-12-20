import { apiCreateUser } from 'apis/userApi';
import { SignUpForm } from 'components/organisms/SignUpForm';
import { Content } from 'components/templates/Content';
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

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setAccount({ ...account, [name]: value });
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
    if (error) alert(error);
  }, [error]);

  return (
    <Content>
      <SignUpForm
        account={account}
        repassword={repassword}
        setRepassword={setRepassword}
        handleInput={handleInput}
        handleClick={handleClick}
      />
    </Content>
  );
};
