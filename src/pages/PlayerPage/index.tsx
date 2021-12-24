import { Cover } from 'components/common/Cover';
import { Outlet } from 'react-router-dom';

export const PlayerPage = () => {
  return (
    <Cover
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      animation={true}
    >
      <Outlet />
    </Cover>
  );
};
