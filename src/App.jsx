import { useState } from 'react'

import { Container, Row, Col } from 'react-bootstrap';

import './App.css'
import Buscador from './components/Buscador'
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Alert from './components/Alert';

import { BaseColaboradores } from './data/baseColaboradores';

const App = (props) => {
  const { mensaje, setMensaje, color, setColor } = props
  const [colaboradoresFiltro, setColaboradoresFiltro]= useState([])

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <div>
              <h1>Listado de colaboradores</h1>
          </div>
          </Col>
          <Col xs={6}>
          <Buscador colaboradores={BaseColaboradores} setColaboradoresFiltro={setColaboradoresFiltro}/>
        </Col>
        <Col xs={8}>
          <Listado colaboradores= {colaboradoresFiltro.length > 0 ? colaboradoresFiltro : BaseColaboradores }/>
        </Col>
        <Col xs={4}>
        <Formulario mensaje={mensaje} setMensaje={setMensaje} color={color} setColor={setColor} /> {mensaje ? <Alert {...props} /> : null }
        </Col>
      </Row>
    </Container>
  )
}

export default App
