import React from 'react';
import './timer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Timer = () => {
    return (
        <Container className="timer">
            <Row>
                <Col className="hh">00</Col>
                <Col className="sep">:</Col>
                <Col className="mm">30</Col>
                <Col className="sep">:</Col>
                <Col className="ss">00</Col>
            </Row>
            <Row className="label">
                <Col className="hh">Hour</Col>
                <Col className="sep">:</Col>
                <Col className="mm">Minute</Col>
                <Col className="sep">:</Col>
                <Col className="ss">Second</Col>
            </Row>
        </Container>

    );


}

export default Timer;