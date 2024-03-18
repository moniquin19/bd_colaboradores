import { useState } from 'react'

import { Container, Row, Col } from 'react-bootstrap';

import './App.css'
import Buscador from './components/Buscador'
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Alert from './components/Alert';

import { BaseColaboradores } from './data/baseColaboradores';

const App = () => {
  const [color, setColor] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [colaboradoresFiltro, setColaboradoresFiltro] = useState([])

  const [colaboradores, setColaboradores] = useState(BaseColaboradores)

  const nuevoColaborador = (datos) => {
    setColaboradores = ([...colaboradores, datos])
  }

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <div>
              <h1>Listado de colaboradores</h1>
          </div>
        </Col>
        <Col xs={4}>
          <Buscador colaboradores={colaboradores} setColaboradoresFiltro={setColaboradoresFiltro}/>
        </Col>
        <Col xs={8}></Col>
        <Col xs={8}>
          <Listado colaboradores= {colaboradoresFiltro.length > 0 ? colaboradoresFiltro : colaboradores }/>
        </Col>
        <Col xs={4}>
        <Formulario nuevoColaborador={nuevoColaborador} mensaje={mensaje} setMensaje={setMensaje} color={color} setColor={setColor} /> {mensaje ? <Alert mensaje={mensaje} color={color} /> : null }
        </Col>
      </Row>
    </Container>
  )
}

export default App
