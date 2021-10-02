// input projects into cards
import React from 'react';


import { Card, Tag, Row, Col } from 'antd';
import {GithubOutlined,LinkOutlined} from '@ant-design/icons';


const { Meta } = Card;

// col 6 offset 6, 4 grid system with gutter as spacers
// two rows so it can space evenly

export function ProjectList() {
  
  return (
    <>
    {/* put in grid responsiveness (on the right side of grid documentation) */}
    <Row>
      <Col md={{span: 8, offset:6}} lg={{span: 8, offset: 6}}>
        <Card
          style={{ backgroundColor: '#0388a6' }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[

            <a href='https://github.com/spreston4/playlistify'>
            <GithubOutlined key="github" type="link"/>
            </a>,
            <a href='https://playlistify-pod3.herokuapp.com/'>
            <LinkOutlined key="link" href=""/>
            </a>
          ]}
        >
          <Meta
            
            title="Playlistify"
            description="search and add songs to your spotify playlists"
          />
        </Card>
      </Col>
        

        <Col span={8}> 
         
            <Card
              style={{ width: 300 }}
              span={8}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <a href="https://github.com/RSimer">
                <GithubOutlined key="github" type="link" >
                </GithubOutlined>
                </a>,
                <a href="">
                <LinkOutlined key="link" href=""/>
                </a>
              ]}
            >
              <Meta
                
                title="Card title"
                description="This is the description"
              />
            </Card>

        </Col>

      </Row>


      <Row gutter={2}
      style={{marginTop: '100px'}}
      >
        
          <Col span={8} offset={6}>
            <Card
              style={{ width: 300 }}
              span={8}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <GithubOutlined key="github" type="link"/>,
                 
                <LinkOutlined key="link" href=""/>
              ]}
            >
              <Meta
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
        

        <Col span={8}>
        <Card
              style={{ width: 300 }}
              span={8}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <GithubOutlined key="github" type="link" >
                  <Tag>
                    <a href="https://mail.google.com/mail/u/0/#inbox">

                    </a>
                    
                  </Tag>
                </GithubOutlined>,
                <LinkOutlined key="link" href=""/>
              ]}
            >
              <Meta
                
                title="Card title"
                description="This is the description"
              />
            </Card>
        </Col>
        

      </Row>
      </>

      

      
      
  )
};

