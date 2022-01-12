import { Navigate } from 'react-router-dom';

import AuthPage from '../../pages/AuthPage';
import EventsPage from '../../pages/EventsPage';

export const ROUTE_PATHS = {
  ANY: '*',
  AUTH: '/auth',
  EVENTS: '/events',
};

export const PRIVATE_ROUTES = [
  {
    path: ROUTE_PATHS.EVENTS,
    element: <EventsPage />,
  },
  {
    path: ROUTE_PATHS.ANY,
    element: <Navigate to={ROUTE_PATHS.EVENTS} />,
  },
];

export const PUBLIC_ROUTES = [
  {
    path: ROUTE_PATHS.AUTH,
    element: <AuthPage />,
  },
  {
    path: ROUTE_PATHS.ANY,
    element: <Navigate to={ROUTE_PATHS.AUTH} />,
  },
];
