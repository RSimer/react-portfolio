/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Menu } from 'antd';
import {MenuFoldOutlined} from '@ant-design/icons';
const {SubMenu} = Menu;

class Sider extends React.Component {
    handleClick = e => {
      console.log('click ', e);
    };

    render() {
        return (
          <Menu
            onClick={this.handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
               
          <SubMenu key="sub1" icon={<MenuFoldOutlined />} title="">
          <Menu.Item key="1">About Me</Menu.Item>
          <Menu.Item key="2">Projects</Menu.Item>
          <Menu.Item key="3">Contact Me</Menu.Item>
          <Menu.Item key="4">Resume</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default Sider;

