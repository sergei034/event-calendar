import { Layout, Row, Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AUTH_ACTION_CREATORS } from '../../store/reducers/authReducer/authActions';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector(state => state.auth.isAuth);
  const username = useSelector(state => state.auth.username);

  const handleSignIn = () => {
    navigate('/auth');
  };

  const handleSignOut = () => {
    dispatch(AUTH_ACTION_CREATORS.signOutRequest());
    navigate('/auth');
  };

  return (
    <Layout className="header">
      <Layout.Header className="header">
        <Row justify="end">
          {isAuth ? (
            <>
              <div className="username">{username}</div>
              <Menu theme="dark" mode="horizontal" selectable={false}>
                <Menu.Item key="sign-out" onClick={handleSignOut}>
                  Sign Out
                </Menu.Item>
              </Menu>
            </>
          ) : (
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="sign-in" onClick={handleSignIn}>
                Sign In
              </Menu.Item>
            </Menu>
          )}
        </Row>
      </Layout.Header>
    </Layout>
  );
};

export default Header;
