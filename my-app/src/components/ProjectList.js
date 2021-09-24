// input projects into cards
import React from 'react';
import { ReactDOM } from 'react';

import { Card, Avatar } from 'antd';
import {GithubOutlined,LinkOutlined} from '@ant-design/icons';

const { Meta } = Card;

ReactDOM.render(
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <GithubOutlined key="" />,
        <LinkOutlined key=""/>
      ]}
    >
      <Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title="Card title"
        description="This is the description"
      />
    </Card>,
    
  );