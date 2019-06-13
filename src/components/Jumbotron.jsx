import React from 'react';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';
import campImage from '../assets/portada.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${campImage}) no-repeat center;
    background-size: cover;
    color: #efefef;
    height: 512px;
    position: relative;
    z-index: -2;
  }

  .overlay {
      background-color: #000;
      opacity: 0.1;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
  }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
        </Jumbo>
    </Styles>
)