import axios from 'axios';

export const apiGetUser = async (data: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_BASE_URL}/users/${data}`,
  );

  return response.data;
};

interface IUser {
  nickname: string;
  email: string;
  password: string;
}

export const apiCreateUser = async (data: IUser) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_BASE_URL}/users`,
    data,
  );

  return response.data;
};
