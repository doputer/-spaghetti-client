import './index.scss';

import { Avatar, Button, Divider, Space, Statistic } from 'antd';
import { Card } from 'components/common/Card';
import { Name } from 'components/Name';

import { ApiFilled, CrownFilled } from '@ant-design/icons';

interface IUser {
  nickname: string;
  mmr: number;
}
interface LobbyProps {
  user: IUser;
  connections: number;
  seconds: number;
  isRunning: boolean;
  addQueue: () => void;
}

export const Lobby = ({
  user,
  connections,
  seconds,
  isRunning,
  addQueue,
}: LobbyProps) => {
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
      <Name
        style={{
          margin: '0px',
          fontSize: '24px',
          fontWeight: 'bold',
        }}
      >
        {user?.nickname}
      </Name>
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
        disabled={isRunning}
      >
        {isRunning ? `${seconds}s` : 'Play'}
      </Button>
    </Card>
  );
};
