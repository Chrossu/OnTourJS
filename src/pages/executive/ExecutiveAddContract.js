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

    const onChange = e => setContract({ ...contract, [e.target.name]: e.target.value });

    return (
        <div>
            <NavbarExecutive />
            <Layout>
                <h1 className="lead display-4 text-center pb-4">Registro de contrato</h1>
                <Form>

                    {/* //--------- ID user */}
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>ID usuario</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese ID de usuario" name="user" value={user} onChange={onChange} />
                    </Form.Group>

                    {/* //--------- Travel destination */}
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Lugar de destino</Form.Label>
                        <Form.Control as="select" onChange={onChange}>
                        <option disabled value="Sin seleccionar">Seleccione un destino</option>
                            <option name="name" value="Cancún, México">Cancún, México</option>
                            <option name="name" value="Bariloche, Argentina">Bariloche, Argentina</option>
                            <option name="name" value="Torres del Paine, Chile">Torres del Paine, Chile</option>
                            <option name="name" value="Bali, Indonesia">Bali, Indonesia</option>
                            <option name="name" value="Reine, Noruega">Reine, Noruega</option>
                            <option name="name" value="Tokyo, Japón">Tokyo, Japón</option>
                        </Form.Control>
                    </Form.Group>

                    {/* //--------- Travel description */}
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripción de modalidad de viaje</Form.Label>
                        <Form.Control as="textarea" rows="3" type="text" placeholder="Descripción del paquete" name="description" value={description} onChange={onChange}/>
                    </Form.Group>

                    {/* //--------- Total Amount of travel */}
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Valor total del paquete</Form.Label>
                        <Form.Control type="number" placeholder="Monto del contrato (ingrese solo números)" name="totalAmount" value={totalAmount} onChange={onChange} />
                    </Form.Group>

                    {/* //--------- Insurance checker */}
                    {['checkbox'].map(type => (
                        <Form.Check 
                        className="mb-4"
                        type={type}
                        id={`default-${type}`}
                        label="¿Agregar seguro al contrato?"
                      />
                    ))}

                    {/* //--------- Buttons */}
                    <Button className="mr-3" variant="info" type="submit">Ingresar contrato</Button>
                    <Button variant="secondary">Limpiar campos</Button>
                </Form>
            </Layout>

        </div>
    )
}

export default ExecutiveAddContract
