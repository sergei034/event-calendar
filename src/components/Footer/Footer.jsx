import { Layout } from 'antd';

import './Footer.css';

const Footer = ({ currentYear }) => (
  <Layout.Footer className="footer">
    Events Calendar ©{currentYear}
  </Layout.Footer>
);

export default Footer;
