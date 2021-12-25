import './index.scss';

import { Button, Input, Space } from 'antd';
import { Card } from 'components/atoms/Card';
import { Editor } from 'components/atoms/Editor';
import { Problem } from 'components/molecules/Problem';

import { ClockCircleFilled, PlayCircleFilled } from '@ant-design/icons';

const { TextArea } = Input;

interface MatchProps {
  minutes: number;
  seconds: number;
  code: string;
  setCode: (value: string) => void;
  executeCode: () => void;
}

export const Match = ({
  minutes,
  seconds,
  code,
  setCode,
  executeCode,
}: MatchProps) => {
  return (
    <Space
      className="match"
      wrap={true}
      style={{
        padding: '10px',
      }}
    >
      <Card className="item-left">
        <Problem />
      </Card>
      <Card className="item-right">
        <div className="timer">
          <ClockCircleFilled
            style={{
              marginRight: '8px',
            }}
          />
          {`${minutes} : ${seconds}`}
        </div>
        <Editor code={code} setCode={setCode} />
        <div className="buttons">
          <Button
            onClick={() => executeCode()}
            className="execute-button"
            type="primary"
            size="large"
            icon={<PlayCircleFilled />}
          >
            실행
          </Button>
        </div>
        <TextArea readOnly className="result" />
      </Card>
    </Space>
  );
};
