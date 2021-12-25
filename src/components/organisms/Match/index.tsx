import './index.scss';

import { Button, Space } from 'antd';
import { Card } from 'components/atoms/Card';
import { Editor } from 'components/atoms/Editor';
import { Problem } from 'components/molecules/Problem';

import { PlayCircleFilled } from '@ant-design/icons';

export const Match = () => {
  return (
    <Space className="match" wrap={true}>
      <Card className="match-item">
        <Problem />
      </Card>
      <Card
        className="match-item"
        style={{
          backgroundColor: 'transparent',
          padding: '0px',
        }}
      >
        <Editor />
        <Button
          className="execute-button"
          type="primary"
          size="large"
          icon={<PlayCircleFilled />}
        >
          실행
        </Button>
      </Card>
    </Space>
  );
};
