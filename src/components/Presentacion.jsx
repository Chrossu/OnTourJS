import React from 'react';
import styled from 'styled-components';
import { Jumbotron, Card, Row, Col } from 'react-bootstrap';
import rioJaneiro from '../assets/riojaneiro.jpg';
import entretencion from '../assets/entretencion.jpg'
import recuerdos from '../assets/recuerdos.jpg';
import { Layout } from '../Layout';

const Styles = styled.div`  
  h1 {
    color: #e5e5e5;
    margin: 0px 0px 35px 0px;
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

  .card-img-top {
      max-height: 190px;
  }
`;

export const Presentacion = () => (
    <Styles>
        <Jumbotron className="text-center bg-dark jumbo pt-3">
            <Layout>
            <h1>Líderes en paquetes turísticos</h1>
            <p className="lead mb-4">Llevamos más de 20 años dedicandonos a ofrecer paquetes turísticos tanto internacionales como nacionales, ofreciendo así los mejores precios y servicios dentro del mercado. Para nuestra agencia, la seguridad es lo primero: es por esto que contamos con una serie de medidas y precauciones para la tranquilidad de nuestros usuarios, logrando así la tranquilidad de nuestros usuarios al disfrutar de sus viajes.</p>
            <Row>
                <Col xs={12} sm={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={rioJaneiro} />
                        <Card.Body>
                            <Card.Title>Viajes</Card.Title>
                            <Card.Text className="texto-card">Nuestros destinos abarcan los lugares más hermosos de nuestro planeta. ¡Entérate de nuestras mejores promociones disponibles antes que se agoten!</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={entretencion} />
                        <Card.Body>
                            <Card.Title>Aventuras</Card.Title>
                            <Card.Text className="texto-card">Nuestros paquetes turísticos cuentan con increíbles actividades para realizar en comunidad: desde paseos en Kayak a salto en bungee.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={recuerdos} />
                        <Card.Body>
                            <Card.Title>Recuerdos</Card.Title>
                            <Card.Text className="texto-card">Reforza los lazos con tus seres queridos en las diversas aventuras y actividades que ofrecemos para ti y tus amigos. ¿Qué esperas para viajar con nosotros?</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Layout>
        </Jumbotron>
    </Styles>
)