import React from 'react';

export const NewsArticle = ({ data }) => {
    return (
        <div className='caja'>
            <img src={data.urlToImage} alt="" className='img' />
            <div className='container-description'>
                <h1 className='titulo' > {data.title} </h1>
                <p className='descripcion'> {data.description} </p>
                <span className='autor'> {data.author} </span>
                <br />
                <span className='fechaPu'> {data.publishedAt} </span>
                <br />
                <span className='nombre'> {data.source.name} </span>
            </div>
        </div>
    )
}
