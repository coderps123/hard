import 'hard/dist/index.css';
import './index.scss';

import { Button } from 'hard';
import React from 'react';

const BaseDemo = () => {
  return (
    <div>
      {/* default */}
      <div className="mb-4">
        <Button disabled>Default</Button>
        <Button disabled type="primary">
          Primary
        </Button>
        <Button disabled type="success">
          Success
        </Button>
        <Button disabled type="warning">
          Warning
        </Button>
        <Button disabled type="danger">
          Danger
        </Button>
        <Button disabled type="info">
          Info
        </Button>
      </div>

      {/* plain */}
      <div className="mb-4">
        <Button disabled plain>
          Default
        </Button>
        <Button disabled plain type="primary">
          Primary
        </Button>
        <Button disabled plain type="success">
          Success
        </Button>
        <Button disabled plain type="warning">
          Warning
        </Button>
        <Button disabled plain type="danger">
          Danger
        </Button>
        <Button disabled plain type="info">
          Info
        </Button>
      </div>
    </div>
  );
};

export default BaseDemo;
