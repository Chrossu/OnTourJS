import React from 'react'
import styled from 'styled-components';

const Styles = styled.div`
    .carta {
        padding: 1rem;
        border: #ccc 1px dotted;
        margin: 0.7rem 0;
    }

    .bg-lighto {
        border: #ccc solid 1px;
    }

    .bg-lighto {
        background: #003699;
        color: #fff;
    }

    h3 {
        font-family: 'Roboto', sans-serif;
    }

    .text-primario {
        color: #003699!important:
    }
}
`;

const ContractItem = ({ contract }) => {
const { id, name, currentAmount, totalAmount } = contract;

    return (
        <Styles>
            <div className="carta bg-lighto">
                <h3 className="text-primario text-left">
                    {name}
                </h3>
            </div>
        </Styles>
    )
}

export default ContractItem
