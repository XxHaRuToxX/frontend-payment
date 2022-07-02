import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNewsApi } from '../../../context/NewsContextProvider';
import './slider.css';

export const Slider = () => {
    const { slideFiveNews } = useNewsApi();;

    return (
        <Carousel showArrows={true} autoPlay infiniteLoop className="main-slider">
            {
                slideFiveNews.articles && slideFiveNews.articles.map((item, index) => (
                    <div key={index}>
                        <img src={item.urlToImage} alt="..." />
                        <h2 className="legend">{item.title}</h2>
                    </div>
                ))
            }
        </Carousel>
    )
}
