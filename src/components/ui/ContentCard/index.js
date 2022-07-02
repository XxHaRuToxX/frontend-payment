import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './contentCard.css';

export const ContentCard = ({ changeContent, product }) => {

    return (
        <Card className="ms-5 mt-5" style={{ width: '20rem' }}>
            <Card.Header className="p-3 d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <span className="price_soles me-3">S/.</span>
                    <h2 className="price_content">{product.price}</h2>
                    <span className="price_month ms-3"> /AL MES</span>
                </div>
                <strong className="text-center">{product.name}</strong>
            </Card.Header>
            <Card.Body>
                <ul className="list_icon">
                    {
                        product.description && product.description.map(desc => (
                            <div key={desc.id}>
                                <li>{desc.desc1}</li>
                                <li>{desc.desc2}</li>
                                <li>{desc.desc3}</li>
                                <li>{desc.desc4}</li>
                            </div>
                        ))
                    }
                </ul>
            </Card.Body>
            <Link to={`/checkout/${product.id}`}>
                <Button className="w-100 rounded-0 card_button">Subscribe</Button>
            </Link>
        </Card>
    )
}
