import { Col, Image,Row } from "antd";
import React from "react";
import pfp from './images/pfp.jpg'

export function AboutMe(){

    return(

        <div>
            <Row>
            <Col sm={{width:300,heigh:200}} md={{height:200,width:200}}>
            <Image 
            width={300}
            height={200}
         
           
            
            span={8}
             src={pfp}
             alt='profile picture of self in desert, cactus in background'
              />
           
            </Col>
            <Col
            span={12}
            offset={8}
            
            >

                   
                

                <p>
                    Hi my name is Rob Simanton, I am a dedicated finance and economics undergraduate student with 4 years of internship experience in many diverse fields. Dependable, highly-diligent work ethic, and flexible with skills and time management. Recognized for customer service excellence, critical thinking, and team-oriented leadership.Trustworthy student who is determined to put the values of an organization first, including customer relations, team collaboration, and ethical considerations in the professional setting.
                </p>

            </Col>

            </Row>
        </div>
    );

};
