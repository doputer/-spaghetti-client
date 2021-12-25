import './index.scss';

import { Avatar, Button, Divider, Space, Statistic } from 'antd';
import { Card } from 'components/atoms/Card';
import { Title } from 'components/atoms/Title';

import { ApiFilled, CrownFilled } from '@ant-design/icons';

interface IUser {
  nickname: string;
  mmr: number;
}
interface LobbyProps {
  user: IUser;
  connections: number;
  seconds: number;
  addQueue: () => void;
}

export const Lobby = ({ user, connections, seconds, addQueue }: LobbyProps) => {
  return (
    <Card className="lobby">
      <Avatar
        size={{
          xs: 24,
          sm: 32,
          md: 40,
          lg: 64,
          xl: 80,
          xxl: 100,
        }}
        src="/assets/images/pasta.png"
      />
      <Title
        style={{
          margin: '0px',
          fontSize: '24px',
          fontWeight: '700',
        }}
      >
        {user?.nickname}
      </Title>
      <Space
        split={
          <Divider
            type="vertical"
            style={{
              backgroundColor: '#e5e5e5',
            }}
          />
        }
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Statistic value={user?.mmr} title="MMR" prefix={<CrownFilled />} />
        <Statistic value={connections} title="PLAYERS" prefix={<ApiFilled />} />
      </Space>
      <Button
        onClick={() => addQueue()}
        type="primary"
        size="large"
        className="play-button"
        disabled={seconds > 0}
      >
        {seconds > 0 ? `${seconds}s` : 'Play'}
      </Button>
    </Card>
  );
};
