import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import NavbarExecutive from '../../components/userTipes/executive/NavbarExecutive';
import { Layout } from '../../components/bootstrap/Layout';
import ContractContext from '../../context/contract/contractContext';

const ExecutiveAddContract = () => {
    const contractContext = useContext(ContractContext);
    const [contract, setContract] = useState({
        user: '',
        name: '',
        description: '',
        totalAmount: '',
        insurance: false
    });

    const { user, description, totalAmount } = contract;

    const onChange = e => setContract({ ...contract, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        contractContext.addContract(contract);
        setContract({
            user: '',
            name: '',
            description: '',
            totalAmount: '',
            insurance: false
        })
    }
    
    return (
        <div>
            <NavbarExecutive />
            <Layout>
                <h1 className="lead display-4 text-center pb-4">Registro de contrato</h1>
                <Form onSubmit={onSubmit}>

                    {/* //--------- ID user */}
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>ID usuario</Form.Label>
                        <Form.Control type="text" required placeholder="Ingrese ID de usuario" name="user" value={user} onChange={onChange} />
                    </Form.Group>

                    {/* //--------- Travel destination */}
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Lugar de destino</Form.Label>
                        <Form.Control as="select" name="name" onChange={onChange}>
                            <option disabled selected value="Sin seleccionar">Seleccione un destino</option>
                            <option value="Cancún, México">Cancún, México</option>
                            <option value="Bariloche, Argentina">Bariloche, Argentina</option>
                            <option value="Torres del Paine, Chile">Torres del Paine, Chile</option>
                            <option value="Bali, Indonesia">Bali, Indonesia</option>
                            <option value="Reine, Noruega">Reine, Noruega</option>
                            <option value="Tokyo, Japón">Tokyo, Japón</option>
                        </Form.Control>
                    </Form.Group>

                    {/* //--------- Travel description */}
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripción de modalidad de viaje</Form.Label>
                        <Form.Control as="textarea" required rows="3" type="text" placeholder="Descripción del paquete" name="description" value={description} onChange={onChange} />
                    </Form.Group>

                    {/* //--------- Total amount of travel */}
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Valor total del paquete</Form.Label>
                        <Form.Control type="number" required placeholder="Monto del contrato (ingrese solo números)" name="totalAmount" value={totalAmount} onChange={onChange} />
                    </Form.Group>

                    {/* //--------- Insurance checker */}
                    <Form.Check
                        className="mb-4"
                        type="checkbox"
                        value={true}
                        name="insurance"
                        onChange={onChange}
                        label="Contrato sin seguro"                        
                    />                    

                    {/* //--------- Buttons */}
                    <Button className="mr-3" variant="info" type="submit">Ingresar contrato</Button>
                    <Button variant="secondary">Limpiar campos</Button>
                </Form>
            </Layout>

        </div>
    )
}

export default ExecutiveAddContract
