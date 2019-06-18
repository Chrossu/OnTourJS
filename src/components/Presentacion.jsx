import React from 'react';
import styled from 'styled-components';
import { Jumbotron, Row, Col } from 'react-bootstrap';
import rioJaneiro from '../assets/riojaneiro.jpg';
import entretencion from '../assets/entretencion.jpg'
import recuerdos from '../assets/recuerdos.jpg';
import { Layout } from './Layout';
import Carta from './bstrap/Carta';

const Styles = styled.div`  
  h1 {
    color: #e5e5e5;
    margin-bottom: 35px;
  }
  
  p {
      color: #efefef;
  }

  .jumbo {
      margin: 0px 0px 15px 0px;
      padding-bottom: 80px;
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
        <Jumbotron className="text-center back-presentacion jumbo pt-3">
            <Layout>
                <h1>Líderes en paquetes turísticos</h1>
                <p className="lead mb-4">Llevamos más de 20 años dedicandonos a ofrecer paquetes turísticos tanto internacionales como nacionales, ofreciendo así los mejores precios y servicios dentro del mercado. Para nuestra agencia, la seguridad es lo primero: es por esto que contamos con una serie de medidas y precauciones para la tranquilidad de nuestros usuarios, logrando así la tranquilidad de nuestros usuarios al disfrutar de sus viajes.</p>
                <Row>
                    <Col xs={12} sm={4}>
                        <Carta
                            imagen={rioJaneiro}
                            titulo='Viajes'
                            descripcion='Nuestros destinos abarcan los lugares más hermosos de nuestro planeta. ¡Entérate de nuestras mejores promociones disponibles antes que se agoten!'
                        />
                    </Col>
                    <Col xs={12} sm={4}>
                        <Carta
                            imagen={entretencion}
                            titulo='Aventuras'
                            descripcion='Nuestros paquetes turísticos cuentan con increíbles actividades para realizar en comunidad: desde paseos en Kayak hasta saltos en bungee.'
                        />
                    </Col>
                    <Col xs={12} sm={4}>
                        <Carta
                            imagen={recuerdos}
                            titulo='Recuerdos'
                            descripcion='Reforza los lazos con tus seres queridos en las diversas aventuras y actividades que ofrecemos para ti y tus amigos. ¿Qué esperas para viajar con nosotros?'
                        />
                    </Col>
                </Row>
            </Layout>
        </Jumbotron>
    </Styles>
)