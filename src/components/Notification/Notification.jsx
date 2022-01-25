import { Alert } from 'antd';

import './Notification.css';

const Notification = ({ type = 'error', message = 'error' }) => (
  <Alert
    className="notification"
    message={message}
    type={type}
    showIcon
    banner
    closable
  />
);

export default Notification;
