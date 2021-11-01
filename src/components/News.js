import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
   

    const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const newsUpdate = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ef26a13151c543fd8860f24681679203&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    }

    useEffect(() => {
        document.title = `${Capitalize(props.category)}-By React`;
        newsUpdate();

    }, [])

    // async componentDidMount() {
    //let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData);
    // this.setState({ articles: parsedData.articles,
    //      totalResults: parsedData.totalResults,
    //     loading : false})
    //     this.newsUpdate();
    // }

    const handlePrev = async () => {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ef26a13151c543fd8860f24681679203&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        //    this.setState({loading:true});
        //     let data = await fetch(url);
        //     let parsedData = await data.json()


        //     this.setState({
        //         page: this.state.page - 1,
        //         articles: parsedData.articles,
        //         loading :false
        //     })

        setPage(page - 1);
        newsUpdate();
    }

    const handleNext = async () => {
        //     console.log('Next');
        //     if (this.state.page + 1 > Math.ceil(this.totalResults / this.props.pageSize)) {
        //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ef26a13151c543fd8860f24681679203&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //         this.setState({loading:true});
        //         let data = await fetch(url);
        //         let parsedData = await data.json()
        //         console.log(parsedData);

        //         this.setState({
        //             page: this.state.page + 1,
        //             articles: parsedData.articles,
        //             loading : false
        //         })

        //     }
        // }

        setPage(page + 1)
        newsUpdate();
    }
    const fetchMoreData = async () => {
    
        setPage(page + 1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ef26a13151c543fd8860f24681679203&page=${page+1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };

    return (
        <>
            <h2 className='text-center m-3' style={{margin:'35px 0px',marginTop:'90px'}}>Daily News-Top {Capitalize(props.category)} Headlines </h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {/* !this.state.loading&&   */}
                        {articles.map((element) => {
                            return <div className='col-md-4' key={element.url}>
                                <NewsItem title={element.title} Description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>


    )

}
export default News
News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
};


News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
};