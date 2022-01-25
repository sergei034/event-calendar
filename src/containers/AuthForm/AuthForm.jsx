import { useState } from 'react';
import { Form, Input, Button, Row } from 'antd';

import { RULES } from '../../utils/formRules';

const AuthForm = ({ isLoading = false, handleSignIn }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = ({ username, password }) => {
    handleSignIn({ username, password });
    setUsername(null);
    setPassword(null);
  };

  return (
    <Form
      name="login-form"
      onFinish={() => handleSubmit({ username, password })}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[RULES.required('Please enter your username')]}
      >
        <Input value={username} onChange={e => setUsername(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[RULES.required('Please enter your password')]}
      >
        <Input.Password
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item>
        <Row justify="center">
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Sign In
          </Button>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default AuthForm;
