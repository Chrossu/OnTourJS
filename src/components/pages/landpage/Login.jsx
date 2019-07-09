import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { Layout } from '../../bootstrap/Layout';
import { } from 'react-router-dom';
import { NavigationBar } from '../../landpage/Navigation';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <React.Fragment>
        <NavigationBar />
        <Layout>
            <h1 className="display-3 mb-5 text-center" style={{ paddingTop: "100px" }}>Inicio de sesión</h1>
            <Form>
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
                <Link to="/users"><Button variant="primary" type="submit">Ingresar</Button></Link>
            </Form>
        </Layout>
        </React.Fragment>
    )
}

export default Login
