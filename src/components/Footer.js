import React from "react";
import { Row, Col } from "antd";
import {GithubOutlined,LinkedinOutlined,InstagramOutlined} from '@ant-design/icons';


export function Footer(){

    return(
        <div>
            <Row style={{marginTop:25}}>
                <Col offset={11}>
                <a href = "https://github.com/RSimer">
                    <GithubOutlined
                    style={{fontSize: '30px', marginTop: 25, marginRight:15}}
                    />
                </a>
                </Col>
                <Col>
                <a href='https://www.linkedin.com/in/rob-simanton-0098/'>
                    <LinkedinOutlined style={{fontSize: '30px', marginTop: 25}}/>
                </a>
                </Col>
                <Col>
                <a href='https://www.instagram.com/rob.simanton/'>
                    <InstagramOutlined style={{fontSize: '30px', marginTop: 25, marginLeft: 15}} />
                </a>

                </Col>
            </Row>
        </div>
    );

};