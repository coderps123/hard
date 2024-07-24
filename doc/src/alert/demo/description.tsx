import 'hard/dist/index.css';
import './index.scss';

import { Alert } from 'hard';
import React from 'react';

const Demo = () => {
  return (
    <div>
      <Alert
        title="Success alert"
        type="success"
        description="More text description"
        showIcon
      />
      <Alert
        title="Info alert"
        type="info"
        description="More text description"
        showIcon
      />
      <Alert
        title="Warning alert"
        type="warning"
        description="More text description"
        showIcon
      />
      <Alert
        title="Error alert"
        type="error"
        description="More text description"
        showIcon
      />
    </div>
  );
};

export default Demo;
