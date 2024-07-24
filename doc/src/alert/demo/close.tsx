import 'hard/dist/index.css';
import './index.scss';

import { Alert } from 'hard';
import React from 'react';

const Demo = () => {
  const hello = () => {
    alert('Hello World!');
  };
  return (
    <div>
      <Alert title="Unclosable alert" type="success" closable={false} />
      <Alert title="Customized close text" type="info" closeText="Gotcha" />
      <Alert title="Alert with callback" type="warning" onClose={hello} />
    </div>
  );
};

export default Demo;
