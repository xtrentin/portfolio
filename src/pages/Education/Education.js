import React from 'react'
import {Container, Row, Col} from "react-bootstrap";
import DynamicTyping from "../../components/DynamicTyping";
import About from "../../components/About";
import Timeline from "../../components/Timeline/Timeline";
import educationConfig from "../../assets/configs/educationConfig";

import "../Home/Home.css"

const Education = () => {
    return (
        <section>
            <Container fluid className="home-content" id="education">
                <Row>
                    <Col className="home-header">
                        <div>
                            {educationConfig.greeting}
                        </div>
                        <div style={{textAlign: "center"}}>
                            <DynamicTyping titles={educationConfig.titles}/>
                        </div>
                        <div>
                            <About about={educationConfig.about}/>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="resume-content" id="resume">
                <div className="col-md-8 mx-auto">
                    <Timeline items={educationConfig.workTimeline}/>
                </div>
            </Container>
        </section>)

}

export default Education
