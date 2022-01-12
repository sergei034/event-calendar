import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './routes';

const AppRouter = () => {
  const isAuth = useSelector(state => state.auth.isAuth);

  const routes = isAuth ? PRIVATE_ROUTES : PUBLIC_ROUTES;

  return (
    <Routes>
      {routes.map(route => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
