import React, { useState, useContext, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import NavbarExecutive from '../../components/userTipes/executive/NavbarExecutive';
import { Layout } from '../../components/bootstrap/Layout';
import styled from 'styled-components';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import Alerts from '../../components/alerts/Alerts';

const Styles = styled.div`
    .container {
        max-width: 600px;
    }
`

const ExecutiveRegister = (props) => {
    const alertContext = useContext(AlertContext)
    const authContext = useContext(AuthContext)

    const { setAlert } = alertContext;
    const { register, error, clearErrors, isAuthenticated } = authContext;

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    
    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/user')
        }

        if (error === 'El usuario ya existe') {
            setAlert(error, 'danger');
            clearErrors();
        }
    }, [error])

    const { name, email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();
        register({
            name,
            email,
            password
        })
    }

    return (
        <Styles>
            <div>
                <NavbarExecutive />
                <Alerts />
                <Layout>
                    <h1 className="lead display-4 text-center pb-4">Nuevo usuario</h1>
                    <Form onSubmit={onSubmit}>

                        {/* //--------- Username */}
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre de usuario</Form.Label>
                            <Form.Control type="text" required placeholder="Ingrese nombre de usuario" name="name" value={name} onChange={onChange} />
                        </Form.Group>

                        {/* //--------- Email address */}
                        <Form.Group controlId="exampleForm.ControlInput2">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type="email" required placeholder="Ingrese correo electrónico" name="email" value={email} onChange={onChange} />
                        </Form.Group>

                        {/* //--------- Travel description */}
                        <Form.Group controlId="exampleForm.ControlInput3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" required minLength="6" placeholder="Ingrese contraseña" name="password" value={password} onChange={onChange} />
                        </Form.Group>


                        {/* //--------- Buttons */}
                        <Button className="mr-3" variant="info" type="submit">Ingresar contrato</Button>
                        <Button variant="secondary">Limpiar campos</Button>
                    </Form>
                </Layout>
            </div>
        </Styles>
    )
}

export default ExecutiveRegister
