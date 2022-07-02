import React, { useEffect, useState } from 'react';
import { NewsArticle } from '../../components/newsApi/newsArticles/NewsArticle';
import { useNewsApi } from '../../context/NewsContextProvider';

export const Sports = () => {

    const {getNewsSources} = useNewsApi();

    const [dataSource, setDataSource] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(()=>{
        const datasSource  = async ()=>{
            setDataSource(await getNewsSources("sports"))
        }

        datasSource();
    },[]);

    const searcher = (e)=>{
        setSearch(e.target.value);
    }
    const result = !search ? dataSource : dataSource.filter((data)=>data.title.includes(search));

    return (
        <div>
            <input value={search} onChange={searcher} className="form-control me-2 fs-4 fw-bold" type="text" placeholder="Search" aria-label="Search"/>
            <div className="all_notices">
                {
                    dataSource ? dataSource.map((news) => (
                        <NewsArticle data={news} key={news.url} />
                    )): (
                        <p>Loading...</p>
                    )
                }
            </div>
        </div>
    )
}
