import React from "react";
import { Row, Col } from "antd";
import {GithubOutlined,LinkedinOutlined,InstagramOutlined} from '@ant-design/icons';


export function Footer(){

    return(
        <div>
            <Row span={8}>
                <Col span={8}>
                <a href = "https://github.com/RSimer">
                    <GithubOutlined
                    height={50}
                    />
                </a>

                <a href=''>
                    <LinkedinOutlined />
                </a>

                <a href=''>
                    <InstagramOutlined />
                </a>

                </Col>
            </Row>
        </div>
    );

};