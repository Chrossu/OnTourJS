import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import NavbarExecutive from '../../components/userTipes/executive/NavbarExecutive';
import { Layout } from '../../components/bootstrap/Layout';

const ExecutiveAddContract = () => {
    const [contract, setContract] = useState({
        user: '',
        name: '',
        description: '',
        totalAmount: ''
    });

    const { user, name, description, totalAmount,  } = contract;
    return (
        <div>
            <NavbarExecutive />
            <Layout>
                <h1 className="lead display-4 text-center pb-4">Registro de contrato</h1>
                <Form>
                    
                    //--------- ID user
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>ID usuario</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese el ID de usuario" name='name' value={user} />
                    </Form.Group>

                    //--------- Travel destination
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Lugar de destino</Form.Label>
                        <Form.Control as="select">
                            <option>Cancún, México</option>
                            <option>Bariloche, Argentina</option>
                            <option>Torres del Paine, Chile</option>
                            <option>Bali, Indonesia</option>
                            <option>Reine, Noruega</option>
                            <option>Tokyo, Japón</option>
                        </Form.Control>
                    </Form.Group>

                    //--------- Travel description
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripción de modalidad de viaje</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>

                    //--------- Total Amount of travel
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Valor total del paquete</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese solo números" />
                    </Form.Group>

                    //--------- Insurance checker
                    {['checkbox'].map(type => (
                        <Form.Check 
                        type={type}
                        id={`default-${type}`}
                        label='¿Agregar seguro al contrato?'
                        className="mb-4"
                      />
                    ))}

                    //--------- Buttons
                    <Button className="mr-3" variant="info">Ingresar contrato</Button>
                    <Button variant="secondary">Limpiar campos</Button>
                </Form>
            </Layout>

        </div>
    )
}

export default ExecutiveAddContract
