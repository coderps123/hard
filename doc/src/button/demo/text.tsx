import 'hard/dist/index.css';
import './index.scss';

import { Button } from 'hard';
import React from 'react';

const Demo = () => {
  const buttons = [
    { type: undefined, text: 'plain' },
    { type: 'primary', text: 'primary' },
    { type: 'success', text: 'success' },
    { type: 'info', text: 'info' },
    { type: 'warning', text: 'warning' },
    { type: 'danger', text: 'danger' },
  ] as const;
  return (
    <div>
      <div className="mb-4">
        {buttons.map((button) => {
          return (
            <Button type={button.type} key={button.text} text>
              {button.text}
            </Button>
          );
        })}
      </div>
      <div className="mb-4">
        {buttons.map((button) => {
          return (
            <Button type={button.type} key={button.text} text bg>
              {button.text}
            </Button>
          );
        })}
      </div>
      <div className="mb-4">
        {buttons.map((button) => {
          return (
            <Button type={button.type} key={button.text} text bg disabled>
              {button.text}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Demo;
