import axios from 'axios';

interface ILogin {
  email: string;
  password: string;
}

export const apiLogin = async (data: ILogin) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_BASE_URL}/auth`,
    data,
  );

  return response.data;
};
