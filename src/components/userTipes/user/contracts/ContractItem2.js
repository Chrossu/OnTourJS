import React from 'react'
import styled from 'styled-components';
import { Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Styles = styled.div`
    .carta {
        padding: 1rem;
        border: #ccc 309px dotted;
        margin: 0.7rem 0;
        border-radius: 10px;
    }

    .bg-lighto {
        border: #ccc solid 1px;
        background: rgb(216, 216, 216);
        color: #fff;
    }

    h3 .azulito {
        color: rgb(241, 240, 240):
        font-family: 'Roboto', sans-serif;
    }

    .text-primario {
        color: var(--primary-color);
    }

    li {
        color: var(--dark-color);
        margin-bottom: 12px;
    }

    button {
        font-weight: 600;
    }

    .btn-outline-success {
        margin-right: 10px;
    }

    .btn-outline-primary {
        margin-right: 10px;
        min-width: 96.31px;
    }

    .color-verde {
        color: rgb(36, 151, 88);
    }

    .color-azul {
        color: #1988ff;
    }

    strong {
        color: #007bff;
    }
    
    .centro2 {
        margin: auto;
        width: 50%;
        padding: 10px;
      }
}
`;

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const ContractItem = ({ contract }) => {
    const { name, description, insurance, currentAmount, totalAmount, date } = contract;

    return (
        <Styles>
            <div className="carta bg-lighto" style={{ marginBottom: "30px" }}>
                <div>
                    <h3 className="text-primario text-center" style={{ marginBottom: "20px" }}>
                        {name}
                    </h3>
                    <ul>
                        <li><i className="fas fa-money-bill mr-3 color-verde"></i>Monto <strong className="color-verde">total</strong> paquete: ${numberWithCommas(totalAmount)}</li>
                        <li><i className="fas fa-crosshairs color-azul" style={{ marginRight: "20px", marginTop: "8px" }}/>Monto <strong>actual</strong> paquete: ${numberWithCommas(currentAmount)}</li>
                        <li><i className="fas fa-umbrella-beach mr-3" />Descripción: {description}</li>
                        <li><i className="fas fa-car-crash mr-3"></i>¿Asegurado? {insurance === true ? <Badge variant="success">Asegurado</Badge> : <Badge variant="danger">No asegurado</Badge>}</li>
                        <li><i className="fas fa-calendar-day mr-4" />Fecha de creación: {date}</li>
                    </ul>
                    <Link to='/user/depositar'><Button className="centro2" style={{ marginLeft: "170px" }} variant="outline-success">Depositar</Button></Link>
                </div>
            </div>
        </Styles>
    )
}

export default ContractItem
