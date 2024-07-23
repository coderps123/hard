import 'hard/dist/index.css';
import './index.scss';

import {
  DeleteOutlined,
  FormOutlined,
  SearchOutlined,
  ShareAltOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Button } from 'hard';
import React from 'react';

const Demo = () => {
  return (
    <div>
      <div className="mb-4">
        <Button type="primary" icon={<FormOutlined />}></Button>
        <Button type="primary" icon={<ShareAltOutlined />}></Button>
        <Button type="primary" icon={<DeleteOutlined />}></Button>
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <Button type="primary">
          Upload
          <UploadOutlined />
        </Button>
      </div>
    </div>
  );
};

export default Demo;
