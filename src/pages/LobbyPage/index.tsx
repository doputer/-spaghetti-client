import { message } from 'antd';
import { apiPayload } from 'apis/authApi';
import { apiGetUser } from 'apis/userApi';
import { Spinner } from 'components/atoms/Spinner';
import { Lobby } from 'components/organisms/Lobby';
import { useAsync } from 'hooks/useAsync';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStopwatch } from 'react-timer-hook';
import { io, Socket } from 'socket.io-client';

export const LobbyPage = () => {
  const navigate = useNavigate();

  const [socket, setSocket] = useState<Socket>();

  const { data: payload, error } = useAsync(apiPayload, true);
  const { data: user, execute: getUser } = useAsync(apiGetUser);

  const { seconds, start, pause } = useStopwatch({
    autoStart: false,
  });

  const [connections, setConnections] = useState(0);

  useEffect(() => {
    setSocket(
      io(`${process.env.REACT_APP_SOCKET_BASE_URL}/queue`, {
        transports: ['websocket'],
      }),
    );
  }, []);

  useEffect(() => {
    socket?.on('message', data => {
      console.log(data);

      if (data.connections) setConnections(() => data.connections);
    });

    socket?.on('match', data => {
      pause();

      message.info('매치를 찾았습니다! 잠시후 경기가 시작됩니다.', 1, () => {
        socket.disconnect();
        navigate(`/match/${data}`);
      });
    });
  }, [socket]);

  useEffect(() => {
    if (error) message.error(error, 0.5);
  }, [error]);

  useEffect(() => {
    if (payload) getUser(payload.id);
  }, [payload]);

  const addQueue = () => {
    socket?.emit('addQueue', {
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
