import React from 'react'
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const Styles = styled.div`
    .carta {
        padding: 1rem;
        border: #ccc 309px dotted;
        margin: 0.7rem 0;
        border-radius: 10px;
    }

    .bg-lighto {
        border: #ccc solid 1px;
    }

    .bg-lighto {
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
        color: var(--primary-color);
    }

    strong {
        color: var(--primary-color);
    }
}
`;

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const ContractItem = ({ contract }) => {
const { name, currentAmount, totalAmount } = contract;

    return (
        <Styles>
            <div className="carta bg-lighto">
                <div>
                <h3 className="text-primario text-center" style={{ marginBottom: "20px" }}>
                    {name}
                </h3>
                <ul>
                    <li><i class="fas fa-money-bill mr-2 color-verde"></i>Monto total paquete: ${numberWithCommas(totalAmount)}</li>
                    <li><i class="fas fa-crosshairs color-azul" style={{ marginRight: "13px", marginTop: "8px" }}></i>Monto <strong>actual</strong> paquete: ${numberWithCommas(currentAmount)}</li>
                </ul>
                <Button variant="outline-success">Depositar</Button>
                <Button variant="outline-primary">Revisar</Button>
                </div>
            </div>
        </Styles>
    )
}

export default ContractItem
