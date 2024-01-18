import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import ratingImg from '../assets/ratingImg.png'

const DevicePage = () => {
  const device = {
    id: 13,
    name: "14 pro max",
    price: 40000,
    rating: 0,
    img: "3ff90cdc-d9ed-4047-8fb8-a41e67757437.jpg",
    createdAt: "2024-01-11T16:53:48.539Z",
    updatedAt: "2024-01-11T16:53:48.539Z",
    typeId: 3,
    brandId: 2,
  }
  const description = [
    { id: 1, title: "Об'єм пам'яті", description: "256 ГБ" },
    { id: 2, title: "Екран", description: "6.7 дюймів Super Retina XDR" },
    { id: 3, title: "Процесор", description: "A16 Bionic з Neural Engine" },
    { id: 4, title: "Камера", description: "Три потрійні камери 12 Мп" },
    { id: 5, title: "Батарея", description: "Вбудована літій-полімерна батарея" },
    { id: 6, title: "Face ID", description: "Так, з підтримкою Face ID" },
    { id: 7, title: "Операційна система", description: "iOS 16" },
    { id: 8, title: "Вага", description: "190 г" },
    { id: 9, title: "Розміри", description: "160.8 x 78.1 x 7.4 мм" },
    { id: 10, title: "Водонепроникність", description: "IP68" },
    { id: 11, title: "Звук", description: "Стрео-динаміки з підтримкою Dolby Atmos" }
  ];
  return (
        <Container className='mt-3'>
          <Row>
            <Col md={4}>
              <Image width={300} height={300} src={device.img || 'no-image.png' }/>
            </Col>
            <Col md={4}>
              <Row className="d-flex flex-column align-items-center">
                <h2>{device.name}</h2>
                {/* Додаткова інформація */}
                {/* <div>Артикул: {device.id}</div>
                <div>Виробник: {device.brandId}</div>
                <div>Вид: {device.typeId}</div> */}
                {/* Рейтинг */}
                <div className=" ml-2 d-flex align-items-center justify-content-center"
                style={{background: `url(${ratingImg}) no-repeat center center`, width: 160, height: 160, backgroundSize: 'cover', fontSize: 32}}>
                  {device.rating }
                </div>
                <div>{device.price}</div>
              </Row>
            </Col>
            <Col md={4}>
              <Card className="d-flex flex-column align-items-center justify-content-around"
              style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}>
                <h3>{device.price} грн.</h3>
                <Button variant={"outline-dark"}>Добавити в корзину</Button>
              </Card>
            </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
              <h1>Характеристики</h1>
              {description.map((info, index) => (
                <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                  {info.title}: {info.description}
                </Row>
              ))}
            </Row>
        </Container>
  )
}

export default DevicePage
