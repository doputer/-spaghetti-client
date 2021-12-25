import { message } from 'antd';
import { apiPayload } from 'apis/authApi';
import { apiGetUser } from 'apis/userApi';
import { Spinner } from 'components/common/Spinner';
import { Lobby } from 'components/Lobby';
import { useAsync } from 'hooks/useAsync';
import { useEffect } from 'react';

export const LobbyPage = () => {
  const { data: payload, error } = useAsync(apiPayload, true);
  const { data: user, execute: getUser } = useAsync(apiGetUser);

  useEffect(() => {
    if (error) message.error(error, 0.5);
  }, [error]);

  useEffect(() => {
    if (payload) getUser(payload.id);
  }, [payload]);

  return !user ? (
    <Spinner style={{ fontSize: '36px' }} />
  ) : (
    <Lobby user={user} />
  );
};
