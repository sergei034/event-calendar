import { Spin } from 'antd';

import './Spinner.css';

const Spinner = ({ size = 'large' }) => (
  <Spin className="spinner" size={size} />
);

export default Spinner;
