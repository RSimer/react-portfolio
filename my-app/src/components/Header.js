/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Menu } from 'antd';
import {
 
Link
} from "react-router-dom";


const {SubMenu} = Menu;

export function Sider() {

  const handleClick = e => {
    console.log('click ', e);
  };

  return (
      <Menu
        onClick={handleClick}
        style={{ width: 350, backgroundColor: '#f58766'}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
          
      <SubMenu key="sub1"  title="">
      <Menu.Item key="1"> <Link to = "/about"> About Me </Link> </Menu.Item>
      <Menu.Item key="2"> <Link to = "/projectList"> Projects </Link> </Menu.Item>
      <Menu.Item key="3">Contact Me</Menu.Item>
      <Menu.Item key="4">Resume</Menu.Item>
    </SubMenu>
  </Menu>
  );
}



