/* eslint-disable react/prop-types */
import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import star from "../assets/star.png"
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    console.log(navigate);
    return ( 
        <Col md={3} className={"mt-3"} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card className="p-2 mt-3 " style={{width:150, cursor: 'pointer',}} border={'light-grey'}>
                <Image alt="Image of device" width={150} height={150} src={device.img}/>
                <div className="text-black-50 mt-2 d-flex justify-content-between align-items-center">
                    <div>BRAND</div>
                        <div className="d-flex align-items-center">
                            <div>{device.rating}</div>
                                <Image  src={star} width={18} height={18} />
                        </div>
                </div>
                    <div>{device.name}</div>
            </Card>
        </Col>
        );
}
 
export default DeviceItem ;