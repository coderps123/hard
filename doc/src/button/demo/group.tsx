import {
  DeleteOutlined,
  FormOutlined,
  LeftOutlined,
  RightOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { Button } from 'hard';
import React from 'react';

const Demo = () => {
  return (
    <div>
      <Button.Group type="primary">
        <Button icon={<LeftOutlined />}>Previous Page</Button>
        <Button>
          Next Page
          <RightOutlined />
        </Button>
      </Button.Group>

      <Button.Group type="primary">
        <Button icon={<FormOutlined />}></Button>
        <Button type="success" icon={<ShareAltOutlined />}></Button>
        <Button icon={<DeleteOutlined />}></Button>
      </Button.Group>
    </div>
  );
};

export default Demo;
