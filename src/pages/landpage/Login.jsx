import React from 'react'
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Layout } from '../../components/bootstrap/Layout';
import { NavigationBar } from '../../components/landpage/Navigation';
import { Link } from 'react-router-dom';

const Styles = styled.div`
    .container {
        max-width: 700px;
    }
`;

const onSubmit = e => {
    e.preventDefault();
    console.log("Login submit");
}

const Login = () => {
    return (
        <React.Fragment>
            <NavigationBar />
            <Styles>
                <Layout>
                    <h1 className="display-3 mb-5 text-center" style={{ paddingTop: "100px" }}>Inicio de sesión</h1>
                    <Form onSubmit={onSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <i className="fas fa-envelope-square size fa-lg pr-2" /><Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">Si tienes problemas al iniciar sesión, contáctate con nuestros ejecutivos.</Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <i class="fas fa-key fa-lg pr-2" /><Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label="Recordar mi usuario" />
                        </Form.Group>
                        <Link to="/user"><Button variant="primary" value="Login" type="submit">Ingresar</Button></Link>
                    </Form>
                </Layout>
            </Styles>
        </React.Fragment>
    )
}

export default Login;
