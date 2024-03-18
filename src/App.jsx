import { useState } from 'react'

import { Container, Row, Col } from 'react-bootstrap';

import './App.css'
import Buscador from './components/Buscador'
import Listado from './components/Listado';
import Formulario from './components/Formulario';

import { BaseColaboradores } from './data/baseColaboradores';

const App = () => {

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <div>
              <h1>Listado de colaboradores</h1>
          </div>
          <Buscador />
        </Col>
        <Col xs={8}>
          <Listado colaboradores={BaseColaboradores} />
        </Col>
        <Col xs={4}>
          <Formulario />
        </Col>
      </Row>
    </Container>
  )
}

export default App
