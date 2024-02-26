import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Admin = () => {
  return (
        <Container>
          <Button variant={"outline-dark"} className="mt-2">
            Додати тип
          </Button>
          <Button variant={"outline-dark"} className="mt-2">
            Додати бренд
          </Button>
          <Button variant={"outline-dark"} className="mt-2">
            Додати модель
          </Button>
        </Container>

  )
}

export default Admin
