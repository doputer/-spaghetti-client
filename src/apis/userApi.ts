import axios from 'axios';

interface IAccount {
  nickname: string;
  email: string;
  password: string;
}

export const apiCreateUser = async (data: IAccount) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_BASE_URL}/users`,
    data,
  );

  return response.data;
};
