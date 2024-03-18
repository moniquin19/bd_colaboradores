import { useState } from 'react';
import { Form, Button } from "react-bootstrap";


const Formulario = ({ setMensaje, setColor, nuevoColaborador }) => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [edad, setEdad] = useState("");
    const [cargo, setCargo] = useState("");
    const [telefono, setTelefono] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre && email && edad && cargo && telefono) {
            nuevoColaborador({id: Date.now().toString(), nombre, correo: email, edad, cargo, telefono})
            setMensaje("Registro exitoso");
            setColor("success");
            setNombre("");
            setEmail("");
            setEdad("");
            setCargo("");
            setTelefono("");
            
        } else {
            setMensaje("Completa todos los campos");
            setColor("danger");
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nombre">
                <Form.Control
                type="text"
                placeholder="Nombre del colaborador"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
                <Form.Control
                type="email"
                placeholder="Email del colaborador"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="edad">
                <Form.Control
                type="text"
                placeholder="Edad del colaborador"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="cargo">
                <Form.Control
                type="text"
                placeholder="Cargo del colaborador"
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="telefono">
                <Form.Control
                type="text"
                placeholder="Telefono del colaborador"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                />
            </Form.Group>
            <Button style={{ width: '100%' }} className='btn-color' type="submit">
                Agregar Colaborador
            </Button> 
        </Form>
    );
}

export default Formulario;