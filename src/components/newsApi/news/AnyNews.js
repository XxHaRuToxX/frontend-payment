import React from "react";
import { NewsArticle } from "../newsArticles/NewsArticle";
import { Slider } from "../slider/Slider";
import { Navbar } from '../navbar/Navbar';
import '../../../styles/styles.css';
import './anyNews.css';
import { useNewsApi } from "../../../context/NewsContextProvider";

export const AnyNews = () => {
    const { getData } = useNewsApi();;

    return (
        <div className="wrapper" >
            <Navbar />
            <Slider />
            <div className="all_notices">
                {getData.articles ? (
                    getData.articles.map((news) => (
                        <NewsArticle data={news} key={news.url} />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};
