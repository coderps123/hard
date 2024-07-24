import 'hard/dist/index.css';
import './index.scss';

import { Alert } from 'hard';
import React from 'react';

const Demo = () => {
  return (
    <div>
      <Alert center title="Success alert" type="success" showIcon />
      <Alert center title="Info alert" type="info" showIcon />
      <Alert center title="Warning alert" type="warning" showIcon />
      <Alert center title="Error alert" type="error" showIcon />
    </div>
  );
};

export default Demo;
