import 'hard/dist/index.css';
import './index.scss';

import { Alert } from 'hard';
import React from 'react';

const Demo = () => {
  return (
    <div>
      <Alert title="Success alert" type="success" />
      <Alert title="Info alert" type="info" />
      <Alert title="Warning alert" type="warning" />
      <Alert title="Error alert" type="error" />
    </div>
  );
};

export default Demo;
