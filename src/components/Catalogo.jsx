import React from 'react';
import styled from 'styled-components';
import { Col, Row, Image, Jumbotron } from 'react-bootstrap';
import { Layout } from './Layout';
import tokyo from '../assets/tokyo.jpg';
import bariloche from '../assets/bariloche.jpg';

const Styles = styled.div`  
  h2 {
    color: rgb(39, 39, 39);
    margin-bottom: 35px;
  }
  
  p {
      color: #efefef;
  }

  h3 {
    margin: 16px;
  }

  .imagen {
    width: 180px;
    height: 160px;
    border-radius: 50%;
  }

  div {
    text-align: center;
  }
`;

export const Catalogo = () => (
  <Styles>
    <Jumbotron className="back-catalogo">
      <Layout>
        <h2 className="text-center">Catálogo de Tours</h2>
        <Row>
          <Col xs="12" sm="3">
            <div>
              <Image src={tokyo} className="imagen" />
              <h3>Tokyo, Japón</h3>
            </div>
          </Col>
          <Col xs="12" sm="3">
            <div>
              <Image src={bariloche} className="imagen" />
              <h3>Bariloche, Argentina</h3>
            </div>
          </Col>
        </Row>
      </Layout>

    </Jumbotron>
  </Styles>
)