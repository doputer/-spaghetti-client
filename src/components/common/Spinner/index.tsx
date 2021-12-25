import './index.scss';

import { Spin } from 'antd';

import { LoadingOutlined } from '@ant-design/icons';

interface SpinnerStyles {
  fontSize?: string;
}

interface SpinnerProps {
  style?: SpinnerStyles;
}

export const Spinner = ({ style }: SpinnerProps) => {
  return (
    <div className="spinner flex flex-center">
      <Spin indicator={<LoadingOutlined style={style} spin />} />
    </div>
  );
};
