import { Col, Image } from "antd";
import React from "react";
import pfp from './images/pfp.jpg'

export function AboutMe(){

    return(

        <div>
            <Col >
            <Image
            height={400}
            width={300}
             src={pfp}
             alt='profile picture of self in desert, cactus in background'
              />
           
            </Col>
            <Col
            span={12}
            offset={10}
            
            >

                   
                

                <p>
                    Hi my name is Rob Simanton, I am a dedicated finance and economics undergraduate student with 4 years of internship experience in many diverse fields. Dependable, highly-diligent work ethic, and flexible with skills and time management. Recognized for customer service excellence, critical thinking, and team-oriented leadership.Trustworthy student who is determined to put the values of an organization first, including customer relations, team collaboration, and ethical considerations in the professional setting.
                </p>

            </Col>

            
        </div>
    );

};
