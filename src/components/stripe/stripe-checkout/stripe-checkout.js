import React, { useMemo } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { fetchFromApi } from '../../../helpers/helpers';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../helpers/functions';
import { useUserAuth } from '../../../context/UserAuthContextProvider';
import { Button } from 'react-bootstrap';


export const StripeCheckout = () => {
    const stripe = useStripe();
    const { user } = useUserAuth();
    const { newsId } = useParams();
    const product = useMemo(() => getProductById(newsId), [newsId]);

    const { price: priceNews } = product;

    const data1 = [
        {
            quantity: 1,
            price: 29,
            title: 'Plan Estándar',
            description: 'Contenidos exclusivos',
            imagesURL: 'https://cdn.profesionalhosting.com/img/hosting/importacion-de-productos.png'
        },
    ]
    const data2 = [
        {
            quantity: 1,
            price: 59,
            title: 'Plan Premium',
            description: 'Acceso por diferentes dispositivos',
            imagesURL: 'https://cdn.profesionalhosting.com/img/hosting/importacion-de-productos.png'
        }
    ]

    const handleGuestCheckout = async (e) => {
        e.preventDefault();
        if (priceNews === "29") {
            const line_items = data1.map(item => {
                return {
                    quantity: item.quantity,
                    price_data: {
                        currency: 'usd',
                        unit_amount: item.price * 100, // amount is in cents
                        product_data: {
                            name: item.title,
                            description: item.description,
                            images: [item.imagesURL],
                        }
                    }
                }
            });

            const response = await fetchFromApi('create-checkout-session', {
                body: {
                    line_items,
                    customer_email: user.email
                }
            })

            const { sessionId } = response;
            const { error } = await stripe.redirectToCheckout({
                sessionId
            });

            if (error) {
                console.log(error)
            }
        }

        if (priceNews === "59") {
            const line_items = data2.map(item => {
                return {
                    quantity: item.quantity,
                    price_data: {
                        currency: 'usd',
                        unit_amount: item.price * 100, // amount is in cents
                        product_data: {
                            name: item.title,
                            description: item.description,
                            images: [item.imagesURL],
                        }
                    }
                }
            });
            const response = await fetchFromApi('create-checkout-session', {
                body: {
                    line_items,
                    customer_email: user.email
                }
            })
            const { sessionId } = response;
            const { error } = await stripe.redirectToCheckout({
                sessionId
            });
            if (error) {
                console.log(error)
            }
        }
    }

    return (
        <form className="d-flex flex-column p-4 text-center justify-content-center" onSubmit={handleGuestCheckout}>
            <div className="d-flex  flex-column">
                <h4>{`Amount to pay: $ ${priceNews},00`}</h4>
                <input
                    type="hidden"
                    value={priceNews}
                />
                <label>{user.email}</label>
                <input
                    type="hidden"
                    value={user.email}
                />
            </div>
            <div className='submit-btn mt-4'>
                <Button type='submit' variant="danger" className='w-100'>
                    Checkout
                </Button>
            </div>
        </form>
    )
}
