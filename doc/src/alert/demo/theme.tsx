import 'hard/dist/index.css';
import './index.scss';

import { Alert } from 'hard';
import React from 'react';

const Demo = () => {
  return (
    <div>
      <Alert effect="dark" title="Success alert" type="success" />
      <Alert effect="dark" title="Info alert" type="info" />
      <Alert effect="dark" title="Warning alert" type="warning" />
      <Alert effect="dark" title="Error alert" type="error" />
    </div>
  );
};

export default Demo;
