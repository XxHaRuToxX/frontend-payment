import React, { useEffect, useState } from 'react';
import { NewsArticle } from '../../components/newsApi/newsArticles/NewsArticle';
import { useNewsApi } from '../../context/NewsContextProvider';
import './../business/business.css';
import { Form } from 'react-bootstrap';

export const Technology = () => {
    const { getNewsSources } = useNewsApi();

    const [dataSource, setDataSource] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const datasSource = async () => {
            setDataSource(await getNewsSources("technology"))
        }

        datasSource();
    }, []);

    const searcher = (e) => {
        setSearch(e.target.value);
    }
    const result = !search ? dataSource : dataSource.filter((data) => data.title.toLowerCase().includes(search.toLocaleLowerCase()));

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center">
                <Form.Control
                    value={search}
                    onChange={searcher}
                    className="w-50 me-2 input_business"
                    type="text"
                    placeholder="Search..."
                    aria-label="Search" />
            </div>
            <div className="all_notices">
                {
                    result ? result.map((news) => (
                        <NewsArticle data={news} key={news.url} />
                    )) : (
                        <p>Loading...</p>
                    )
                }
            </div>
        </div>
    )
}
