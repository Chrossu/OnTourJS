import React from 'react';
import { Card } from 'react-bootstrap';

const Carta = (props) => {
    return (<Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.imagen} />
        <Card.Body>
            <Card.Title>{props.titulo}</Card.Title>
            <Card.Text className="texto-card">{props.descripcion}</Card.Text>
        </Card.Body>
    </Card>)
}

export default Carta;