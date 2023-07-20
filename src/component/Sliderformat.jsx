import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import "./Sliderformatcss.css";


export default function Sliderformat({title,desc,cover}) {
  return (
    <Container className='box' >
        <Row>
          <Col md={5}>
            <h1>{title}</h1>
            <p>{desc}</p>
            <button className='btn-primary'>Shop now</button>
          </Col>
          <Col md={6}>
            <img src={cover} alt="#" />
          </Col>
        </Row>

    </Container>
  )
}
