import { message } from 'antd';
import { apiPayload } from 'apis/authApi';
import { apiGetUser } from 'apis/userApi';
import { Spinner } from 'components/common/Spinner';
import { Lobby } from 'components/Lobby';
import { useAsync } from 'hooks/useAsync';
import { useEffect, useState } from 'react';
import { useStopwatch } from 'react-timer-hook';
import { io } from 'socket.io-client';

const socket = io(`${process.env.REACT_APP_SOCKET_BASE_URL}/queues`, {
  transports: ['websocket'],
});

export const LobbyPage = () => {
  const { data: payload, error } = useAsync(apiPayload, true);
  const { data: user, execute: getUser } = useAsync(apiGetUser);

  const { seconds, start, pause } = useStopwatch({
    autoStart: false,
  });

  const [connections, setConnections] = useState(0);

  useEffect(() => {
    socket.on('message', data => {
      console.log(data);

      if (data.connections) setConnections(data.connections);
    });
    socket.on('match', data => {
      console.log(data);

      pause();

      message.info('매치를 찾았습니다! 잠시후 경기가 시작됩니다.', 3);
    });
  }, []);

  useEffect(() => {
    if (error) message.error(error, 0.5);
  }, [error]);

  useEffect(() => {
    if (payload) getUser(payload.id);
  }, [payload]);

  const addQueue = () => {
    socket.emit('addQueue', {
      id: user._id,
      mmr: user.mmr,
    });

    start();
  };

  return !user ? (
    <Spinner style={{ fontSize: '36px' }} />
  ) : (
    <Lobby
      user={user}
      connections={connections}
      seconds={seconds}
      addQueue={addQueue}
    />
  );
};
