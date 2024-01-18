import React from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 54}}>
        <Card style={{width: 600}} className='p-5'>
            <h2 className='m-auto'>{isLogin ? 'Авторизація' : 'Реестрація'}</h2>
              <Form className='d-flex flex-column'>
                  <Form.Control className='mt-3'
                      placeholder='Введіть e-mail'
                  />
                  <Form.Control className='mt-3'
                        placeholder='Введіть пароль'
                  />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                      {isLogin ?
                        <div>
                            Ще нема акаунта? <NavLink to={REGISTRATION_ROUTE}>Зарееструйтесь!
                        </NavLink>
                        </div>
                        : 
                        <div>
                            Вже є акаунт? <NavLink to={LOGIN_ROUTE}>Заходь!</NavLink>
                        </div>
                        }
                      <Button className='mt-3  align-self-end' style={{width: 150}}
                      variant={'outline-success'}>{isLogin ? 'Вхід' : 'Реєстрація'}</Button>
                      </Row>
              </Form>
        </Card>
    </Container>
      
  )
};

export default Auth
