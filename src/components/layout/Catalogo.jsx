import React from 'react';
import styled from 'styled-components';
import { Col, Row, Image, Jumbotron } from 'react-bootstrap';
import { Layout } from '../bstrap/Layout'
import tokyo from '../../assets/destinos/tokyo.jpg';
import bariloche from '../../assets/destinos/bariloche.jpg';
import noruega from '../../assets/destinos/noruega.jpg';
import bali from '../../assets/destinos/bali.jpeg';
import torresdelpaine from '../../assets/destinos/torresdelpaine.jpg';
import cancun from '../../assets/destinos/cancun.jpg'

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

  .jumbotron {
    padding: 1rem 2rem;
    margin-bottom: 1rem;
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
              <p>Reine es uno de los pueblos más hermosos de Noruega. Deslumbrate con sus hermosas luces de atardecer.</p>
            </div>
          </Col>
          <Col xs="12" sm="4">
            <div className="div-principal">
              <Image src={tokyo} className="imagen" />
              <h3>Tokyo, Japón</h3>
              <p>Tokyo es la capital de la tecnología. Ven a recorrer todos los rincones que esta maravillosa ciudad es capaz de ofrecer.</p>
            </div>
          </Col>
        </Row>
      </Layout>
    </Jumbotron>
  </Styles>
)