import axios from 'axios';
import { getCookie } from 'utils/cookie';

export const apiPayload = async () => {
  const access_token = getCookie('access_token');

  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_BASE_URL}/auth`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  );

  return response.data;
};

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
