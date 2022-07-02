import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './contentCard.css';

export const ContentCard = ({changeContent, product}) => {

    return (
        <Card className="ms-3" style={{ width: '25rem' }}>
            <Card.Header className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-row justify-content-center align-items-center">
                    {/* <span className="price_soles me-3">S/.</span><h2 className="price_content">{changeContent ? "29" : "59"}</h2><span className="price_month ms-3"> /AL MES</span> */}
                    <span className="price_soles me-3">S/.</span><h2 className="price_content">{product.price}</h2><span className="price_month ms-3"> /AL MES</span>
                </div>
                <strong className="text-center">{product.name}</strong>
            </Card.Header>
            <Card.Body>
                {/* <ul className="list_icon">
                    <li className="mt-3"><Card.Text className="ms-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolor ad! Repellendus? </Card.Text></li>
                    <li className="mt-3"><Card.Text className="ms-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, alias vitae? </Card.Text></li>
                    <li className="mt-3" style={{color:changeContent ? "#C7C7C7" : ""}}><Card.Text className="ms-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolor ad! Repellendus? </Card.Text></li>
                    <li className="mt-3" style={{color:changeContent ? "#C7C7C7" : ""}}><Card.Text className="ms-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, alias vitae? </Card.Text></li>
                </ul> */}
                <ul className="list_icon">
                    {
                        product.description && product.description.map(desc=>(
                            <div key={desc.id}>
                                <li>{desc.desc1}</li>
                                <li>{desc.desc2}</li>
                                <li>{desc.desc3}</li>
                                <li>{desc.desc4}</li>
                            </div>
                        ))
                    }
                </ul>
                {/* <ul className="list_icon">
                    {
                        products ?  products.map((p)=>(
                            <li key={p.id} >{p.description} {p.price.unit_amount/100}</li>
                        )): null
                    }
                </ul> */}
            </Card.Body>
            <Link to={`/checkout/${product.id}`}>
                <Button className="w-100 rounded-0 card_button">Suscribirme</Button>
            </Link>
        </Card>
    )
}
