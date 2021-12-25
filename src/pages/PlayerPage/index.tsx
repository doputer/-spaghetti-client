import { Cover } from 'components/templates/Cover';
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
