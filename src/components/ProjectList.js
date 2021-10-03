// input projects into cards
import React from 'react';


import { Card, Row, Col } from 'antd';
import {GithubOutlined,LinkOutlined} from '@ant-design/icons';


// photo imports
import p6 from './images/screenshot.png'
import playlist from './images/home.PNG'
import notes from './images/takin-notes.png'
import fitness from './images/fitness-track.png'


const { Meta } = Card;

// col 6 offset 6, 4 grid system with gutter as spacers
// two rows so it can space evenly

export function ProjectList() {
  
  return (
    <>
    {/* put in grid responsiveness (on the right side of grid documentation) */}
    <Row gutter={[16,24]}
         style={{marginTop:50}} 
    >
      <Col xs={{span:12, offset:8}} sm={{span: 12, offset:6}}  >
        <Card
          style={{ backgroundColor: '#0388a6' }}
          cover={
            <img
              alt="example"
              src={playlist}
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
        </Row>


          <Row gutter={[16,16]}
               style={{marginTop:25}}  
          >
        <Col xs={{span:12, offset:8}} sm={{span: 12, offset:6}}> 
         
            <Card
              style={{ backgroundColor: '#0388a6' }}
              
              cover={
                <img
                  alt="example"
                  src={p6}
                />
              }
              actions={[
                <a href="https://github.com/RSimer/P6MRDb">
                <GithubOutlined key="github" type="link" >
                </GithubOutlined>
                </a>,
                <a href="https://rsimer.github.io/P6MRDb/">
                <LinkOutlined key="link" href=""/>
                </a>
              ]}
            >
              <Meta
                
                title="P6MRDb"
                description="This application allows the user to see reviews for their favorite movies"
              />
            </Card>

        </Col>

      </Row>


      <Row gutter={[16,16]}
           style={{marginTop:25}}  
      >
        
          <Col xs={{span:12, offset:8}} sm={{span: 12, offset:6}} >
            <Card
              style={{ backgroundColor: '#0388a6' }}
              
              cover={
                <img
                  alt="screenshot of note taker"
                  src={notes}
                />
              }
              actions={[
                <a href="https://github.com/RSimer/Taking-Notes">
                <GithubOutlined key="github" type="link" >
                </GithubOutlined>
                </a>,
                <a href="https://taking-notes76.herokuapp.com/">
                <LinkOutlined key="link" href=""/>
                </a>
              ]}
            >
              <Meta
                title="Taking Notes"
                description="This allows the user to keep track of their thoughts through notes"
              />
            </Card>
          </Col>
        </Row>

        <Row gutter={[0,8]}
             style={{marginTop:25, marginBottom:50}} 
        >
        <Col xs={{span:12, offset:8}} sm={{span: 12, offset:6}}>
        <Card
              style={{ backgroundColor: '#0388a6' }}
              
              cover={
                <img
                  alt="example"
                  src={fitness}
                />
              }
              actions={[
                <a href="https://github.com/RSimer/Workout-tracker">
                <GithubOutlined key="github" type="link" >
                </GithubOutlined>
                </a>,
                <a href="https://fitness-tracker2323.herokuapp.com/">
                <LinkOutlined key="link" href=""/>
                </a>
              ]}
            >
              <Meta
                
                title="Fitness Tracker"
                description="This application allows the user to stay fit by tracking the workout"
              />
            </Card>
        </Col>
        

      </Row>
      </>

      

      
      
  )
};

