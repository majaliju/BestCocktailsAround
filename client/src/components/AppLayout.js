import { Outlet } from 'react-router-dom';
import Header from './Header';

function AppLayout() {
  <>
    <Header />
    <Outlet />
  </>;
}

export default AppLayout;
