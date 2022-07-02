import React from 'react';
// import '../../styles.css';
export const NewsArticle = ({ data }) => {
    return (
        
        <div className='caja'>
            <img src= {data.urlToImage} alt="" className='img'/>
            <h1 className='titulo' > {data.title} </h1>
            <p className='descripcion'> {data.description} </p>
            <span className='autor'> {data.author} </span>
            <span className='fechaPu'> {data.publishedAt} </span>
            <span className='nombre'> {data.source.name} </span>
        </div>
    )
}
