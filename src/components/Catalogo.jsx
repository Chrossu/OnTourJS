import React from 'react';
import styled from 'styled-components';
import { Col, Row, Image, Jumbotron } from 'react-bootstrap';
import { Layout } from './Layout';
import tokyo from '../assets/tokyo.jpg';
import bariloche from '../assets/bariloche.jpg';
import noruega from '../assets/noruega.jpg';
import bali from '../assets/bali.jpeg';
import torresdelpaine from '../assets/torresdelpaine.jpg';
import cancun from '../assets/cancun.jpg';

const Styles = styled.div`  
  h2 {
    color: rgb(223, 223, 223);
    margin-bottom: 35px;
  }
  
  p {
      color: #efefef;
  }

  h3 {
    color: rgb(223, 223, 223);
    margin: 16px;
  }

  .imagen {
    width: 170px;
    height: 160px;
    border-radius: 50%;
  }

  .div-principal {
    background-color: rgba(0,0,0,0.75);
    text-align: center;
    margin-bottom: 70px;
    border-radius: 5%;
    padding: 18px;
  }

  .container {  
    // box-shadow 0px 0px 12px;
  }

  .jumbotron {
    padding: 1rem 2rem;
  }
`;

export const Catalogo = () => (
  <Styles>
    <Jumbotron className="back-catalogo">
      <Layout>
        <h2 className="text-center"><strong>Catálogo de Tours</strong></h2>
        <Row>
          <Col xs="12" sm="4">
            <div className="div-principal">
              <Image src={cancun} className="imagen" />
              <h3>Cancún, México</h3>
              <p>Turismo en Cancún es una experiencia para maravillarse con unas de las playas más hermosas del Caribe Mexicano.</p>
            </div>
          </Col>
          <Col xs="12" sm="4">
            <div className="div-principal">
              <Image src={bariloche} className="imagen" />
              <h3>Bariloche, Argentina</h3>
              <p>Bariloche es mucho más que una ciudad, son vacaciones en la playa de un lago cristalino y preciosas noches al aire libre.</p>
            </div>
          </Col>
          <Col xs="12" sm="4">
            <div className="div-principal">
              <Image src={torresdelpaine} className="imagen" />
              <h3>Torres del Paine, Chile</h3>
              <p>Conoce el parque nacional Torres del Paine, considerada la octava maravilla del mundo ubicada en la ciudad de Puerto Natales.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="4">
            <div className="div-principal">
              <Image src={bali} className="imagen" />
              <h3>Bali, Indonesia</h3>
              <p>Bali es una postal viviente; un paraíso de Indonesia que parece ser de fantasía. No sigas esperando para venir a conocerlo.</p>
            </div>
          </Col>
          <Col xs="12" sm="4">
            <div className="div-principal">
              <Image src={noruega} className="imagen" />
              <h3>Reine, Noruega</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste eaque voluptas corporis, qui optio facilis.</p>
            </div>
          </Col>
          <Col xs="12" sm="4">
            <div className="div-principal">
              <Image src={tokyo} className="imagen" />
              <h3>Tokyo, Japón</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste eaque voluptas corporis, qui optio facilis.</p>
            </div>
          </Col>
        </Row>
      </Layout>
    </Jumbotron>
  </Styles>
)