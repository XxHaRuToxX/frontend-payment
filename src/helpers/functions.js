import { products } from './data';

export const getProductById = ( id ) => {

    return products.find( p => p.id === id );

}