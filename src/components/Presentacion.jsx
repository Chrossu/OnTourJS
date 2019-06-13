import React from 'react';
import styled from 'styled-components';
import { Jumbotron, Card, Button, Row, Col } from 'react-bootstrap';
import rioJaneiro from '../assets/riojaneiro.jpg';
import entretencion from '../assets/entretencion.jpg'

const Styles = styled.div`
//  div {
//     padding: 10px 37px;
//  }
  
  h1 {
    color: #e5e5e5;
    margin: 0px 0px 50px 0px;
  }
  
  p {
      color: #efefef;
  }

  .jumbo {
      margin: 0px 0px 40px 0px;
  }

  .texto-card {
      color: black;
  }
`;

export const Presentacion = () => (
    <Styles>
        <Jumbotron className="text-center bg-dark jumbo">
            <h1>Líderes en paquetes turísticos en Chile</h1>
            <p className="lead">Llevamos más de 20 años dedicandonos a ofrecer paquetes turísticos tanto internacionales como nacionales, ofreciendo los mejores precios y servicios dentro del mercado. Para nuestra agencia, la seguridad es lo primero: es por esto que contamos con una serie de medidas y precauciones para la tranquilidad de nuestros usuarios, logrando así la tranquilidad de nuestros usuarios al disfrutar de sus viajes.</p>
            <Row>
                <Col xs={12} sm={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={rioJaneiro} />
                        <Card.Body>
                            <Card.Title>Viajes</Card.Title>
                            <Card.Text className="texto-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aliquid quisquam repellendus minima debitis expedita.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={entretencion} />
                        <Card.Body>
                            <Card.Title>Aventuras</Card.Title>
                            <Card.Text className="texto-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aliquid quisquam repellendus minima debitis expedita.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={rioJaneiro} />
                        <Card.Body>
                            <Card.Title>Viajes</Card.Title>
                            <Card.Text className="texto-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aliquid quisquam repellendus minima debitis expedita.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Jumbotron>
    </Styles>
)