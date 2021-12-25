import { message } from 'antd';
import { apiPayload } from 'apis/authApi';
import { apiGetUser } from 'apis/userApi';
import { Match } from 'components/organisms/Match';
import { useAsync } from 'hooks/useAsync';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useStopwatch } from 'react-timer-hook';
import { io, Socket } from 'socket.io-client';

export const MatchPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [socket, setSocket] = useState<Socket>();
  const [code, setCode] = useState('');

  const { data: payload, error } = useAsync(apiPayload, true);
  const { data: user, execute: getUser } = useAsync(apiGetUser);

  const { minutes, seconds, start, pause } = useStopwatch({
    autoStart: false,
  });

  useEffect(() => {
    setSocket(
      io(`${process.env.REACT_APP_SOCKET_BASE_URL}/match`, {
        transports: ['websocket'],
      }),
    );
  }, []);

  useEffect(() => {
    socket?.on('message', data => message.info(data));
    socket?.on('system', data => {
      if (data.start) {
        if (data.start === true) start();
        else pause();
      }

      if (data.exit) {
        socket.disconnect();
        navigate('/lobby');
      }
    });
  }, [socket]);

  useEffect(() => {
    if (error) message.error(error, 0.5);
  }, [error]);

  useEffect(() => {
    if (payload) getUser(payload.id);
  }, [payload]);

  useEffect(() => {
    if (user)
      socket?.emit('enter', {
        id: user._id,
        mmr: user.mmr,
        matchId: id,
      });
  }, [user]);

  const executeCode = () => {
    /**
     * 컴파일 서버에 코드를 보내는 요청
     */
    console.log(code);

    /**
     * 전송한 코드가 맞았다고 가정
     */
    socket?.emit('win', {
      id: user._id,
      mmr: user.mmr,
      matchId: id,
    });
  };

  return (
    <Match
      minutes={minutes}
      seconds={seconds}
      code={code}
      setCode={setCode}
      executeCode={executeCode}
    />
  );
};
