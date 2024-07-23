import 'hard/dist/index.css';
import './index.scss';

import {
  CheckOutlined,
  DeleteOutlined,
  FormOutlined,
  HeartOutlined,
  MailOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Button } from 'hard';
import React from 'react';

const Demo = () => {
  return (
    <div>
      {/* default */}
      <div className="mb-4">
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="danger">Danger</Button>
        <Button type="info">Info</Button>
      </div>

      {/* plain */}
      <div className="mb-4">
        <Button plain>Default</Button>
        <Button plain type="primary">
          Primary
        </Button>
        <Button plain type="success">
          Success
        </Button>
        <Button plain type="warning">
          Warning
        </Button>
        <Button plain type="danger">
          Danger
        </Button>
        <Button plain type="info">
          Info
        </Button>
      </div>

      {/* round */}
      <div className="mb-4">
        <Button round>Default</Button>
        <Button round type="primary">
          Primary
        </Button>
        <Button round type="success">
          Success
        </Button>
        <Button round type="warning">
          Warning
        </Button>
        <Button round type="danger">
          Danger
        </Button>
        <Button round type="info">
          Info
        </Button>
      </div>

      {/* circle */}
      <div className="mb-4">
        <Button circle icon={<SearchOutlined />}></Button>
        <Button circle type="primary" icon={<FormOutlined />}></Button>
        <Button circle type="success" icon={<CheckOutlined />}></Button>
        <Button circle type="warning" icon={<MailOutlined />}></Button>
        <Button circle type="danger" icon={<HeartOutlined />}></Button>
        <Button
          circle
          type="info"
          icon={<DeleteOutlined />}
          onClick={(event) => console.log(event)}
        ></Button>
      </div>
    </div>
  );
};

export default Demo;
