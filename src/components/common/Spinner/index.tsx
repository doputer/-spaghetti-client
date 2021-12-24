import './index.scss';

import { Spin } from 'antd';

import { LoadingOutlined } from '@ant-design/icons';

interface SpinnerProps {
  size: number;
}

export const Spinner = ({ size }: SpinnerProps) => {
  return (
    <div className="spinner flex flex-center">
      <Spin indicator={<LoadingOutlined style={{ fontSize: size }} spin />} />
    </div>
  );
};
