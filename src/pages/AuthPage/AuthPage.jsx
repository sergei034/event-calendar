import { useDispatch, useSelector } from 'react-redux';
import { Layout, Row } from 'antd';

import AuthForm from '../../containers/AuthForm/AuthForm';
import Notification from '../../components/Notification';
import Spinner from '../../components/Spinner';
import { AUTH_ACTION_CREATORS } from '../../store/reducers/authReducer/authActions';
import './AuthPage.css';
import { NOTIFICATION_TYPES } from '../../utils/constants';

const Authpage = () => {
  const dispatch = useDispatch();

  // TODO: replace with selector from reselect
  const error = useSelector(state => state.auth.error);
  const status = useSelector(state => state.auth.status);
  const isLoading = status === 'loading';

  const handleSignIn = userData => {
    console.log('SIGN IN', userData);
    dispatch(AUTH_ACTION_CREATORS.signInRequest(userData));
  };

  return (
    <Layout.Content className="auth-page">
      {isLoading && <Spinner />}
      {error && (
        <Notification type={NOTIFICATION_TYPES.ERROR} message={error} />
      )}
      <Row justify="center" align="middle" className="auth-page__content">
        <AuthForm isLoading={isLoading} handleSignIn={handleSignIn} />
      </Row>
    </Layout.Content>
  );
};

export default Authpage;
