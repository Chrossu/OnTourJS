import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import NavbarExecutive from '../../components/userTipes/executive/NavbarExecutive';
import { Layout } from '../../components/bootstrap/Layout';
import styled from 'styled-components';

const Styles = styled.div`
    .container {
        max-width: 600px;
    }
`

const ExecutiveRegister = () => {
    
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();
        console.log('Register submit');
    }
    
    return (
        <Styles>
            <div>
            <NavbarExecutive />
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
