import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Inicio from './pages/Home'
import Partituras from './pages/Partituras'
import Maestro from './pages/Maestro'
import Contato from './pages/Contato'


const Routers = () => {
    return (
        <>
                <Container className='md-3'>
                    <Routes>
                        <Route path="/home" element={<Inicio />} />
                        <Route path="/maestro" element={<Maestro />} />
                        <Route path="/partituras" element={<Partituras />} />             
                        <Route path="/contato" element={<Contato />} /> 
                    </Routes>
                </Container>            
        </>
    )
}

export default Routers
