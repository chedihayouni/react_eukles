import Dashboard from '../pages/client/Dashboard';
import NoMatch from '../common/NoMatch';
import Store from '../pages/store/Store';

const routes = [
  {
    path: '/dashboard',
    exact: true,
    auth: true,
    component: Dashboard
  },
  {
    path: '/store',
    exact: true,
    auth: true,
    component: Store
  },
  {
    path: '',
    exact: false,
    auth: false,
    component: Dashboard,
  },
];

export default routes;
