import './index.scss';

import { LikeFilled, LikeOutlined } from '@ant-design/icons';
import { useState } from 'react';

interface MatchProps {
  winMatch: () => void;
}

export const Match = ({ winMatch }: MatchProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="win-wrap"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {!hover && <LikeOutlined className="win" />}
      {hover && <LikeFilled className="win" onClick={() => winMatch()} />}
    </div>
  );
};
