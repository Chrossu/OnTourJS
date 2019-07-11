import React, { useContext, useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Layout } from '../../components/bootstrap/Layout';
import { NavigationBar } from '../../components/landpage/Navigation';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import Alerts from '../../components/alerts/Alerts';

const Styles = styled.div`
    .container {
        max-width: 700px;
    }
`;

const Login = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/user');
        }

        if (error === 'Credenciales incorrectas') {
            setAlert(error, 'danger');
            clearErrors();
        }
    }, [error, isAuthenticated, props.history])


    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (email === '' || password === '') {
            setAlert('Por favor, complete todos los campos', 'danger');
        } else {
            login({
                email,
                password
            });
        }
    };

    return (
        <React.Fragment>
            <NavigationBar />
            <Styles>
                <Layout>
                    <h1 className="display-3 mb-5 text-center" style={{ paddingTop: "100px" }}>Inicio de sesión</h1>
                    <Alerts />
                    <Form onSubmit={onSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <i className="fas fa-envelope-square size fa-lg pr-2" /><Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type='email' name='email' value={email} onChange={onChange} placeholder="Enter email" />
                            <Form.Text className="text-muted">Si tienes problemas al iniciar sesión, contáctate con nuestros ejecutivos.</Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <i className="fas fa-key fa-lg pr-2" /><Form.Label>Contraseña</Form.Label>
                            <Form.Control type='password' name='password' value={password} onChange={onChange} required placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label="Recordar mi usuario" />
                        </Form.Group>
                        <Button variant="primary" value="Login" type="submit">Ingresar</Button>
                    </Form>
                </Layout>
            </Styles>
        </React.Fragment>
    )
}

export default Login;
