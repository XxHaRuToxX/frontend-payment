import React, { useState } from 'react';
import { ContentCard } from '../../components/ui/ContentCard';
import { useUserAuth } from '../../context/UserAuthContextProvider';
import { products } from '../../helpers/data';

import './news.css';

export const News = () => {

    
    const { user } = useUserAuth();


    return (
        <div className="d-flex p-4 text-center justify-content-center news_div">
            {
                products ?  products.map((p)=>(
                    <ContentCard product={p} key={p.id} />
                )): null
            }
        </div>
    )
}
