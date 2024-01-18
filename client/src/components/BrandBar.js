import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { Card, Row } from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return ( 
        <Row className='d-flex align-items-center'>
            {device.brands.map(brand => 
                <Card 
                style={{cursor: 'pointer', width: "auto"}}
                key={brand.id}
                className='p-2'
                onClick={() => device.setSelectedBrand(brand)}
                border={brand.id === device.selectedBrand.id ? "danger" : "light-grey"}
                >
                    {brand.name}
                </Card>
                )}
            </Row>
     );
});
 
export default BrandBar;