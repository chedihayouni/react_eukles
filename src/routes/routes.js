import Home from '../pages/auth/Home';
import Dashboard from '../pages/todo/Dashboard';
import Register from '../pages/auth/Register';
import Archive from '../pages/todo/Archive';
import NoMatch from '../common/NoMatch';

const routes = [
  {
    path: '/login',
    exact: true,
    auth: false,
    component: Home,
  },
  {
    path: '/',
    exact: true,
    auth: false,
    component: Home,
  },
  {
    path: '/dashboard',
    exact: true,
    auth: true,
    component: Dashboard
  },
  {
    path: '/register',
    exact: true,
    auth: false,
    component: Register,
  },
  {
    path: '/archive',
    exact: true,
    auth: true,
    component: Archive,
  },
  {
    path: '',
    exact: false,
    auth: false,
    component: NoMatch,
  },
];

export default routes;
