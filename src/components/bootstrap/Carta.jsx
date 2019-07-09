import React from 'react';
import { Card } from 'react-bootstrap';

const Carta = (props) => {
    return (<Card className="mb-3 noafi" style={{ width: '18rem'}}>
        <Card.Img roundedCircle variant="top" src={props.imagen} className="noafi"/>
        <Card.Body>
            <Card.Title>{props.titulo}</Card.Title>
            <Card.Text className="texto-card noafi">{props.descripcion}</Card.Text>
        </Card.Body>
    </Card>)
}

export default Carta;