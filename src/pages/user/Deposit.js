import React, { useContext } from 'react';
import { Row, Button, Col, Form } from 'react-bootstrap';
import styled from 'styled-components'
import { Layout } from '../../components/bootstrap/Layout';
import NavbarUser from '../../components/userTipes/user/NavbarUser';
import ContractItem3 from '../../components/userTipes/user/contracts/ContractItem3';
import ContractContext from '../../context/contract/contractContext';

const Styles = styled.div`
    
    h1 {
        color: rgb(80, 80, 100);
        margin-bottom: 10px;
    }

    .container {
        max-width: 1550px;
    }

    .centro {
        margin: auto;
        width: 70%;
        border: 1px solid gray;
        border-radius: 10px;
        padding: 10px;
        margin-top: 30px;
    }

      .bg-lighto {
        border: #ccc solid 1px;
        background: white;
    }  

    .bordecito {
        border: 2px solid gray;
        border-radius: 10px;
        padding: 20px;
    }

    .container {
        max-width: 850px;
    }

    .p {
        display: inline;
        margin-right: 10px;
    }

    .diswidth {
        display: inline;
        width: auto;
    }

    .centro2 {
        margin: auto;
        width: 80%;
        padding: 10px;
    }

    .color-verde {
        color: rgb(36, 151, 88);
    }

    .color-azul {
        color: #1988ff;
    }
`;

const Deposit = () => {
    const contractContext = useContext(ContractContext);
    const { contracts } = contractContext;
    return (
        <React.Fragment>
            <NavbarUser />
            <Styles>
                <div>
                    <h1 className="display-4 lead text-center">Depositar en fondo común</h1>
                    <p className="lead text-center">Seleccione el contrato en el cual desea depositar.</p>
                </div>
                <Layout>
                    <div className="divm bg-lighto bordecito">
                        <Form>
                            <Row>
                                <Col>
                                    <p className="p"><i className="fas fa-key mr-3" /><strong>ID Contrato: </strong></p><Form.Control className="diswidth" plaintext readOnly defaultValue="No seleccionado" />
                                </Col>
                                <Col>
                                    <p className="p"><i className="fas fa-umbrella-beach mr-3" /><strong>Destino: </strong></p><Form.Control className="diswidth mb-4" plaintext readOnly defaultValue="No seleccionado" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="p"><i style={{ marginRight: "10px" }} className="fas fa-money-bill color-verde" /><strong>Monto actual: </strong></p><Form.Control className="diswidth" plaintext readOnly defaultValue="0" />
                                </Col>
                                <Col>
                                    <p className="p"><i style={{ marginRight: "23px" }} className="fas fa-crosshairs color-azul" /><strong>Monto total: </strong></p><Form.Control className="diswidth mb-4" plaintext readOnly defaultValue="0" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control type="number" placeholder="Monto a depositar" />
                                </Col>
                                <Col>
                                    <Button className="centro2" variant="outline-success">Depositar</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <h1 className="text-center mt-3">Lista de contratos</h1>
                    {/* Start of contracts list */}
                    <div className="centro mb-5">
                        {contracts.map(contract => <ContractItem3 key={contract.id} contract={contract} />)}
                    </div>
                </Layout>
            </Styles>
        </React.Fragment>
    )
}

export default Deposit
