import { Avatar, Divider, Space, Statistic } from 'antd';
import { Card } from 'components/common/Card';

import { AntDesignOutlined, ApiFilled, CrownFilled } from '@ant-design/icons';

export const Lobby = () => {
  return (
    <Card>
      <Avatar
        size={{
          xs: 24,
          sm: 32,
          md: 40,
          lg: 64,
          xl: 80,
          xxl: 100,
        }}
        icon={<AntDesignOutlined />}
      />
      <h1>{`김도현`}</h1>
      <Space split={<Divider type="vertical" />}>
        <Statistic title="MMR" value={1128} prefix={<CrownFilled />} />
        <Statistic title="PLAYERS" value={1128} prefix={<ApiFilled />} />
      </Space>
    </Card>
  );
};
