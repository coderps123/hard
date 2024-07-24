import 'hard/dist/index.css';
import './index.scss';

import { Alert } from 'hard';
import React from 'react';

const Demo = () => {
  return (
    <div>
      <Alert title="Success alert" type="success" showIcon />
      <Alert title="Info alert" type="info" showIcon />
      <Alert title="Warning alert" type="warning" showIcon />
      <Alert title="Error alert" type="error" showIcon />
    </div>
  );
};

export default Demo;
