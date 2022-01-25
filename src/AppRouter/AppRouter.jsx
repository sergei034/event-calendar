import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AUTH_ACTION_CREATORS } from '../store/reducers/authReducer/authActions';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './routes';
import './AppRouter.css';

const AppRouter = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);

  const routes = isAuth ? PRIVATE_ROUTES : PUBLIC_ROUTES;

  useEffect(() => {
    dispatch(AUTH_ACTION_CREATORS.initAuthRequest());
  });

  return (
    <div className="main-content">
      <Routes>
        {routes.map(route => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Routes>
    </div>
  );
};

export default AppRouter;
