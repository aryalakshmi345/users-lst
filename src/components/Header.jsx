import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <div>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>User Data Display</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header