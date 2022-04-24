import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Home from "./Home";
import Menu from "./Menu";

const Demo = () =>{
    return (
        <div className="bg-info">
            <h1 className=" text-center py-3 my-2 ">WELCOME TO E-TRAIN TICKET BOOKING SYSTEM</h1>
            <Row>
                <Col md={3}><Container><Menu /></Container>  </Col>
                <Col md={9}><Home /></Col>

            </Row>
        </div>
    )
}
export default Demo ;